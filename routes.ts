import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/public/assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "@/public/assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#our-services", label: "Our Services" },
  { href: "#contact-us", label: "Contact Us" },
];
export const shoes = [
  {
    thumbnail: "/assets/images/thumbnail-shoe1.svg",
    bigImage: "/assets/images/big-shoe1.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe2.svg",
    bigImage: "/assets/images/big-shoe2.png",
  },
  {
    thumbnail: "/assets/images/thumbnail-shoe3.svg",
    bigImage: "/assets/images/big-shoe3.png",
  },
];

export const SHOES = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: "/assets/images/big-shoe1.png",
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: "/assets/images/big-shoe2.png",
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: "/assets/images/big-shoe3.png",
  },
];

export const statistics = [
  { value: "1M+", label: "Brands" },
  { value: "500k+", label: "Shops" },
  { value: "25M+", label: "Customers" },
];



export interface Product {
  imgURL: string;
  name: string;
  price: string;
}
export interface prodo {
  imgURL: string;
  id: string;
  description: string;
  name: string;
  price: string;
}

// constants.ts

export interface Service {
  icon: string;
  title: string;
  description: string;
}



export const products: Product[] = [
  {
    imgURL: '/assets/images/shoe4.svg',
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    imgURL: '/assets/images/shoe5.svg',
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    imgURL: '/assets/images/shoe6.svg',
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    imgURL: '/assets/images/shoe7.svg',
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
];


export const prodo:prodo[] = [
  {
    id: "1",  
    imgURL: "'/assets/images/shoe6.svg",
    name: "Nike Air Max 2024",
    description: "Premium running shoes with advanced cushioning technology.",
    price: "$199.99",
  },
  {
    id: "2",
    imgURL: "/assets/images/product2.jpg",
    name: "Adidas Ultraboost 25",
    description: "High-performance sneakers designed for comfort and speed.",
    price: "$179.99",
  },
  {
    id: "3",
    imgURL: "/assets/images/product3.jpg",
    name: "Under Armour HOVR Infinite",
    description: "Smart running shoes with real-time coaching and tracking features.",
    price: "$219.99",
  },
  {
    id: "4",
    imgURL: "/assets/images/product4.jpg",
    name: "New Balance Fresh Foam 1080v11",
    description: "Versatile running shoes with plush Fresh Foam cushioning.",
    price: "$159.99",
  },
  {
    id: "5",
    imgURL: "/assets/images/product5.jpg",
    name: "Brooks Ghost 14",
    description: "Neutral running shoes with balanced cushioning for all runners.",
    price: "$139.99",
  },
  {
    id: "6",
    imgURL: "/assets/images/product6.jpg",
    name: "Asics Gel-Nimbus 23",
    description: "Comfortable and durable shoes for long-distance running.",
    price: "$189.99",
  },
];


export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];


// types.ts
export interface SpecialOffer {
  imgURL: string;
  title: string;
  description: string;
  price: string;
  discount: string;
}

// types.ts
export interface CustomerReview {
  imgURL: string;
  name: string;
  review: string;
  rating: number; // Rating out of 5
}

// routes.ts (or any file where you define routes or mock data)
export const discounts = [
  {
    imgURL: 'https://i.pinimg.com/236x/6c/77/57/6c775718e4fab55d718b37447fbc1e75.jpg',
    name: 'Nike Air Max 270',
    originalPrice: '$150.00',
    price: '$120.00',
    discount: 20, // 20% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/2a/99/5d/2a995dbd6e2f8f6b74ecb4fcddd1726c.jpg',
    name: 'Nike React Infinity Run',
    originalPrice: '$160.00',
    price: '$130.00',
    discount: 18, // 18% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/f2/d6/b1/f2d6b10237628d622b2d09a2b5ea6367.jpg',
    name: 'Nike ghost shoes ',
    originalPrice: '$100.00',
    price: '$45.00',
    discount: 17, // 17% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/96/96/cc/9696cc3c0775b3e695f40e90bebd362c.jpg',
    name: 'Nike Air Force 1',
    originalPrice: '$140.00',
    price: '$110.00',
    discount: 21, // 21% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/9b/b0/be/9bb0be3cd01a1b5446ed45d2d2d06067.jpg',
    name: 'Nike SB Dunk Low',
    originalPrice: '$180.00',
    price: '$150.00',
    discount: 17, // 17% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/e7/1d/d9/e71dd9e0b43d19bd70d91912fb9c9f25.jpg',
    name: 'Nike Air Force 1',
    originalPrice: '$123.00',
    price: '$43.00',
    discount: 21, // 21% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/e0/73/a5/e073a52f33b90d3b1f7b55427980bb6b.jpg',
    name: 'Nike Air Zoom Pegasus 37',
    originalPrice: '$344.00',
    price: '$230.00',
    discount: 18, // 18% off
  },
  {
    imgURL: 'https://i.pinimg.com/236x/f8/f3/3c/f8f33c8d47a886e19ff3f89bb60df7ae.jpg',
    name: 'Nike Air VaporMax',
    originalPrice: '$200.00',
    price: '$170.00',
    discount: 15, // 15% off
  },
];



