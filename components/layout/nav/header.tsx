"use client";

import Link from "next/link";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import React from "react";

const navGroups = [
  {
    label: "Коледж",
    href: "/about",
    items: [
      ["Про коледж", "/about"],
      ["Геологічний музей", "/about/museum"],
      ["Адміністрація", "/about/administratsiya"],
      ["Публічна інформація", "/about/publichna-informatsiya"],
      ["Спеціальності", "/about/spetsialnosti"],
      ["Співробітництво", "/about/spivrobitnitstvo"],
      ["Наші випускники", "/about/vipuskniki"],
      ["Контакти", "/contacts"],
    ],
  },
  {
    label: "Освітній процес",
    href: "/osvita",
    items: [
      ["Освітні програми", "/osvita"],
      ["Навчальні плани", "/osvita/navchaliniplan"],
      ["Методичний портал", "/osvita/methodrob2"],
      ["Циклові комісії", "/osvita/comision"],
      ["Портал навчальних ресурсів", "/osvita/portal"],
      ["Електронні ресурси", "/educational/resources"],
      ["Забезпечення якості освіти", "/educational/quality"],
    ],
  },
  {
    label: "Вступнику",
    href: "/vstup",
    items: [
      ["Вступна кампанія", "/vstup"],
      ["Правила та умови прийому", "/vstup/pravila"],
      ["Інформативна сторінка", "/vstup/info"],
      ["Ліцензії. Акредитації", "/vstup/licence"],
      ["Спеціальності", "/vstup/spicial"],
    ],
  },
  {
    label: "Студенту",
    href: "/educational",
    items: [
      ["Графіки освітнього процесу", "/educational"],
      ["Розклад занять", "/educational/scribble"],
      ["Моніторинг якості освіти", "/educational/monitoring"],
      ["Рейтингові списки", "/educational/rating"],
      ["Психологічна служба", "/educational/psychologist"],
      ["STOP! булінг", "/educational/stop"],
      ["Студентське самоврядування", "/educational/selfmanagement"],
    ],
  },
  {
    label: "Викладачу",
    href: "/lecturer",
    items: [
      ["Методичний портал", "/osvita/methodrob2"],
      ["Виховна робота", "/lecturer/educationalwork"],
      ["Портал навчальних ресурсів", "/osvita/portal"],
      ["Електронні ресурси", "/educational/resources"],
    ],
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fk-header absolute inset-x-0 top-0 z-30 text-white">
      <div className="border-b border-white/20 bg-[#0f2444]/85 text-[12px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
          <a className="flex items-center gap-2 hover:text-[#f0c64a]" href="tel:+380445285355"><Phone size={14} />+38(044)528-53-55</a>
          <a className="hidden items-center gap-2 hover:text-[#f0c64a] md:flex" href="tel:+380445281691">+38(044)528-16-91</a>
          <a className="flex items-center gap-2 hover:text-[#f0c64a]" href="https://goo.gl/maps/L3ZsN2dDtXbyokkH7"><MapPin size={14} />вул. Василя Тютюнника, 9, м. Київ, 03150</a>
          <a className="flex items-center gap-2 hover:text-[#f0c64a]" href="mailto:fkgrt@knu.ua"><Mail size={14} />fkgrt@knu.ua</a>
          <a className="hidden hover:text-[#f0c64a] lg:inline" href="/about/docs/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96%20%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%B2%D1%96%D1%80%D0%B8.pdf">Скринька довіри</a>
          <a className="ml-auto font-semibold uppercase hover:text-[#f0c64a]" href="/en">EN</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-7">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <img src="https://fkgrt.knu.ua/images/kgrt.png" alt="КГРТ" className="h-16 w-16 object-contain sm:h-[86px] sm:w-[86px]" />
          <img src="https://fkgrt.knu.ua/about/gerb.jpg" alt="КНУ" className="hidden h-16 w-16 object-contain sm:block sm:h-[86px] sm:w-[86px]" />
          <span className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">Відокремлений структурний підрозділ</span>
            <span className="block max-w-3xl font-serif text-lg font-black uppercase leading-tight tracking-wide text-white sm:text-[26px]">Фаховий коледж геологорозвідувальних технологій</span>
            <span className="block text-xs text-white/80 sm:text-sm">Київського національного університету імені Тараса Шевченка</span>
          </span>
        </Link>
        <button className="rounded border border-white/60 bg-[#0f2444]/50 p-2 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Меню">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} bg-white text-[#2f2f2f] shadow-xl lg:block lg:bg-white/95`}>
        <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row lg:items-center lg:justify-center">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.href} className="block px-5 py-[18px] text-[13px] font-bold uppercase tracking-wide hover:bg-[#f0c64a] hover:text-[#0f2444]">{group.label}</Link>
              <div className="static hidden min-w-72 bg-white shadow-xl group-hover:block lg:absolute lg:left-0 lg:top-full">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block border-b border-slate-100 px-5 py-3 text-sm text-slate-700 hover:bg-[#f0c64a] hover:text-[#102c57]">{label}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/gallery" className="block px-5 py-[18px] text-[13px] font-bold uppercase tracking-wide hover:bg-[#f0c64a] hover:text-[#0f2444]">Галерея</Link>
          <Link href="/posts" className="block px-5 py-[18px] text-[13px] font-bold uppercase tracking-wide hover:bg-[#f0c64a] hover:text-[#0f2444]">Новини</Link>
        </div>
      </nav>
    </header>
  );
};
