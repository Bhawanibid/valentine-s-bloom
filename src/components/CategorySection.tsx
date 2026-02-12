import { Heart, Flower2, Candy, Sparkles } from "lucide-react";

const categories = [
  { icon: Flower2, label: "Flowers", count: 24 },
  { icon: Candy, label: "Chocolates", count: 18 },
  { icon: Heart, label: "Cards", count: 32 },
  { icon: Sparkles, label: "Luxury", count: 15 },
];

const CategorySection = () => (
  <section id="categories" className="py-16 bg-muted/40">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
        Shop by Category
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        Find the perfect gift for your special someone
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="group bg-card rounded-xl p-6 text-center card-hover cursor-pointer border"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <cat.icon size={24} className="text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{cat.label}</h3>
            <p className="text-sm text-muted-foreground">{cat.count} items</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
