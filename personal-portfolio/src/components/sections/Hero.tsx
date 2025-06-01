import type { FC } from "react";
import { Button } from "../ui/button";

const Hero: FC = () => {
  return (
    <section className="text-center px-4 py-20 mb-12 bg-gradient-to-b from-indigo-950 to-gray-900 text-white select-none">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl mb-6 leading-8">
        It's a practice project, not a real portfolio.
      </p>
      <div className="flex gap-4 justify-center">
        <Button
          className="bg-indigo-500 hover:bg-indigo-600 text-white"
          size="lg"
        >
          Contact Me
        </Button>
        <Button
          className="hover:bg-indigo-600 text-white hover:text-white"
          size="lg"
          variant="ghost"
        >
          View Projects
        </Button>
      </div>
    </section>
  );
};

export default Hero;
