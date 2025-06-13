import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer")
  return (
    <footer className="bg-foreground text-background py-6 mt-16">
      <section className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} INTL INC. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="mt-4 md:mt-0 space-x-4">
          <span className="cursor-pointer hover:underline">
            {t("policy")}
          </span>
          <span className="cursor-pointer hover:underline">
            {t("terms")}
          </span>
          <span className="cursor-pointer hover:underline">
            {t("FAQ")}
          </span>
        </nav>
      </section>
    </footer>
  )
}

export default Footer;