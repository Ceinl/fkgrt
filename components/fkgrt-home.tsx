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
      <section className="relative min-h-[760px] overflow-hidden bg-[#102c57] text-white">
        <img src={remote("/images/slide-02-1920x810.jpg")} alt="Коледж" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1200px] items-center px-4 pb-20 pt-64 md:pt-72">
          <div className="max-w-[850px] text-center md:text-left">
            <h1 className="font-serif text-4xl font-black leading-tight md:text-[64px]">Інвестиції в освіту</h1>
            <p className="mt-9 max-w-3xl text-[19px] font-light leading-8 text-white">Коледж є колективним членом Спілки геологів України, Спілки буровиків України, Українського товариства охорони природи, Українського мінералогічного товариства та Міжнародної асоціації науково-технічного і ділового співробітництва з геофізичних досліджень і робіт у свердловинах.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-5 md:justify-start">
              <Link href="/vstup" className="fk-btn-primary">Вступна кампанія</Link>
              <Link href="/about" className="fk-btn-light">Про коледж</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
          <span className="h-3 w-3 rounded-full bg-white" />
          <span className="h-3 w-3 rounded-full border border-white/80" />
          <span className="h-3 w-3 rounded-full border border-white/80" />
        </div>
      </section>

      <section className="bg-white py-[70px] md:py-[114px]">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 text-center md:grid-cols-[40%_1fr] md:items-center md:text-left">
          <Link href="/about" className="mx-auto block max-w-xs"><img src={remote("/images/kgrt.png")} alt="КГРТ" className="w-full" /></Link>
          <div>
            <h2 className="font-serif text-3xl font-black leading-snug text-[#0f2444] md:text-[36px]">Декілька слів про фаховий коледж геологорозвідувальних технологій</h2>
            <div className="fk-divider mx-auto my-7 md:mx-0" />
            <div className="space-y-4 text-justify text-[15px] leading-8 text-[#555]">
              <p><i>Відокремлений структурний підрозділ </i>"<b>Фаховий коледж геологорозвідувальних технологій Київського національного університету імені Тараса Шевченка</b>" є одним із найстаріших геологічних навчальних закладів країни і є предметом гордості усіх, хто в ньому працює і навчається.</p>
              <p>Коледж геологорозвідувальних технологій <b>(КГРТ)</b> створено на базі <b>Київського геологорозвідувального технікуму</b> (<b>1930 рік заснування</b>) та є структурним підрозділом Київського національного університету імені Тараса Шевченка з 2012 року.</p>
              <p><b>Візія коледжу</b> - флагман геологічної фахової передвищої освіти країни, здатний генерувати сучасні геологічні знання та забезпечувати їх трансфер.</p>
              <p>Це єдиний навчальний заклад України, що готує фахових молодших бакалаврів з усіх геологорозвідувальних спеціальностей.</p>
            </div>
            <Link href="/about" className="fk-btn-outline mt-8 inline-flex items-center gap-2">Детальніше <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f2444] py-[70px] text-white md:py-[114px]">
        <img src={remote("/images/home-01-846x1002.jpg")} alt="Спеціальності" className="absolute left-0 top-0 hidden h-full w-[44%] object-cover lg:block" />
        <div className="absolute inset-0 bg-[url('https://fkgrt.knu.ua/images/pattern.png')] opacity-10" />
        <div className="relative mx-auto grid max-w-[1200px] px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div />
          <div>
            <h2 className="font-serif text-3xl font-black md:text-[36px]">Наші спеціальності</h2>
            <div className="my-7 h-[3px] w-20 bg-white" />
            <div className="space-y-10">
              {specialties.map(([title, href, image]) => (
                <Link key={title} href={href} className="group flex min-h-[120px] overflow-hidden bg-white text-[#0f2444] shadow-xl">
                  <span className="block w-[170px] shrink-0 bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url(${remote(image)})` }} />
                  <span className="flex flex-1 items-center px-7 font-serif text-lg font-bold leading-snug">{title}</span>
                </Link>
              ))}
            </div>
            <Link href="/about/spetsialnosti" className="fk-btn-primary mt-12 inline-block">Подивитись все</Link>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('https://fkgrt.knu.ua/video/bg-video-2-lg.jpg')] bg-cover bg-center py-[100px] text-center text-white md:py-[160px]">
        <h2 className="font-serif text-3xl font-black md:text-[42px]">Довіряють понад 50000 випускників</h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-white/90">Приєднуйтесь до нашої спільноти КГРТ щоб досягти успіху.</p>
        <Link href="/vstup" className="fk-btn-primary mt-12 inline-block">Почати</Link>
      </section>

      <LatestNewsSection posts={latestPosts} />

      <section className="bg-[#f3f6f9] py-[70px] md:py-[114px]">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="text-center font-serif text-3xl font-black text-[#0f2444] md:text-[36px]">Галерея</h2>
          <div className="fk-divider mx-auto my-7" />
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map(([title, image]) => (
              <a key={image} href={remote(image)} className="group relative block overflow-hidden bg-[#102c57]">
                <img src={remote(image)} alt={title} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-5 font-serif text-lg font-bold text-white">{title}</span>
              </a>
            ))}
          </div>
          <div className="mt-14 text-center"><Link href="/gallery" className="fk-btn-primary inline-block">Всі фотографії</Link></div>
        </div>
      </section>
    </>
  );
}
