import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  return (
    <nav
      className="bg-background border-b-1 border-foreground p-4 sticky top-0 w-full select-none z-100"
      dir="ltr"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">INTL INC</div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
