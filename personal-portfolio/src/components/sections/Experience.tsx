import type { FC } from "react";
import { experience } from "@/data/experience";
import Container from "../layout/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const Experience: FC = () => (
  <section id="experience" className="py-12">
    <Container>
      <h2 className="section-title">Experience</h2>
      <Accordion type="multiple">
        {experience.map((exp, idx) => (
          <AccordionItem key={idx} value={`job${idx}`}>
            <AccordionTrigger>
              <h3>
                {exp.role} - {exp.company} ({exp.period})
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{exp.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  </section>
);

export default Experience;
