import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Баг",
  },
  {
    value: "feature",
    label: "Функция",
  },
  {
    value: "documentation",
    label: "Документация",
  },
];

export const statuses = [
  {
    value: "ACTIVE",
    label: "В работе",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "PENDING",
    label: "Ожидает",
    icon: CircleIcon,
  },
  {
    value: "COMPLETE",
    label: "Завершено",
    icon: StopwatchIcon,
  },
];

export const priorities = [
  {
    label: "Низкий",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Средний",
    value: "normal",
    icon: ArrowRightIcon,
  },
  {
    label: "Высокий",
    value: "high",
    icon: ArrowUpIcon,
  },
  {
    label: "Критичный",
    value: "critical",
    icon: ArrowUpIcon,
  },
];
