"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  LocateFixed,
  MapPin,
  Navigation,
  Search,
} from "lucide-react";

type DirectoryTab = "Popüler Şehirler" | "Popüler Mutfaklar" | "Popüler Zincirler";
type AuthMode = "giriş" | "kayıt";

type Feature = {
  eyebrow?: string;
  title: string;
  description: string;
  action: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  disclaimer?: string;
};

const imageRoot = "/sites/yemekyol-com-bb18bd46/root-8a5edab2/images";
const logoSrc = "https://cdn.builder.io/api/v1/image/assets%2F58a9cc1dcd0440bdb175065f02a9e1fa%2F7b331d3c67444dd9ba2251103596b901?format=webp&width=800&height=1200";

const partnerCards = [
  {
    icon: <Navigation aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "Dasher Ol",
    description:
      "Teslimat sürücüsü olarak para kazanın ve kendi programınıza göre çalışın. Dakikalar içinde kaydolun.",
    action: "Kazanmaya başlayın",
  },
  {
    icon: <MapPin aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "İşletme Sahibi Ol",
    description:
      "Yeni müşteriler kazanın ve 30 güne kadar %0 komisyonla satışlarınızı büyütün.",
    action: "yemekyol’a kaydolun",
  },
  {
    icon: <Search aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "En iyi yemekyol deneyimini yaşayın",
    description:
      "Mahallenizin sunduğu en iyi seçenekleri tek bir uygulamada keşfedin.",
    action: "Uygulamayı indir",
  },
];

const features: Feature[] = [
  {
    eyebrow: "En sevdiğiniz yerel restoranlar",
    title: "Canınız ne çekerse kapınıza gelsin.",
    description:
      "İster bir dilim ister koca bir pizza söyleyin; uzun zamandır denemek istediğiniz Çin restoranından eriştenizi de alın.",
    action: "Restoranları bul",
    image: `${imageRoot}/restaurants.jpg`,
    imageAlt: "Canınız ne çekerse kapınıza gelsin.",
  },
  {
    title: "DashPass ile daha uygun teslimat",
    description:
      "Üyeler DashPass siparişlerinde 0 ₺ teslimat ücreti, gel-al siparişlerinde %5 geri ödeme ve daha fazlasını kazanır. Üstelik ilk 30 gün ücretsiz.",
    action: "DashPass’i keşfedin",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "DashPass ile daha uygun teslimat",
    reverse: true,
  },
  {
    eyebrow: "Market alışverişi tam istediğiniz gibi.",
    title: "Market ve bakkal ihtiyaçlarınızı alın",
    description:
      "Evden alışveriş yapın; sepetinizi taze meyve-sebzeler, dondurulmuş yemekler, şarküteri ürünleri ve daha fazlasıyla doldurun.",
    action: "Market alışverişi yapın",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "Market ve bakkal ihtiyaçlarınızı alın",
  },
  {
    title: "Bakkal ihtiyaçlarınız kapınızda",
    description:
      "Atıştırmalık, ev ihtiyaçları, şekerleme veya vitamin stoklayın; hepsi bir saatten kısa sürede teslim edilsin.",
    action: "Şimdi alışveriş yapın",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "Bakkal ihtiyaçlarınız kapınızda",
    reverse: true,
  },
  {
    eyebrow: "Günlük işleriniz ve hediyeleriniz için yanınızdayız",
    title: "En iyi markalardan güzellik ürünleri",
    description:
      "Güzellik ve kişisel bakım ihtiyaçlarınızı evinize veya bulunduğunuz yere getirelim.",
    action: "Güzellik alışverişi yapın",
    image: `${imageRoot}/beauty.jpg`,
    imageAlt: "En iyi markalardan güzellik ürünleri",
  },
  {
    title: "Her durum için çiçekler",
    description:
      "Yakınınızdaki çiçekçilerden özenle seçilmiş ve hazırlanmış aranjmanları keşfedin.",
    action: "Çiçek gönderin",
    image: `${imageRoot}/flowers.jpg`,
    imageAlt: "Her durum için çiçekler",
    reverse: true,
  },
  {
    title: "Mini barınızı yenileyin",
    description:
      "Bir davet mi veriyorsunuz veya özel bir kokteyl malzemesine mi ihtiyacınız var? Alkollü içecekleri, birayı, karışımları, şampanyayı ve şarabı hızla teslim alın.*",
    disclaimer: "*21 yaş ve üzeri. Sorumlu tüketin.",
    action: "Alışveriş yapın",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "Mini barınızı yenileyin",
  },
  {
    title: "Evcil hayvanlarınızın ihtiyacı ve keyfi",
    description:
      "Kedi ve köpek sahiplerinin ortak noktası: evcil hayvan ürünleri teslimatı. Mama, çiğneme oyuncakları ve hatta kostümler alın.",
    action: "Evcil hayvan ürünleri alın",
    image: `${imageRoot}/pets.jpg`,
    imageAlt: "Evcil hayvanlarınızın ihtiyacı ve keyfi",
    reverse: true,
  },
  {
    eyebrow: "Dasher'lar ve işletmeler için fırsatlar",
    title: "Dasher olun ve kazanmaya başlayın",
    description:
      "ABD'nin 1 numaralı Yiyecek ve İçecek Uygulaması ile teslimat yapın. Teslimat sürücüsü olarak para kazanın ve kendi programınıza göre çalışın. Dakikalar içinde kaydolun.",
    action: "Dasher olun",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "Dasher olun ve kazanmaya başlayın",
  },
  {
    title: "yemekyol ile işletmenizi büyütün",
    description:
      "Büyük ve küçük işletmeler, yeni müşterilere ulaşmak, sipariş hacmini artırmak ve daha fazla satış yapmak için YemekYol ile iş ortaklığı kuruyor.",
    action: "İş ortağı olun",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "yemekyol ile işletmenizi büyütün",
    reverse: true,
  },
];

