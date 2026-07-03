"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  to: string;
  activeClassName?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, className, activeClassName, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    return (
      <Link
        ref={ref}
        href={to}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;