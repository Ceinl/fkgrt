import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LatestNewsSection, type NewsPost } from "./blocks/latest-news";

const remote = (path: string) => `https://fkgrt.knu.ua${path}`;

const specialties = [
  ["Е2 Екологія", "/files/eco.pdf", "/images/special1.jpg"],
  ["E4 Науки про Землю", "/about/nauki_pro_zemliu", "/images/special2.jpg"],
  ["G11 Машинобудування", "/files/mech.pdf", "/images/special3.jpg"],
  ["G16 Гірництво та нафтогазові технології", "/files/drill.pdf", "/images/special5.jpg"],
  ["J8 Автомобільний транспорт", "/files/auto.pdf", "/images/special4.jpg"],
];

const gallery = [
  ["Вишиванка - генетичний код української нації", "/upload/iblock/6b2/%D0%94%D0%921.jpg"],
  ["Навчальна практика у автомобілістів", "/upload/iblock/59f/%D0%90%D0%B2%D1%82%D0%BE5.jpg"],
  ["Лекційно-практичне заняття з картографії та геології", "/upload/medialibrary/686/photo_2026-05-18_14-16-19.jpg"],
];

export function FkgrtHome({ latestPosts }: { latestPosts: NewsPost[] }) {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#102c57] text-white">
        <img src={remote("/images/slide-02-1920x810.jpg")} alt="Коледж" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152d] via-[#102c57]/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-24">
          <div className="max-w-3xl">
            <p className="mb-5 font-serif text-sm font-bold uppercase tracking-[0.35em] text-[#f0c64a]">З 1930 року</p>
            <h1 className="font-serif text-4xl font-black leading-tight md:text-6xl">Інвестиції в освіту та інновації в геологічній галузі</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100">Коледж готує фахових молодших бакалаврів для геологічної, видобувної, екологічної, машинобудівної та транспортної галузей України.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/vstup" className="bg-[#f0c64a] px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#102c57] hover:bg-white">Вступна кампанія</Link>
              <Link href="/about" className="border border-white/70 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-[#102c57]">Про коледж</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[380px_1fr] lg:items-center">
          <Link href="/about" className="mx-auto block max-w-xs"><img src={remote("/images/kgrt.png")} alt="КГРТ" className="w-full" /></Link>
          <div>
            <h2 className="font-serif text-3xl font-black text-[#102c57] md:text-4xl">Декілька слів про фаховий коледж геологорозвідувальних технологій</h2>
            <div className="my-6 h-1 w-20 bg-[#f0c64a]" />
            <div className="space-y-4 text-justify leading-8 text-slate-700">
              <p>Відокремлений структурний підрозділ "Фаховий коледж геологорозвідувальних технологій Київського національного університету імені Тараса Шевченка" є одним із найстаріших геологічних навчальних закладів країни.</p>
              <p>Коледж створено на базі Київського геологорозвідувального технікуму та є структурним підрозділом Київського національного університету імені Тараса Шевченка з 2012 року.</p>
              <p>Це єдиний навчальний заклад України, що готує фахових молодших бакалаврів з усіх геологорозвідувальних спеціальностей.</p>
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 bg-[#102c57] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#f0c64a] hover:text-[#102c57]">Детальніше <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#102c57] py-20 text-white">
        <img src={remote("/images/home-01-846x1002.jpg")} alt="Спеціальності" className="absolute left-0 top-0 hidden h-full w-1/2 object-cover opacity-25 lg:block" />
        <div className="relative mx-auto grid max-w-7xl px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div />
          <div>
            <h2 className="font-serif text-3xl font-black md:text-4xl">Наші спеціальності</h2>
            <div className="my-6 h-1 w-20 bg-white" />
            <div className="space-y-5">
              {specialties.map(([title, href, image]) => (
                <Link key={title} href={href} className="group flex overflow-hidden bg-white text-[#102c57] shadow-lg">
                  <img src={remote(image)} alt="" className="h-24 w-32 object-cover transition-transform group-hover:scale-105" />
                  <span className="flex flex-1 items-center px-5 font-serif text-lg font-bold">{title}</span>
                </Link>
              ))}
            </div>
            <Link href="/about/spetsialnosti" className="mt-8 inline-block bg-[#f0c64a] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#102c57] hover:bg-white">Подивитись все</Link>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(16,44,87,.86),rgba(16,44,87,.86)),url('https://fkgrt.knu.ua/images/slide-01-1920x810.jpg')] bg-cover bg-center py-24 text-center text-white">
        <h2 className="font-serif text-3xl font-black md:text-5xl">Довіряють понад 50000 випускників</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-100">Приєднуйтесь до нашої спільноти КГРТ, щоб досягти успіху.</p>
        <Link href="/vstup" className="mt-9 inline-block bg-[#f0c64a] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#102c57] hover:bg-white">Почати</Link>
      </section>

      <LatestNewsSection posts={latestPosts} />

      <section className="bg-[#eef3f8] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-3xl font-black text-[#102c57] md:text-4xl">Галерея</h2>
          <div className="mx-auto my-6 h-1 w-20 bg-[#f0c64a]" />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map(([title, image]) => (
              <a key={image} href={remote(image)} className="group relative block overflow-hidden bg-[#102c57]">
                <img src={remote(image)} alt={title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-5 font-serif text-lg font-bold text-white">{title}</span>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/gallery" className="inline-block bg-[#102c57] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#f0c64a] hover:text-[#102c57]">Всі фотографії</Link></div>
        </div>
      </section>
    </>
  );
}
