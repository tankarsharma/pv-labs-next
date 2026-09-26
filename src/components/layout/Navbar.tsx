"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo-removebg-preview (1).png";

interface NavLinkItem {
  label: string;
  path: string;
  children?: NavLinkItem[];
}

const navLinks: NavLinkItem[] = [
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "A+ Content", path: "/services#a-content-ebc-design" },
      { label: "Listing Images", path: "/services#product-hero-images" },
      { label: "Storefront / Brand Store", path: "/services#catalog-rpd-creation" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  { label: "Results", path: "/case-studies" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const toggleMobileSubMenu = (label: string) => {
    setOpenMobileSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center group">
          <img
            src={logo.src}
            alt="PV Labs"
            className="h-16 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center bg-secondary/50 p-1 rounded-full border border-border/40 shadow-sm">
            {navLinks.map((link) => (
              <div
                key={link.path + link.label}
                className="relative"
                onMouseEnter={() => link.children && setHoveredMenu(link.label)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                }}
              >
                <Link
                  href={link.path}
                  className={`relative text-xs font-semibold transition-colors flex items-center gap-1.5 px-5 py-2 z-10 rounded-full ${
                    pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${hoveredMenu === link.label ? "rotate-180" : ""}`}
                    />
                  )}

                  {(pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path))) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 1,
                      }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.children && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 glass-card p-3 shadow-xl rounded-2xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.path}
                          className={`block px-4 py-2.5 rounded-xl text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                            pathname === child.path ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="gradient-btn px-6 py-2.5 text-sm">
              Request Creative Audit
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <div key={link.path + link.label}>
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={link.path}
                      onClick={() => !link.children && setOpen(false)}
                      className={`text-lg font-medium ${pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => toggleMobileSubMenu(link.label)}
                        className="p-2 text-muted-foreground"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${openMobileSubMenus[link.label] ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {link.children && openMobileSubMenus[link.label] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-4 space-y-1 mb-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.path}
                          onClick={() => setOpen(false)}
                          className={`block text-sm py-1.5 ${pathname === child.path ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 gradient-btn px-6 py-3 text-center text-sm font-bold"
                >
                  Request Creative Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
