import type { FC } from 'react';
import Container from './Container';
import { Button } from '../ui/button';

const Header: FC = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-black shadow-md select-none">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="text-lg font-bold cursor-default">Voke</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>

          <Button variant="outline">Resume</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;