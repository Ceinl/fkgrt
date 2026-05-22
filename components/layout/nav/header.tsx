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
    <header className="relative z-30 border-b border-[#d7dce5] bg-white text-[#182747] shadow-sm">
      <div className="bg-[#102c57] text-xs text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2">
          <a className="flex items-center gap-2" href="tel:+380445285355"><Phone size={14} />+38(044)528-53-55</a>
          <a className="flex items-center gap-2" href="https://goo.gl/maps/L3ZsN2dDtXbyokkH7"><MapPin size={14} />вул. Василя Тютюнника, 9, м. Київ</a>
          <a className="flex items-center gap-2" href="mailto:fkgrt@knu.ua"><Mail size={14} />fkgrt@knu.ua</a>
          <a className="ml-auto font-semibold uppercase" href="/en">EN</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <img src="https://fkgrt.knu.ua/images/kgrt.png" alt="КГРТ" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
          <img src="https://fkgrt.knu.ua/about/gerb.jpg" alt="КНУ" className="hidden h-16 w-16 object-contain sm:block sm:h-20 sm:w-20" />
          <span className="min-w-0">
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#8c6a19]">Відокремлений структурний підрозділ</span>
            <span className="block max-w-3xl font-serif text-lg font-black uppercase leading-tight sm:text-2xl">Фаховий коледж геологорозвідувальних технологій</span>
            <span className="block text-xs text-slate-600 sm:text-sm">Київського національного університету імені Тараса Шевченка</span>
          </span>
        </Link>
        <button className="rounded border border-[#102c57] p-2 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Меню">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} border-t border-[#d7dce5] bg-[#f7f8fb] lg:block`}>
        <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center lg:justify-center">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.href} className="block px-5 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#102c57] hover:text-white">{group.label}</Link>
              <div className="static hidden min-w-72 bg-white shadow-xl group-hover:block lg:absolute lg:left-0 lg:top-full">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block border-b border-slate-100 px-5 py-3 text-sm text-slate-700 hover:bg-[#f0c64a] hover:text-[#102c57]">{label}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/gallery" className="block px-5 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#102c57] hover:text-white">Галерея</Link>
          <Link href="/posts" className="block px-5 py-4 text-sm font-bold uppercase tracking-wide hover:bg-[#102c57] hover:text-white">Новини</Link>
        </div>
      </nav>
    </header>
  );
};
