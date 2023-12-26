import { BookText, Facebook, Github, Instagram, Twitter, type LucideIcon } from "lucide-react";

const PrimitiveIcon = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  github: Github,
  book: BookText,
};

type Icon = keyof typeof PrimitiveIcon;

type Size = "xs" | "sm" | "md" | "lg";

const iconSizes: Record<Size, number | undefined> = {
  lg: 28,
  md: 24,
  sm: 20,
  xs: 16,
};

export { PrimitiveIcon as Icons, iconSizes };
export type { LucideIcon, Size, Icon };
