export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  technique: string;
  imageUrl: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  specialties: string[];
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  content: string;
  service: string;
  date: string;
};
