import {
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const statuses = [
  {
    value: "NEW",
    label: "Новая",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "IN_PROGRESS",
    label: "In progress",
    icon: StopwatchIcon,
  },
  {
    value: "COMPLETED",
    label: "Completed",
    icon: StopwatchIcon,
  },
];