const directoryData: Record<DirectoryTab, string[]> = {
  "Popüler Şehirler": [
    "New York",
    "Los Angeles",
    "Toronto",
    "Chicago",
    "Houston",
    "Brooklyn",
    "San Diego",
    "Las Vegas",
    "San Francisco",
    "Seattle",
    "Atlanta",
    "Queens",
    "Vancouver, BC",
    "Miami",
    "San Antonio",
  ],
  "Popüler Mutfaklar": [
    "Pizza",
    "Çin mutfağı",
    "Meksika mutfağı",
    "Sushi",
    "Hint mutfağı",
    "Tayland mutfağı",
    "Burgerler",
    "Kahvaltı",
    "Tatlılar",
    "Kahve",
    "Sağlıklı yemekler",
    "Kanat",
    "Sandviç",
    "İtalyan mutfağı",
    "Tacolar",
  ],
  "Popüler Zincirler": [
    "McDonald's",
    "Starbucks",
    "Chipotle",
    "Subway",
    "Taco Bell",
    "Chick-fil-A",
    "Wendy's",
    "Dunkin'",
    "Panera Bread",
    "Five Guys",
    "Popeyes",
    "The Cheesecake Factory",
    "Shake Shack",
    "KFC",
    "Domino's",
  ],
};

const popularCategories = [
  "Alkol teslimatı",
  "Güzellik mağazaları",
  "Yakınımdaki catering",
  "Yakınımdaki DashMart",
  "Çiçek teslimatı",
  "Market teslimatı",
  "İlaç teslimatı",
  "Yakınımdaki evcil hayvan mağazaları",
  "Yakınımdaki perakende mağazaları",
  "Masa ayırtın",
  "Bakkallar",
  "Cadılar Bayramı",
];

const footerColumns = [
  {
    title: "Bizi tanıyın",
    links: [
      "Hakkımızda",
      "Kariyer",
      "Yatırımcılar",
      "Şirket blogu",
      "Mühendislik blogu",
      "İşletme blogu",
      "Hediye kartları",
      "Kampanyalar",
      "Dasher merkezi",
      "LinkedIn",
      "Glassdoor",
      "Erişilebilirlik",
      "Basın odası",
    ],
  },
  {
    title: "Size nasıl yardımcı olabiliriz?",
    links: ["Hesap bilgileri", "Sipariş geçmişi", "Yardım"],
  },
  {
    title: "İş yapın",
    links: [
      "Dasher olun",
      "yemekyol işletmesi",
      "Teslimatlarınız için Dasher bulun",
      "İşletmeniz için yemekyol",
    ],
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 99.5 56.5"
    >
      <path
        d="M16 8 29 28 16 48M42 8l13 20-13 20M68 8l13 20-13 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
      />
    </svg>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      alt="yemekyol"
      className={`h-auto object-contain ${compact ? "w-[160px] mix-blend-screen" : "w-[120px]"}`}
      height={192}
      priority={compact}
      src={logoSrc}
      width={590}
    />
  );
}

