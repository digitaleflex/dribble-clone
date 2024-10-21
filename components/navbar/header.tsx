/* eslint-disable react/jsx-no-duplicate-props */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import HeaderNavigationMenuContent from "./header-menu-navigation-content";
import { Input } from "../ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="flex items-center justify-between  p-4">
      <div className="flex items-center lg:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu className="h-6 w-6" />

              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full" side={"top"}>
            <nav className="flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="w-full justify-start">
                    Find Desingers
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={"#"} className="w-full">
                      Designer search
                    </Link>
                  </DropdownMenuItem>

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
                className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
              >
                jobs
              </Link>

              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
              >
                Firx
              </Link>

              <Link
                href={"#"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
              >
                Login
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden  lg:flex items-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-transparent">
              <NavigationMenuTrigger>Find Designers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[250px] gap-3 flex flex-col p-4 items-center">
                  <HeaderNavigationMenuContent
                    title="Design search "
                    subtitle="Find designer for ur member"
                  />
                  <HeaderNavigationMenuContent
                    title="Design search "
                    subtitle="Find designer for ur member"
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
        >
          Inspiration
        </Link>

        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
        >
          jobs
        </Link>

        <Link
          href={"#"}
          className="text-sm font-medium text-muted-foreground hover:text-foreground w-full"
        >
          Firx
        </Link>
      </nav>

        <Link href={"#"} className="text-2xl  font-bold hover:text-forground/65">
            Dribble
        </Link>

        <div className={'flex items-center space-4'}>
          <Button variant={"ghost"} size={"icon"}  className="lg:hidden" >  
            <Search className="h-5 w-5"  />
            <span className="sr-only" >Open Search</span>
        </Button>

        <div className="hidden lg:block relative">
        <Search className="absolute inset-y-0 right-0 pl-3 pr-10 w-full bg-transparent text-gray-400 border-0 rounded-md focus:outline-none focus:ring-0 focus:text-gray-900 sm:text-sm" />
        <Input
            className="pl-10 pr-5 py-5 rounded-full"
            type="search"
            placeholder="Search Dribble"
        />
        </div>

        
        </div>


    </header>
  );
};

export default Header;
