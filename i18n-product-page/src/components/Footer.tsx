const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-6 mt-16">
      <section className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} INTL INC. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="mt-4 md:mt-0 space-x-4">
          <span className="cursor-pointer hover:underline">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:underline">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:underline">
            FAQ
          </span>
        </nav>
      </section>
    </footer>
  )
}

export default Footer;