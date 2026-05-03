export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  icon?: string;
}
