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
    <header className="relative z-30 bg-white text-[#333]">
      <div className="bg-[#071a44] text-[13px] text-white">
        <div className="mx-auto flex max-w-[1860px] flex-wrap items-center gap-x-7 gap-y-2 px-6 py-3">
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="tel:+380445285355"><Phone size={18} className="text-white/35" />+38(044)528-53-55, +38(044)528-16-91, +38(044)529-04-94</a>
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="https://goo.gl/maps/L3ZsN2dDtXbyokkH7"><MapPin size={18} className="text-white/35" />вул. Василя Тютюнника, 9 (колишня Анрі Барбюса), м. Київ, 03150</a>
          <a className="flex items-center gap-3 hover:text-[#3687aa]" href="mailto:fkgrt@knu.ua"><Mail size={18} className="text-white/35" />fkgrt@knu.ua</a>
          <a className="hover:text-[#3687aa]" href="/about/docs/%D0%9F%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%20%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96%20%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F%20%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%8C%D0%BA%D0%B0%20%D0%B4%D0%BE%D0%B2%D1%96%D1%80%D0%B8.pdf">Скринька довіри</a>
          <a className="ml-auto uppercase hover:text-[#3687aa]" href="/en">EN</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-start justify-center px-4 pb-5 pt-7 text-center">
        <Link href="/" className="min-w-0">
          <span className="mb-5 flex justify-center gap-4">
            <img src="https://fkgrt.knu.ua/images/kgrt.png" alt="КГРТ" className="h-[96px] w-[96px] object-contain" />
            <img src="https://fkgrt.knu.ua/about/gerb.jpg" alt="КНУ" className="h-[96px] w-[96px] object-contain" />
          </span>
          <span>
            <span className="block font-serif text-sm italic uppercase leading-none text-[#9a9a9a]">Відокремлений структурний підрозділ</span>
            <span className="block max-w-4xl font-serif text-[22px] font-black uppercase leading-tight text-[#2d2d2d]">Фаховий коледж геологорозвідувальних технологій</span>
            <span className="block font-serif text-sm italic text-[#9a9a9a]">Київського національного університету імені Тараса Шевченка</span>
          </span>
        </Link>
        <button className="absolute right-4 top-24 rounded border border-[#071a44] p-2 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Меню">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} border-t border-slate-100 bg-white text-[#2f2f2f] lg:block`}>
        <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row lg:items-center lg:justify-center">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.href} className="block px-6 py-5 font-serif text-[19px] font-black hover:text-[#3687aa]">{group.label}</Link>
              <div className="static hidden min-w-72 bg-white shadow-xl group-hover:block lg:absolute lg:left-0 lg:top-full">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block border-b border-slate-100 px-5 py-3 text-sm text-slate-700 hover:bg-[#f0c64a] hover:text-[#102c57]">{label}</Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/gallery" className="block px-6 py-5 font-serif text-[19px] font-black hover:text-[#3687aa]">Галерея</Link>
          <Link href="/posts" className="block px-6 py-5 font-serif text-[19px] font-black hover:text-[#3687aa]">Новини</Link>
        </div>
      </nav>
    </header>
  );
};
