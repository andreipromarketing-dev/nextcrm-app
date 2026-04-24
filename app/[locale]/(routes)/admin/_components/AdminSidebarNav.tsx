"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Key, Users, Settings, SlidersHorizontal, ClipboardList, Coins } from "lucide-react";

export function AdminSidebarNav() {
  const t = useTranslations("AdminPage");
  const pathname = usePathname();

  const navItems = [
    { labelKey: "llmKeys", href: "/admin/llm-keys", icon: Key },
    { labelKey: "users", href: "/admin/users", icon: Users },
    { labelKey: "services", href: "/admin/services", icon: Settings },
    { labelKey: "crmSettings", href: "/admin/crm-settings", icon: SlidersHorizontal },
    { labelKey: "auditLog", href: "/admin/audit-log", icon: ClipboardList },
    { labelKey: "currencies", href: "/admin/currencies", icon: Coins },
  ];

  return (
    <nav className="flex flex-col gap-1">
      <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {t("title")}
      </p>
      {navItems.map(({ labelKey, href, icon: Icon }) => {
        const isActive = pathname.includes(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {t(labelKey)}
          </Link>
        );
      })}
    </nav>
  );
}
