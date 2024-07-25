// interfaces.ts

// Interface for a button component (if used in your layout)
export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

// Interface for the HeroSection component
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
}

// Interface for the TrustedBy component
export interface TrustedByProps {
  brands: string[]; // Array of brand names or image URLs
}

// Interface for a product
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

// Interface for the Products and SpecialProducts components
export interface ProductsProps {
  products: Product[];
}

// Interface for the CustomerFeedback component
export interface CustomerFeedbackProps {
  feedbacks: { user: string; comment: string }[];
}

// Interface for the OurTeam component
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
}

export interface OurTeamProps {
  members: TeamMember[];
}

// Interface for the ContactUs component
export interface ContactUsProps {
  address: string;
  phone: string;
  email: string;
}
