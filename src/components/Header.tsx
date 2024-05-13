'use client';
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu';
import { Button } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  
  {
    href: "#pricing",
    label: "الباقات",
  },  
  {
    href: "#features",
    label: "الخصائص",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header>
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
              <NavigationMenuItem className="font-bold  hidden sm:flex">
              <Link href="/" className="flex p-2 ml-2 items-center">
                <div className='w-fit'>
                    <Image
                    src="https://i.ibb.co/ZKkG3ZX/logo.png"
                    alt="logo"
                    className="invert dark:filter-none "
                    height={40}
                    width={40}
                    />
                </div>
                <h1 className='font-bold pl-2 text-xl'>FursanHub</h1>              
              </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="font-bold flex">
                <nav className="flex justify-center items-center gap-2 mt-1">
                        {routeList.map(({ href, label }: RouteProps) => (
                          <a
                            key={label}
                            href={href}
                            onClick={() => setIsOpen(false)}                            
                          >
                            {label}
                          </a>
                        ))}
                </nav>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className='flex'>
                  <Button>
                    <Link href="/login">
                      تسجيل الدخول
                    </Link>
                  </Button>
                  <div className='ml-2'>
                    <ThemeToggler/>  
                  </div>  
                </div>                                     
              </NavigationMenuItem>   
            </NavigationMenuList>
          </NavigationMenu>         
        </header>
      );
}
