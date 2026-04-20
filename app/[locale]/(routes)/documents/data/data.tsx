import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  { value: "bug", label: "Баг" },
  { value: "feature", label: "Функция" },
  { value: "documentation", label: "Документация" },
];

export const documentSystemTypes = [
  { value: "RECEIPT", label: "Receipt" },
  { value: "CONTRACT", label: "Contract" },
  { value: "OFFER", label: "Offer" },
  { value: "OTHER", label: "Other" },
];

export const processingStatuses = [
  { value: "PENDING", label: "Ожидает", icon: CircleIcon },
  { value: "PROCESSING", label: "Processing", icon: StopwatchIcon },
  { value: "READY", label: "Ready", icon: CheckCircledIcon },
  { value: "FAILED", label: "Failed", icon: CrossCircledIcon },
];

// Keep legacy exports for any remaining references
export const statuses = processingStatuses;
export const priorities = [
  { label: "Низкий", value: "low" },
  { label: "Средний", value: "normal" },
  { label: "Высокий", value: "high" },
  { label: "Критичный", value: "critical" },
];
