import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/providers/TranslationProvider";

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, isTranslating, languages } = useTranslation();

  const handleSelect = async (code: string) => {
    setOpen(false);
    if (code === language.code) {
      return;
    }
    try {
      await setLanguage(code);
    } catch (error) {
      console.error("Failed to change language", error);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 rounded-full border-primary/40 px-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
          disabled={isTranslating}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">Language</span>
          <span className="font-medium">{language.nativeName}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="end">
        <Command>
          <CommandInput placeholder="Search languages..." autoFocus />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup heading="Available Languages">
              {languages.map((entry) => (
                <CommandItem
                  key={entry.code}
                  value={`${entry.englishName} ${entry.nativeName}`}
                  onSelect={() => handleSelect(entry.code)}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {entry.englishName}
                    </span>
                    {entry.nativeName !== entry.englishName && (
                      <span className="text-xs text-muted-foreground">
                        {entry.nativeName}
                      </span>
                    )}
                  </div>
                  <Check
                    className={cn(
                      "h-4 w-4 text-primary",
                      entry.code === language.code ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
