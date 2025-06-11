import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="h-svh flex items-center justify-center">
      <h1 className="text-5xl">{t('title')}</h1>
    </div>
  );
}
