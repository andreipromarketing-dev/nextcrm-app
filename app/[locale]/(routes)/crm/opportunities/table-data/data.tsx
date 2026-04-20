import {
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "ACTIVE",
    label: "В работе",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "INACTIVE",
    label: "Inactive",
    icon: CircleIcon,
  },
  {
    value: "PENDING",
    label: "Ожидает",
    icon: CircleIcon,
  },
  {
    value: "CLOSED",
    label: "Closed",
    icon: StopwatchIcon,
  },
];
