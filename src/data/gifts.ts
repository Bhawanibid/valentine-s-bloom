import giftRoses from "@/assets/gift-roses.jpg";
import giftChocolates from "@/assets/gift-chocolates.jpg";
import giftCard from "@/assets/gift-card.jpg";
import giftTeddy from "@/assets/gift-teddy.jpg";
import giftJewelry from "@/assets/gift-jewelry.jpg";
import giftSpa from "@/assets/gift-spa.jpg";
import giftPerfume from "@/assets/gift-perfume.jpg";
import giftWine from "@/assets/gift-wine.jpg";

export type Gift = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  tag?: string;
};

export const gifts: Gift[] = [
  { id: 1, name: "Red & Pink Rose Bouquet", price: 49.99, category: "Flowers", image: giftRoses, rating: 4.9, tag: "Bestseller" },
  { id: 2, name: "Heart Chocolate Box", price: 34.99, category: "Chocolates", image: giftChocolates, rating: 4.8, tag: "Popular" },
  { id: 3, name: "Handmade Valentine Card", price: 12.99, category: "Cards", image: giftCard, rating: 4.7 },
  { id: 4, name: "Cuddle Teddy Bear", price: 29.99, category: "Gifts", image: giftTeddy, rating: 4.6 },
  { id: 5, name: "Gold Heart Pendant", price: 129.99, category: "Luxury", image: giftJewelry, rating: 5.0, tag: "Premium" },
  { id: 6, name: "Rose Petal Spa Set", price: 59.99, category: "Gifts", image: giftSpa, rating: 4.5 },
  { id: 7, name: "Valentine Perfume", price: 79.99, category: "Luxury", image: giftPerfume, rating: 4.8 },
  { id: 8, name: "Romance Wine Set", price: 64.99, category: "Gifts", image: giftWine, rating: 4.7 },
];

export const categories = ["All", "Flowers", "Chocolates", "Cards", "Gifts", "Luxury"];
