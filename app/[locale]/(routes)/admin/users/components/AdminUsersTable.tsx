"use client";

import { AdminUserDataTable } from "../table-components/data-table";
import { useAdminUsersColumns } from "../table-components/columns";
import { AdminUser } from "../table-data/schema";

interface AdminUsersTableProps {
  data: AdminUser[];
}

export function AdminUsersTable({ data }: AdminUsersTableProps) {
  const columns = useAdminUsersColumns();

  return <AdminUserDataTable columns={columns} data={data} />;
}