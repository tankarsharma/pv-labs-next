import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import logo from "../../assets/logo-removebg-preview (1).png";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <img
                src={logo.src}
                alt="PV Labs"
                className="h-16 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-[280px]">
              PV Labs is an e-commerce creative company helping Amazon sellers and D2C brands build high-converting visuals.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ icon: Icon, label, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`group w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 transition-all duration-300 hover:scale-110 ${hoverColor}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <span className="text-background/40 text-xs ml-1">@pvlabs</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "A+ Content", path: "/services#a-content-ebc-design" },
                { label: "Listing Images", path: "/services#product-hero-images" },
                { label: "Storefront", path: "/services#catalog-rpd-creation" },
                { label: "Pricing", path: "/pricing" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", path: "/about" },
                { label: "Results / Case Studies", path: "/case-studies" },
                { label: "Pricing", path: "/pricing" },
                { label: "Founders", path: "/founders" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Talk to us</h4>
            <div className="flex flex-col gap-4 text-sm text-background/60">
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:growth@pvlabs.ai"
                  className="bg-white/10 hover:bg-[#EA4335] hover:text-white text-background px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition-all w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={14} /> Email Us
                </a>
                <a
                  href="tel:+917417791003"
                  className="bg-white/10 hover:bg-primary hover:text-white text-background px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition-all w-fit"
                >
                  <Phone size={14} /> Call Us
                </a>
                <a
                  href="https://wa.me/917417791003"
                  className="bg-black hover:bg-green-300 border-white text-white px-4 py-2 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all w-fit"
                >
                  <FaWhatsapp /> Talk on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" /> Mon–Sat · 10am–7pm IST
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <p className="flex items-center gap-1">© 2026 PV Labs. Made for Indian E-Commerce 🇮🇳</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