function ArrowLink({ children }: { children: string }) {
  return (
    <a
      className="group inline-flex items-center gap-1 text-base font-bold text-[#eb1700] transition-opacity hover:opacity-75"
      href="#feed"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function AuthModal({
  mode,
  onClose,
  onSwitch,
}: {
  mode: AuthMode;
  onClose: () => void;
  onSwitch: (mode: AuthMode) => void;
}) {
  const isSignUp = mode === "kayıt";
  const [submitted, setSubmitted] = useState(false);

  function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      aria-labelledby="auth-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
      role="dialog"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          aria-label="Pencereyi kapat"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-[#767676] transition-colors hover:bg-[#f5f5f5]"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
        <div className="mb-6 pr-8">
          <Wordmark />
          <h2 className="mt-8 font-heading text-4xl font-bold text-[#191919]" id="auth-title">
            {isSignUp ? "Kayıt ol" : "Giriş yap"}
          </h2>
          <p className="mt-2 text-sm leading-5 text-[#494949]">
            {isSignUp ? "YemekYol hesabınızı oluşturun." : "YemekYol hesabınıza giriş yapın."}
          </p>
        </div>
        <form className="space-y-4" onSubmit={submitAuth}>
          {isSignUp ? (
            <label className="block text-sm font-medium text-[#191919]">
              Ad soyad
              <input
                className="mt-2 h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base outline-none transition-colors focus:border-[#191919]"
                placeholder="Adınızı ve soyadınızı girin"
                required
                type="text"
              />
            </label>
          ) : null}
          <label className="block text-sm font-medium text-[#191919]">
            E-posta adresi
            <input
              className="mt-2 h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base outline-none transition-colors focus:border-[#191919]"
              placeholder="E-posta adresinizi girin"
              required
              type="email"
            />
          </label>
          <label className="block text-sm font-medium text-[#191919]">
            Şifre
            <input
              className="mt-2 h-12 w-full rounded-xl border border-[#e0e0e0] px-4 text-base outline-none transition-colors focus:border-[#191919]"
              placeholder="Şifrenizi girin"
              required
              type="password"
            />
          </label>
          <button
            className="h-12 w-full rounded-full bg-[#eb1700] px-5 text-base font-bold text-white transition-colors hover:bg-[#c91400]"
            type="submit"
          >
            {isSignUp ? "Kayıt ol" : "Giriş yap"}
          </button>
        </form>
        {submitted ? (
          <p className="mt-4 rounded-xl bg-[#f5f5f5] p-3 text-center text-sm text-[#494949]">
            {isSignUp ? "Kayıt işlemi için bilgileriniz hazır." : "Giriş bilgileriniz gönderilmeye hazır."}
          </p>
        ) : null}
        <p className="mt-6 text-center text-sm text-[#494949]">
          {isSignUp ? "Zaten hesabınız var mı?" : "Hesabınız yok mu?"}{" "}
          <button
            className="font-bold text-[#eb1700] hover:underline"
            onClick={() => {
              setSubmitted(false);
              onSwitch(isSignUp ? "giriş" : "kayıt");
            }}
            type="button"
          >
            {isSignUp ? "Giriş yapın" : "Kayıt olun"}
          </button>
        </p>
      </div>
    </div>
  );
}

function HeroSection({ onOpenAuth }: { onOpenAuth: (mode: AuthMode) => void }) {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  function submitAddress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(address.trim() ? "Adres hazır — favorilerinizi bulalım." : "Restoran bulmak için bir adres girin.");
  }

  function useLocation() {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setAddress("Mevcut konum");
          setStatus("");
        },
        () => setStatus("Konumunuza erişilemedi."),
      );
      return;
    }
    setStatus("Konumunuza erişilemedi.");
  }

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#eb1700]">
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover object-center opacity-40 mix-blend-multiply"
        fill
        priority
        sizes="100vw"
        src={`${imageRoot}/hero.jpg`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(235,23,0,.3),rgba(235,23,0,.85))]" />
      <header className="relative z-10 mx-auto flex max-w-[1200px] items-start justify-end gap-2 px-6 pt-5">
        <button
          className="inline-flex h-10 items-center rounded-full px-4 text-base font-medium text-white transition-colors hover:bg-white/10"
          onClick={() => onOpenAuth("giriş")}
          type="button"
        >
          Giriş Yap
        </button>
        <button
          className="inline-flex h-10 items-center rounded-full bg-white px-4 text-base font-medium text-[#191919] transition-colors hover:bg-[#f3f3f3]"
          onClick={() => onOpenAuth("kayıt")}
          type="button"
        >
          Kayıt Ol
        </button>
      </header>
      <div className="relative z-10 mx-auto flex max-w-[750px] flex-col items-center px-4 pb-16 pt-10 text-center text-white">
        <div className="mb-8">
          <Wordmark compact />
        </div>
        <h1 className="font-heading text-[32px] font-black uppercase leading-none tracking-[-0.8px] md:text-[40px] md:leading-10">
          İlk siparişte 0 ₺ teslimat ücreti
        </h1>
        <p className="mt-2 text-xs font-medium text-white/90">Diğer ücretler geçerlidir</p>
        <form className="mt-8 w-full max-w-[560px]" onSubmit={submitAddress}>
          <div className="flex h-14 items-center rounded-full bg-white pl-4 pr-1.5 shadow-[0_2px_8px_rgba(25,25,25,0.2)]">
            <MapPin aria-hidden="true" className="mr-2 h-6 w-6 shrink-0 text-[#767676]" />
            <label className="sr-only" htmlFor="delivery-address">
              Teslimat adresini girin
            </label>
            <input
              className="h-[22px] min-w-0 flex-1 bg-transparent text-left text-base font-medium leading-[22px] tracking-[-0.01px] text-[#191919] outline-none placeholder:text-[#767676]"
              id="delivery-address"
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Teslimat adresini girin"
              value={address}
            />
            <button
              aria-label="Restoran bul"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eb1700] text-white transition-transform hover:scale-105 active:translate-y-px"
              type="submit"
            >
              <Search aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </form>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)] transition-colors hover:bg-[#f3f3f3]"
            href="#footer"
            onClick={(event) => {
              event.preventDefault();
              onOpenAuth("giriş");
            }}
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Kayıtlı adres için giriş yap
          </a>
          <button
            className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)] transition-colors hover:bg-[#f3f3f3] active:translate-y-px"
            onClick={useLocation}
            type="button"
          >
            <LocateFixed aria-hidden="true" className="h-4 w-4" />
            Mevcut konumumu kullan
          </button>
        </div>
        {status ? <p className="mt-4 text-sm font-medium text-white">{status}</p> : null}
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-black px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-3">
        {partnerCards.map((card) => (
          <article className="flex flex-col items-center text-center" key={card.title}>
            <div className="flex h-[154px] w-[154px] items-center justify-center rounded-full border border-white/30 text-white">
              {card.icon}
            </div>
            <h2 className="mt-6 max-w-[300px] text-[22px] font-bold leading-[1.25] text-[#c6c6c6] md:text-[28px]">
              {card.title}
            </h2>
            <p className="mt-3 max-w-[280px] text-sm leading-5 text-[#9c9c9c]">{card.description}</p>
            <a className="mt-3 text-sm font-bold text-[#eb1700] transition-opacity hover:opacity-75" href="#footer">
              {card.action}
              <ArrowRight aria-hidden="true" className="ml-1 inline h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function OfferNotice() {
  return (
    <div className="border-b border-[#eeeeee] bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-3 text-sm text-[#191919]">
          <BrandMark className="h-4 w-7 text-[#eb1700]" />
          <span>İlk siparişinizde 0 ₺ teslimat ücreti.</span>
        </div>
        <a className="shrink-0 text-sm font-bold text-[#191919] underline-offset-2 hover:underline" href="#feed">
          Tümünü gör
        </a>
      </div>
    </div>
  );
}

function FeatureArticle({ feature }: { feature: Feature }) {
  return (
    <article className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
      <div className={feature.reverse ? "md:order-2" : "md:order-1"}>
        {feature.eyebrow ? <p className="mb-3 text-sm font-bold text-[#191919]">{feature.eyebrow}</p> : null}
        <h2 className="font-heading text-[32px] font-bold leading-[1.25] text-[#191919] md:text-[40px]">{feature.title}</h2>
        <p className="mt-4 max-w-[460px] text-base leading-6 text-[#494949]">{feature.description}</p>
        {feature.disclaimer ? <p className="mt-2 text-xs text-[#767676]">{feature.disclaimer}</p> : null}
        <div className="mt-5">
          <ArrowLink>{feature.action}</ArrowLink>
        </div>
      </div>
      <div className={feature.reverse ? "md:order-1" : "md:order-2"}>
        <Image
          alt={feature.imageAlt}
          className="aspect-[772/523] w-full rounded-[24px] object-cover"
          height={523}
          loading="lazy"
          sizes="(min-width: 768px) 50vw, 100vw"
          src={feature.image}
          width={772}
        />
      </div>
    </article>
  );
}

function NeighborhoodSection() {
  const [activeTab, setActiveTab] = useState<DirectoryTab>("Popüler Şehirler");
  const items = directoryData[activeTab];

  return (
    <section className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="font-heading text-[28px] font-bold text-[#191919] md:text-[32px]">Mahallenizden daha fazlasını keşfedin</h2>
        <div aria-label="Mahalle rehberleri" className="mt-6 flex gap-6 overflow-x-auto border-b border-[#e0e0e0]" role="tablist">
          {(Object.keys(directoryData) as DirectoryTab[]).map((tab) => {
            const selected = tab === activeTab;
            return (
              <button
                aria-selected={selected}
                className={`shrink-0 border-b-2 pb-3 text-base ${selected ? "border-[#191919] font-bold text-[#191919]" : "border-transparent font-medium text-[#767676]"}`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map((item) => (
            <a className="text-left text-base text-[#191919] underline-offset-2 hover:underline" href="#feed" key={item}>
              {item}
            </a>
          ))}
        </div>
        <button className="mt-8 text-base font-bold text-[#191919] underline-offset-2 hover:underline" type="button">
          Daha fazlasını gör
        </button>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-white px-6 pb-16 pt-8 md:px-10" id="footer">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-xl font-bold text-[#191919]">Popüler kategoriler</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {popularCategories.map((category) => (
            <a className="text-sm text-[#494949] underline-offset-2 hover:underline" href="#feed" key={category}>
              {category}
            </a>
          ))}
        </div>
        <div className="mt-12 grid gap-10 border-t border-[#e0e0e0] pt-10 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-bold text-[#191919]">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="text-sm text-[#494949] underline-offset-2 hover:underline" href="#footer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e0e0e0] pt-8 text-xs text-[#767676] md:flex-row md:items-center md:justify-between">
          <a className="flex items-center gap-2 text-[#191919]" href="#top">
            <BrandMark className="h-5 w-8 text-[#eb1700]" />
            <span className="font-heading text-sm font-black tracking-[0.14em]">yemekyol</span>
          </a>
          <div className="flex flex-wrap gap-4">
            <a className="hover:underline" href="#terms">Hizmet koşulları</a>
            <a className="hover:underline" href="#privacy">Gizlilik</a>
            <a className="hover:underline" href="#locations">Teslimat bölgeleri</a>
            <span>© 2026 yemekyol demo sürümü</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function YemekYolHomepage() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  return (
    <main className="bg-white" id="top">
      <HeroSection onOpenAuth={setAuthMode} />
      <PartnerBand />
      <OfferNotice />
      <section aria-label="YemekYol hizmetleri" className="bg-white">
        {features.map((feature) => <FeatureArticle feature={feature} key={feature.title} />)}
      </section>
      <NeighborhoodSection />
      <SiteFooter />
      {authMode ? (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSwitch={setAuthMode}
        />
      ) : null}
    </main>
  );
}
