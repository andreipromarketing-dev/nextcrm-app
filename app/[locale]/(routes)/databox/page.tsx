import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Container from "../components/ui/Container";
import { getTranslations } from "next-intl/server";

type Props = {};

const CrmPage = async (props: Props) => {
  const t = await getTranslations("DataboxPage");

  return (
    <Container
      title={t("title")}
      description={t("description")}
    >
      <div>Module content here</div>
    </Container>
  );
};

export default CrmPage;
