"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { TfiShine, TfiDesktop } from "react-icons/tfi";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <TfiShine className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light <TfiShine className='h-5 w-5' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark <MoonIcon className='h-5 w-5' />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System <TfiDesktop className='w-5 h-5' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
