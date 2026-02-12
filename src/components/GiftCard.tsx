import { Heart, Star, ShoppingBag } from "lucide-react";
import type { Gift } from "@/data/gifts";

const GiftCard = ({ gift }: { gift: Gift }) => (
  <div className="group bg-card rounded-xl overflow-hidden border card-hover">
    <div className="relative aspect-square overflow-hidden bg-muted">
      <img
        src={gift.image}
        alt={gift.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {gift.tag && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {gift.tag}
        </span>
      )}
      <button className="absolute top-3 right-3 w-9 h-9 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card transition-colors">
        <Heart size={16} />
      </button>
    </div>

    <div className="p-4">
      <div className="flex items-center gap-1 mb-2">
        <Star size={13} className="fill-gold text-gold" />
        <span className="text-xs font-medium text-muted-foreground">{gift.rating}</span>
      </div>
      <h3 className="font-display font-semibold text-foreground text-sm mb-1 line-clamp-1">
        {gift.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-3">{gift.category}</p>
      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-lg text-foreground">
          ${gift.price.toFixed(2)}
        </span>
        <button className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-medium px-3 py-2 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
          <ShoppingBag size={13} />
          Add
        </button>
      </div>
    </div>
  </div>
);

export default GiftCard;
