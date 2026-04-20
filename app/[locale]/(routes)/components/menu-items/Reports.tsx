import { FileBarChart } from "lucide-react"
import { NavItem } from "../nav-main"

/**
 * Reports Module Menu Item - Task 2.6.4
 *
 * Converted from Link pattern to NavItem structure for sidebar integration.
 * Used in app-sidebar.tsx with module filtering (name === "reports").
 *
 * References:
 * - Previous: Simple Link component with FileBarChart icon
 * - ModuleMenu.tsx: lines 96-100
 * - Route: /reports
 */

interface GetReportsMenuItemProps {
  title: string
  reports: {
    dashboard: string
    sales: string
    leads: string
    accounts: string
    activity: string
    campaigns: string
    users: string
  }
}

/**
 * Returns navigation item configuration for Reports module
 * @param title - Localized title for the menu item
 * @returns NavItem object compatible with NavMain component
 */
export default function getReportsMenuItem({
  title,
  reports,
}: GetReportsMenuItemProps): NavItem {
  return {
    title,
    icon: FileBarChart,
    items: [
      { title: reports.dashboard, url: "/reports", exact: true },
      { title: reports.sales, url: "/reports/sales" },
      { title: reports.leads, url: "/reports/leads" },
      { title: reports.accounts, url: "/reports/accounts" },
      { title: reports.activity, url: "/reports/activity" },
      { title: reports.campaigns, url: "/reports/campaigns" },
      { title: reports.users, url: "/reports/users" },
    ],
  }
}
