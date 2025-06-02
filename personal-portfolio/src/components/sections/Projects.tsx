import type { FC } from "react";
import { projects } from "@/data/projects";
import Container from "../layout/Container";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

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
