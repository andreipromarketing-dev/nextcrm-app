"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FulltextSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const t = useTranslations("FulltextSearch");

  const handleSearch = async () => {
    router.push(`/fulltext-search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder={t("placeholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" className="gap-2" onClick={handleSearch}>
        <span className="hidden sm:flex">{t("button")}</span>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default FulltextSearch;
