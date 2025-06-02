import type { FC, SVGProps } from "react";
import Container from "../layout/Container";
import {
  FileUser,
  ListTodo,
  Feather,
  ShoppingCart,
  ThermometerSun,
  MessageSquare,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

interface Project {
  title: string;
  tech: string;
  content: string;
  link?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const projects: Project[] = [
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

const Projects: FC = () => (
  <section id="projects" className="py-12">
    <Container>
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ Icon, title, tech, content, link }, idx) => (
          <Card key={idx} className="transition-shadow hover:shadow-lg">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{tech}</CardDescription>
              </div>
              {Icon && <Icon className="size-8" />}
            </CardHeader>
            <CardContent>
              <p>{content}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              {link && (
                <Button size="sm" asChild>
                  <a href={link} rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
