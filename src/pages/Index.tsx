import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FloatingHearts from "@/components/FloatingHearts";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";
import { gifts } from "@/data/gifts";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background">
    <FloatingHearts />
    <Navbar />
    <HeroSection />
    <CategorySection />

    {/* Featured Gifts Preview */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Gifts
            </h2>
            <p className="text-muted-foreground mt-1">Hand-picked for your Valentine</p>
          </div>
          <Link
            to="/gifts"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gifts.slice(0, 4).map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>

        <div className="sm:hidden text-center mt-6">
          <Link
            to="/gifts"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Gifts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-16 valentine-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Don't Miss Valentine's Day
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Order before February 12th for guaranteed delivery. Free gift wrapping on all orders.
        </p>
        <Link
          to="/gifts"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
