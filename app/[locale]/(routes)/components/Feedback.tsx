"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FeedbackForm from "./FeedbackForm";

import { Button } from "@/components/ui/button";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="hidden sm:flex">
        <Button variant={"secondary"} onClick={() => setOpen(false)}>
          <ChatBubbleIcon className="w-4 h-4 mr-2" />
          {t("feedback")}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <FeedbackForm setOpen={setOpen} />
      </PopoverContent>
    </Popover>
  );
};

export default Feedback;
