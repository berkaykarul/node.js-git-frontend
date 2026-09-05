import { footerColumns, popularCategories } from "@/lib/YemekYol-data";
import { YemekYolMark } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

export function SiteFooter() {
  return (
    <footer className="bg-white px-6 pb-16 pt-8 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-[20px] font-bold text-[#191919]">Popular Categories</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {popularCategories.map((item) => (
            <li key={item}>
              <a href="#feed" className="text-[14px] text-[#494949] hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-10 border-t border-[#e0e0e0] pt-10 md:grid-cols-3">
          <FooterColumn title="Get to Know Us" items={footerColumns.knowUs} />
          <FooterColumn title="Let Us Help You" items={footerColumns.help} />
          <FooterColumn title="Doing Business" items={footerColumns.business} />
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e0e0e0] pt-8 text-[12px] text-[#767676] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-[#191919]">
            <YemekYolMark className="h-5 w-8 text-[#eb1700]" />
            <span className="font-heading text-[14px] font-black uppercase tracking-[0.14em]">
              YemekYol
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy</a>
            <a href="#locations">Delivery Locations</a>
            <span>© 2026 YemekYol clone for demo use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[16px] font-bold text-[#191919]">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#footer" className="text-[14px] text-[#494949] hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
