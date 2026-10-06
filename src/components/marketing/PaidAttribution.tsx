"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { rememberPaidSource } from "@/lib/paid-attribution";
export default function PaidAttribution() {
  const pathname = usePathname();
  useEffect(() => {
    try { rememberPaidSource(window.location.search, window.sessionStorage); } catch { /* No storage access required. */ }
  }, [pathname]);
  return null;
}
