import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background border-b-1 border-[#333] p-4 sticky top-0 w-full select-none">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-foreground cursor-default">NextGen</Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-lg hover:text-foreground">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-foreground">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-foreground">Contact</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;