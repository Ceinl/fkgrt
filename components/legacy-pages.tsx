import Link from "next/link";

const remote = (path: string) => `https://fkgrt.knu.ua${path}`;

const galleryItems = [
  ["Вишиванка - генетичний код української нації", "/upload/iblock/6b2/%D0%94%D0%921.jpg"],
  ["Вишиванка - генетичний код української нації", "/upload/iblock/7ae/%D0%94%D0%923.jpg"],
  ["Вишиванка - генетичний код української нації", "/upload/iblock/dd7/%D0%94%D0%922.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/59f/%D0%90%D0%B2%D1%82%D0%BE5.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/f70/%D0%90%D0%B2%D1%82%D0%BE4.jpg"],
  ["Навчальна демонтажно-монтажна практика у автомобілістів", "/upload/iblock/7c3/%D0%90%D0%B2%D1%82%D0%BE%203.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/686/photo_2026-05-18_14-16-19.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/9cc/photo_2026-05-18_14-16-14.jpg"],
  ["Лекційно-практичне заняття на тему картографія та геологія", "/upload/medialibrary/2e4/photo_2026-05-18_14-16-17.jpg"],
];

const legacyPages: Record<string, { title: string; description: string; links: [string, string][] }> = {
  vstup: {
    title: "Вступнику",
    description: "Інформація для абітурієнтів: вступна кампанія, правила прийому, спеціальності, ліцензії та акредитації.",
    links: [["Вступна кампанія", "/vstup"], ["Правила та умови прийому", "/vstup/pravila"], ["Спеціальності", "/vstup/spicial"]],
  },
  osvita: {
    title: "Освітній процес",
    description: "Освітні програми, навчальні плани, методичний портал, циклові комісії та електронні ресурси коледжу.",
    links: [["Освітні програми", "/osvita"], ["Навчальні плани", "/osvita/navchaliniplan"], ["Методичний портал", "/osvita/methodrob2"]],
  },
  educational: {
    title: "Студенту",
    description: "Розклад занять, графіки освітнього процесу, рейтингові списки, психологічна служба та студентське самоврядування.",
    links: [["Розклад занять", "/educational/scribble"], ["Рейтингові списки", "/educational/rating"], ["Психологічна служба", "/educational/psychologist"]],
  },
  lecturer: {
    title: "Викладачу",
    description: "Методичний портал, виховна робота, портал навчальних ресурсів та електронні ресурси для викладачів.",
    links: [["Методичний портал", "/osvita/methodrob2"], ["Виховна робота", "/lecturer/educationalwork"], ["Електронні ресурси", "/educational/resources"]],
  },
  contacts: {
    title: "Контакти",
    description: "Фаховий коледж геологорозвідувальних технологій КНУ імені Тараса Шевченка: вул. Василя Тютюнника, 9, м. Київ, 03150.",
    links: [["fkgrt@knu.ua", "mailto:fkgrt@knu.ua"], ["Мапа", "https://goo.gl/maps/L3ZsN2dDtXbyokkH7"], ["+38(044)528-53-55", "tel:+380445285355"]],
  },
};

export const knownLegacyRoots = new Set(["gallery", ...Object.keys(legacyPages)]);

export function GalleryPageContent() {
  return (
    <section className="bg-[#eef3f8] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-center font-serif text-4xl font-black text-[#102c57] md:text-5xl">Галерея</h1>
        <div className="mx-auto my-6 h-1 w-20 bg-[#f0c64a]" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(([title, image]) => (
            <a key={image} href={remote(image)} className="group relative block overflow-hidden bg-[#102c57] shadow-lg">
              <img src={remote(image)} alt={title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 p-5 font-serif text-lg font-bold text-white">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegacyPageContent({ filepath }: { filepath: string }) {
  const root = filepath.split("/")[0];
  const page = legacyPages[root] || legacyPages.contacts;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8c6a19]">Розділ сайту</p>
        <h1 className="font-serif text-4xl font-black text-[#102c57] md:text-5xl">{page.title}</h1>
        <div className="my-6 h-1 w-20 bg-[#f0c64a]" />
        <p className="max-w-3xl text-lg leading-8 text-slate-700">{page.description}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {page.links.map(([label, href]) => (
            <Link key={href} href={href} className="border border-slate-200 bg-[#f7f8fb] p-5 font-bold text-[#102c57] hover:border-[#f0c64a] hover:bg-[#fff8dd]">{label}</Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-500">Цей розділ перенесено з попередньої 1C/Bitrix структури. Контент можна наповнити через TinaCMS окремими сторінками.</p>
      </div>
    </section>
  );
}
