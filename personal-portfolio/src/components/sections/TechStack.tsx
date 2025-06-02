import type { FC } from 'react';
import { technologies } from '@/data/technologies';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import Container from '../layout/Container';

const TechStack: FC = () => {

  return (
    <section id="tech-stack" className="py-12">
      <Container>
        <h2 className="section-title">Tech Stack</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] gap-6">
          <TooltipProvider >
            {technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <div className="self-start justify-self-center p-4 rounded-sm shadow hover:scale-105 transition-transform select-none">
                    <img src={tech.src} alt={tech.name} className="size-10" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech.name}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;