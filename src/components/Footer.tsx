import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-secondary/50 py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Heart className="fill-primary text-primary" size={18} />
        <span className="font-display text-lg font-semibold text-foreground">Velvet & Roses</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Made with love for Valentine's Day 2026
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © 2026 Velvet & Roses. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
