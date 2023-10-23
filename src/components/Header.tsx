"use client";

import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
const font = Montserrat({ weight: "600", subsets: ["latin"] });

function Header() {
  const [suggestion, setSuggestion] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <header>
      <div className="flex items-center p-4">
        <Link href="/" className="flex items-center">
          <div
            onClick={() => router.push("/board")}
            className="relative h-8 w-8 mr-4"
          >
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", font.className)}>Tasker</h1>
        </Link>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of the Tasker
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground font-light text-center">
          Whip your tasks into shape, where productivity meets pure technology!
        </p>
      </div>

      <div className="flex justify-center px-5 py-2 md:py-5 space-x-4">
        <p className="bg-white rounded-md shadow-md p-2 text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
              loading ? "animate-spin" : ""
            }`}
          />
          {suggestion.length !== 0
            ? `You have ${
                suggestion[0] === 1
                  ? "1 task to do"
                  : `${suggestion[0]} tasks to do`
              }, ${
                suggestion[1] === 1
                  ? "1 task in progress"
                  : `${suggestion[1]} tasks in progress `
              } and ${
                suggestion[2] === 1
                  ? "1 task done"
                  : `${suggestion[2]} tasks done`
              }`
            : "We are summarizing your tasks for the day"}
        </p>
      </div>
    </header>
  );
}

export default Header;
