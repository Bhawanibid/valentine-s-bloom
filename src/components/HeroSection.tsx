import { Heart, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBanner} alt="Valentine roses" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </div>

    <div className="relative container mx-auto px-4 py-24 md:py-36 text-center">
      <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
        <Heart className="fill-primary text-primary" size={14} />
        <span className="text-xs font-medium text-secondary-foreground tracking-wider uppercase">
          Valentine's Day Special
        </span>
      </div>

      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
        Celebrate Love with
        <br />
        <span className="text-gradient">Perfect Gifts</span>
      </h1>

      <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Discover handpicked Valentine's gifts that speak the language of love.
        From timeless roses to luxury surprises — make this day unforgettable.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/gifts"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
        >
          <Gift size={18} />
          Explore Gifts
        </Link>
        <a
          href="#categories"
          className="inline-flex items-center gap-2 border border-border bg-card/80 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-full font-medium text-sm hover:bg-secondary transition-colors"
        >
          Browse Categories
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
