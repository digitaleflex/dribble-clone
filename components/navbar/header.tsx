/* eslint-disable react/jsx-no-duplicate-props */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import HeaderNavigationMenuContent from "./header-menu-navigation-content";
import { Input } from "../ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg">
      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full" side={"top"}>
            <nav className="flex flex-col space-y-4 p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="w-full justify-start">
                    Find Designers
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2">
                  <DropdownMenuItem>
                    <Link href={"#"} className="w-full">
                      Designer search
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"#"} className="w-full">
                      Post a job
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"#"} className="w-full">
                      Go pro
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
              >
                Inspiration
              </Link>
              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground "
              >
                Jobs
              </Link>
              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground "
              >
                Go Pro
              </Link>
              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground "
              >
                Login
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Find Designers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[250px] gap-3 flex flex-col p-4 items-center">
                  <HeaderNavigationMenuContent
                    title="Design search"
                    subtitle="Find designer for your team"
                  />
                  <HeaderNavigationMenuContent
                    title="Post a job"
                    subtitle="Hire the best designers"
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Inspiration
        </Link>
        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Jobs
        </Link>
        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Go Pro
        </Link>
      </nav>

      {/* Brand */}
      <Link
        href={"/"}
        className="text-2xl font-bold hover:text-foreground/65 transition-all"
      >
        Dribble
      </Link>

      {/* Search & Actions */}
      <div className="flex items-center space-x-4">
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Search className="h-5 w-5" />
          <span className="sr-only">Open Search</span>
        </Button>

        <div className="hidden lg:block relative">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-10 pr-4 py-5 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 transition-all"
              type="search"
              placeholder="Search Dribble"
            />
          </div>
        </div>

          <Button  variant={"ghost"} className="hidden lg:inline flex text-sm font-medium hover:bg">
            Log In
          </Button>

          <Button size={"lg"}  className="rounded-full p-6 bg-foreground text-white hover:bg-foreground/80" >
            Sign up
          </Button>

      </div>
    </header>
  );
};

export default Header;
