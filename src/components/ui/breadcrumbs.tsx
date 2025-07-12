"use client";

import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  HomeIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  className?: string;
}

export function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const router = useRouter();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [];
    }

    const breadcrumbs: BreadcrumbItem[] = [];
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({
        name,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  const handleBack = () => {
    if (breadcrumbs.length > 1) {
      // Go to the previous breadcrumb
      const previousBreadcrumb = breadcrumbs[breadcrumbs.length - 2];
      router.push(previousBreadcrumb.href);
    } else {
      // Go home if we're at the first level
      router.push("/");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`md:hidden ${className || ""}`}
    >
      <div className="bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Back button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="flex items-center space-x-1 text-zinc-400 hover:text-white"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Button>

            {/* Breadcrumb trail */}
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="flex items-center text-zinc-400 hover:text-white transition-colors"
              >
                <HomeIcon className="h-4 w-4" />
              </Link>

              {breadcrumbs.map((item) => (
                <div key={item.href} className="flex items-center space-x-2">
                  <ChevronLeftIcon className="h-4 w-4 text-zinc-600" />
                  {breadcrumbs[breadcrumbs.length - 1].href === item.href ? (
                    <span className="text-sm font-medium text-white">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
