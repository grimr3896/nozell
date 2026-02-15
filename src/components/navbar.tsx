
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Image, MessageSquare, Info } from "lucide-react";

const navItems = [
  { name: "Home & Services", href: "/home", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "Contact & Booking", href: "/contact", icon: MessageSquare },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/home" className="flex items-center space-x-2">
          <span className="font-headline text-2xl font-bold text-primary tracking-tight uppercase">Savie Royal</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary flex items-center gap-1.5",
                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          {/* Mobile menu could be added here if needed */}
        </div>
      </div>
    </header>
  );
}
