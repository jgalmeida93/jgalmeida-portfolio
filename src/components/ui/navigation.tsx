"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { FaBolt } from "react-icons/fa6";

export interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
}

export function Navigation({ items, onItemClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleItemClick = (item: NavigationItem) => {
    onItemClick?.(item);
    setMobileMenuOpen(false);
  };

  const isCurrentPage = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-4">
      <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
        <div className="px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-white hover:text-zinc-300 transition-colors"
              >
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                  {/* <SiGnometerminal className="text-white text-xl" /> */}
                  {/* Alternative terminal icon - uncomment to test */}
                  {/* <VscTerminalBash className="text-white text-xl" /> */}
                  <FaBolt className="text-white text-xl" />
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {items.map((item) => {
                const isCurrent = isCurrentPage(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                      isCurrent
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.name === "HOME"
                      ? "Home"
                      : item.name === "PROJECTS"
                        ? "Projects"
                        : item.name === "EXPERIENCE"
                          ? "Experience"
                          : item.name === "CONTACT"
                            ? "Contact"
                            : item.name}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/20 mt-2">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {items.map((item) => {
                  const isCurrent = isCurrentPage(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                        isCurrent
                          ? "text-white bg-white/20"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name === "HOME"
                        ? "Home"
                        : item.name === "PROJECTS"
                          ? "Projects"
                          : item.name === "EXPERIENCE"
                            ? "Experience"
                            : item.name === "CONTACT"
                              ? "Contact"
                              : item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
