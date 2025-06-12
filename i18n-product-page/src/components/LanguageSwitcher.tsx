'use client'
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const { locales } = routing
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleChangeLanguage = (newLocale: string) => {
    setSelectedLanguage(newLocale);
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className="relative inline-block w-40" ref={selectRef}>
      <button
        type="button"
        className="inline-flex justify-between w-full rounded-md px-3 py-2 bg-surface text-sm text-foreground border border-foreground/10 shadow-sm"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2">
          <Image src="/globe.svg" alt='language' width={16} height={16} />
          <span>Language</span>
        </div>
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen &&
        <div
          className="origin-top-right absolute right-0 mt-1 w-full rounded-md bg-surface shadow"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {locales?.map((lng) => (
              <button
                key={lng}
                onClick={() => handleChangeLanguage(lng)}
                className={`block px-4 py-2 text-sm w-full text-left ${lng === selectedLanguage
                  ? 'bg-accent text-surface'
                  : 'text-foreground hover:bg-surface brightness-95'
                  }`}
                role="menuitem"
              >
                {lng}
              </button>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default LanguageSwitcher;