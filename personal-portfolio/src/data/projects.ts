import type { FC, SVGProps } from "react";
import {
  FileUser,
  ListTodo,
  Feather,
  ShoppingCart,
  ThermometerSun,
  MessageSquare,
} from "lucide-react";

interface Project {
  title: string;
  tech: string;
  content: string;
  link?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    tech: "React + TypeScript + Vite",
    content:
      "A modern, responsive portfolio website built with React and TypeScript.",
    link: "#projects",
    Icon: FileUser,
  },
  {
    title: "Task Manager App",
    tech: "React + TypeScript + Firebase",
    content: "A simple task manager with authentication and real-time updates.",
    link: "#projects",
    Icon: ListTodo,
  },
  {
    title: "Blog Platform",
    tech: "Next.js + Tailwind CSS + MDX",
    content:
      "A fast, SEO-friendly blog platform supporting markdown and dynamic content.",
    link: "#projects",
    Icon: Feather,
  },
  {
    title: "E-commerce Store",
    tech: "React + Redux Toolkit + Stripe API",
    content:
      "A full-featured e-commerce store with product search, cart, and secure checkout.",
    link: "#projects",
    Icon: ShoppingCart,
  },
  {
    title: "Weather Dashboard",
    tech: "React + TypeScript + OpenWeatherMap API",
    content:
      "A dashboard to view current weather and forecasts for any city worldwide.",
    link: "#projects",
    Icon: ThermometerSun,
  },
  {
    title: "Chat Application",
    tech: "React + Socket.io + Node.js",
    content:
      "A real-time chat app with multiple rooms and instant messaging features.",
    link: "#projects",
    Icon: MessageSquare,
  },
];
