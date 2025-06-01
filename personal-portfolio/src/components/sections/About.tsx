import type { FC } from "react";
import Container from "../layout/Container";

const About: FC = () => {
  return (
    <section id="about" className="py-16">
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="text-muted-foreground">
          Hello! I'm a passionate frontend developer with a love for building
          interactive and user-friendly web applications. I enjoy learning new
          technologies and continuously improving my skills. My goal is to
          create seamless digital experiences that delight users. <br />
          <br />I have experience working with modern frameworks like React and
          TypeScript, and I thrive in collaborative environments where I can
          contribute creative solutions. When I'm not coding, I enjoy exploring
          design trends and contributing to open-source projects.
        </p>
      </Container>
    </section>
  );
};

export default About;
