import { getUsers } from "@/actions/get-users";
import React from "react";
import Container from "../../components/ui/Container";
import { InviteForm } from "./components/IviteForm";
import { Separator } from "@/components/ui/separator";

import { getSession } from "@/lib/auth-server";
import { AdminUsersTable } from "./components/AdminUsersTable";
import { Users } from "@prisma/client";
import SendMailToAll from "./components/send-mail-to-all";
import { getTranslations } from "next-intl/server";

const AdminUsersPage = async () => {
  const users: Users[] = await getUsers();
  const t = await getTranslations("AdminPage");

  const session = await getSession();

  if (session?.user?.role !== "admin") {
    return (
      <Container
        title={t("title")}
        description={t("accessNotAllowed")}
      >
        <div className="flex w-full h-full items-center justify-center">
          {t("accessNotAllowed")}
        </div>
      </Container>
    );
  }

  return (
    <Container
      title={t("usersPage.title")}
      description={t("usersPage.description")}
    >
      <div className="flex-col1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {t("usersPage.inviteHeading")}
        </h4>
        <InviteForm />
      </div>
      <Separator />
      <div>
        <SendMailToAll />
      </div>
      <Separator />

      <AdminUsersTable data={users} />
    </Container>
  );
};

export default AdminUsersPage;