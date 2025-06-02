import type { FC } from "react";
import Container from "../layout/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Tech Solutions Inc",
    role: "Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Developed and maintained responsive web applications using React and TypeScript. Collaborated with designers and backend developers to deliver seamless user experiences.",
  },
  {
    company: "Web Innovators",
    role: "Junior Web Developer",
    period: "Jun 2020 - Dec 2021",
    description:
      "Assisted in building modern websites and landing pages. Gained experience with JavaScript, CSS, and version control systems.",
  },
  {
    company: "Creative Apps Studio",
    role: "UI/UX Intern",
    period: "Jan 2020 - May 2020",
    description:
      "Worked closely with the design team to prototype and test user interfaces. Conducted user research and contributed to improving app usability.",
  },
  {
    company: "Open Source Contributor",
    role: "Contributor",
    period: "2019 - 2020",
    description:
      "Contributed bug fixes and features to several open source JavaScript projects. Collaborated with maintainers and learned best practices in code reviews.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - 2019",
    description:
      "Built custom websites for small businesses using HTML, CSS, and JavaScript. Managed client communications and project timelines.",
  },
];

const Experience: FC = () => (
  <section id="experience" className="py-12">
    <Container>
      <h2 className="section-title">Experience</h2>
      <Accordion type="multiple">
        {experiences.map((exp, idx) => (
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
