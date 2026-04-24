"use client";

import moment from "moment";
import { useTranslations } from "next-intl";

import { ColumnDef } from "@tanstack/react-table";

import { statuses } from "../table-data/data";
import { AdminUser } from "../table-data/schema";
import { DataTableRowActions } from "./data-table-row-actions";
import { DataTableColumnHeader } from "./data-table-column-header";
import { formatDistanceToNowStrict } from "date-fns";

export function useAdminUsersColumns() {
  const t = useTranslations("AdminPage.columns");

  const columns: ColumnDef<AdminUser>[] = [
    {
      accessorKey: "created_on",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("dateCreated")} />
      ),
      cell: ({ row }) => (
        <div className="w-[130px]">
          {moment(row.getValue("created_on")).format("YYYY/MM/DD-HH:mm")}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "lastLoginAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("lastLogin")} />
      ),
      cell: ({ row }) => (
        <div className="min-w-[150px]">
          {formatDistanceToNowStrict(
            new Date(row.original.lastLoginAt || new Date()),
            { addSuffix: true }
          )}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("name")} />
      ),
      cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("email")} />
      ),
      cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "role",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("role")} />
      ),
      cell: ({ row }) => (
        <div className="">{row.original.role ?? "member"}</div>
      ),
      enableSorting: true,
      enableHiding: true,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "userStatus",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("status")} />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue("userStatus")
        );

        if (!status) {
          return null;
        }

        return (
          <div className="flex items-center">
            {status.icon && (
              <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "userLanguage",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t("language")} />
      ),
      cell: ({ row }) => <div className="">{row.getValue("userLanguage")}</div>,
      enableSorting: true,
      enableHiding: true,
    },
    {
      id: "actions",
      cell: ({ row }) => <DataTableRowActions row={row} />,
    },
  ];

  return columns;
}