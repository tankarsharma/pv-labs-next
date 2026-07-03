import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsCards from "@/components/home/StatsCards";
import FeaturedWork from "@/components/home/FeaturedWork";
import WhyChoose from "@/components/home/WhyChoose";
import ClientLogos from "@/components/home/ClientLogos";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
return (
<div className="min-h-screen bg-background">
<Navbar />
<Hero />
<ClientLogos />
<AboutPreview />
<ServicesGrid />
<StatsCards />
<FeaturedWork />
<WhyChoose />
<BlogPreview />
<FAQ />
<ContactCTA />
<Footer />
</div>
);
}