// In your routes file or a mock data file
export const specialProducts = [
  {
    imgURL: "https://i.pinimg.com/236x/8d/4a/3a/8d4a3a960e0077a4d960e2640da49aba.jpg",
    name: 'Nike Air Max 270',
    price: '$149.99',
    originalPrice: '$199.99',
    specialFeature: 'Best Seller',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/5d/c4/51/5dc4519a0cbe1d8ca8112a59d2978503.jpg',
    name: 'Nike ZoomX Vaporfly',
    price: '$299.99',
    originalPrice: '$349.99',
    specialFeature: 'Limited Edition',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/e7/1d/d9/e71dd9e0b43d19bd70d91912fb9c9f25.jpg',
    name: 'Nike Free Run 5.0',
    price: '$129.99',
    originalPrice: '$159.99',
    specialFeature: 'New Arrival',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/f2/d6/b1/f2d6b10237628d622b2d09a2b5ea6367.jpg',
    name: 'Nike Free Run 5.0',
    price: '$129.99',
    originalPrice: '$159.99',
    specialFeature: 'New Arrival',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/20/f3/0a/20f30a14e8cf8d3b7ea1b2c4070bb922.jpg',
    name: 'Nike Free Run 5.0',
    price: '$129.99',
    originalPrice: '$159.99',
    specialFeature: 'New Arrival',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/8a/58/db/8a58db0eec0b8b781b22d7d7634fd0fb.jpg',
    name: 'Nike SB Dunk Low',
    price: '$179.99',
    originalPrice: '$229.99',
    specialFeature: 'Exclusive Release',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/55/bb/0a/55bb0a29731537e0f36be6a02738ac0b.jpg',
    name: 'Nike Air Force 1',
    price: '$139.99',
    originalPrice: '$179.99',
    specialFeature: 'Top Rated',
  },
  {
    imgURL: 'https://i.pinimg.com/236x/b4/3a/0b/b43a0bc8e50b6993490d79d88f23344d.jpg',
    name: 'Nike Air Jordan 1',
    price: '$249.99',
    originalPrice: '$299.99',
    specialFeature: 'Iconic Style',
  },
];







// In your routes file or a mock data file
export const customerFeedbacks = [
  {
    name: 'Alice Johnson',
    role: 'Fashion Enthusiast',
    feedback: 'Nike shoes are incredibly comfortable and stylish. I always get compliments on my new pairs!',
    imgURL: 'https://i.pinimg.com/236x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  },
  {
    name: 'John Smith',
    role: 'Professional Runner',
    feedback: 'The quality and performance of Nike running shoes are unmatched. They have helped me achieve new personal bests!',
    imgURL: 'https://i.pinimg.com/236x/86/9a/bd/869abd703f5957318fe760bfe85b14f8.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Fitness Trainer',
    feedback: 'Nike is workout apparel is both functional and fashionable. I love how it feels during my training sessions.',
    imgURL: 'https://i.pinimg.com/236x/32/2c/93/322c93ecf97455e782cf8469f7b8bda8.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Casual Wearer',
    feedback: 'I have been a Nike fan for years. Their shoes and clothing always deliver comfort and style.',
    imgURL: 'https://i.pinimg.com/236x/97/39/5e/97395e774f335d862cef7fc0e9b22956.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Fashion Enthusiast',
    feedback: 'Nike shoes are incredibly comfortable and stylish. I always get compliments on my new pairs!',
    imgURL: 'https://i.pinimg.com/236x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  },
  {
    name: 'John Smith',
    role: 'Professional Runner',
    feedback: 'The quality and performance of Nike running shoes are unmatched. They have helped me achieve new personal bests!',
    imgURL: 'https://i.pinimg.com/236x/86/9a/bd/869abd703f5957318fe760bfe85b14f8.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Fitness Trainer',
    feedback: 'Nike is workout apparel is both functional and fashionable. I love how it feels during my training sessions.',
    imgURL: 'https://i.pinimg.com/236x/32/2c/93/322c93ecf97455e782cf8469f7b8bda8.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Casual Wearer',
    feedback: 'I have been a Nike fan for years. Their shoes and clothing always deliver comfort and style.',
    imgURL: 'https://i.pinimg.com/236x/97/39/5e/97395e774f335d862cef7fc0e9b22956.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Fashion Enthusiast',
    feedback: 'Nike shoes are incredibly comfortable and stylish. I always get compliments on my new pairs!',
    imgURL: 'https://i.pinimg.com/236x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  },
  {
    name: 'John Smith',
    role: 'Professional Runner',
    feedback: 'The quality and performance of Nike running shoes are unmatched. They have helped me achieve new personal bests!',
    imgURL: 'https://i.pinimg.com/236x/86/9a/bd/869abd703f5957318fe760bfe85b14f8.jpg',
  },
  {
    name: 'Emma Davis',
    role: 'Fitness Trainer',
    feedback: 'Nike is workout apparel is both functional and fashionable. I love how it feels during my training sessions.',
    imgURL: 'https://i.pinimg.com/236x/32/2c/93/322c93ecf97455e782cf8469f7b8bda8.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Casual Wearer',
    feedback: 'I have been a Nike fan for years. Their shoes and clothing always deliver comfort and style.',
    imgURL: 'https://i.pinimg.com/236x/97/39/5e/97395e774f335d862cef7fc0e9b22956.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Fashion Enthusiast',
    feedback: 'Nike shoes are incredibly comfortable and stylish. I always get compliments on my new pairs!',
    imgURL: 'https://i.pinimg.com/236x/e6/59/34/e65934742e83f4250962eac0028f153a.jpg',
  },
 
];

