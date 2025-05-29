import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="text-center text-sm text-muted-foreground py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Voke. All rights reserved.</p>
    </footer>
  );
};

export default Footer;