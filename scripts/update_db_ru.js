const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const translations = {
    'New': 'Новая',
    'Need analysis': 'Требует анализа',
    'Offer sent': 'КП отправлено',
    'Offer accepted': 'КП принято',
    'Contract draft': 'Черновик договора'
  };

  // Update Sales Stages
  console.log("Updating Sales Stages...");
  for (const [eng, rus] of Object.entries(translations)) {
    const stage = await prisma.crm_Opportunities_Sales_Stages.findFirst({
      where: { name: eng }
    });
    if (stage) {
      await prisma.crm_Opportunities_Sales_Stages.update({
        where: { id: stage.id },
        data: { name: rus }
      });
      console.log(`Updated stage '${eng}' -> '${rus}'`);
    } else {
      console.log(`Stage '${eng}' not found (maybe already translated?).`);
    }
  }

  // Check / Add RUB Currency
  console.log("Checking RUB Currency...");
  const rubFound = await prisma.currency.findUnique({
    where: { code: 'RUB' }
  });
  if (!rubFound) {
    await prisma.currency.create({
      data: {
        code: 'RUB',
        name: 'Российский рубль',
        symbol: '₽',
        isEnabled: true,
        isDefault: true
      }
    });
    console.log("Added currency RUB to database.");
  } else {
      await prisma.currency.update({
          where: { code: 'RUB' },
          data: {
            isEnabled: true,
            isDefault: true
          }
      });
      console.log("Currency RUB already exists, ensured it is enabled and default.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
