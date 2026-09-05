import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const pageDir = join(root, "public/sites/YemekYol-com-bb18bd46/root-8a5edab2/images");
const sharedDir = join(root, "public/sites/YemekYol-com-bb18bd46/shared");

const assets = [
  {
    dest: join(pageDir, "hero-desktop.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/hero_v3/hero_desktop.png",
  },
  {
    dest: join(pageDir, "scoot-scoot.svg"),
    url: "https://cdn.YemekYol.com/media/consumer/home/landing/new/ScootScoot.svg",
  },
  {
    dest: join(pageDir, "storefront.svg"),
    url: "https://cdn.YemekYol.com/media/consumer/home/landing/new/Storefront.svg",
  },
  {
    dest: join(pageDir, "iphone.svg"),
    url: "https://cdn.YemekYol.com/media/consumer/home/landing/new/iphone.svg",
  },
  {
    dest: join(pageDir, "download-the-app.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png",
  },
  {
    dest: join(pageDir, "dashpass.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png",
  },
  {
    dest: join(pageDir, "grocery.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/grocery_desktop.png",
  },
  {
    dest: join(pageDir, "convenience.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/convenience_desktop.png",
  },
  {
    dest: join(pageDir, "beauty.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/beauty_desktop.png",
  },
  {
    dest: join(pageDir, "flowers.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png",
  },
  {
    dest: join(pageDir, "alcohol.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png",
  },
  {
    dest: join(pageDir, "pet-supplies.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png",
  },
  {
    dest: join(pageDir, "become-a-dasher.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/become_a_dasher_desktop.png",
  },
  {
    dest: join(pageDir, "work-with-YemekYol.png"),
    url: "https://cdn.YemekYol.com/managed/consumer/seo/home/landing_cta/work_with_YemekYol_desktop.png",
  },
  {
    dest: join(sharedDir, "favicon.ico"),
    url: "https://cdn.YemekYol.com/static/img/favicon@2x.ico?dd-nonce",
  },
  {
    dest: join(pageDir, "restaurant-burger.jpg"),
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-pizza.jpg"),
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-sushi.jpg"),
    url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-tacos.jpg"),
    url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-chicken.jpg"),
    url: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-ramen.jpg"),
    url: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-salad.jpg"),
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-pasta.jpg"),
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-coffee.jpg"),
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-dessert.jpg"),
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-sandwich.jpg"),
    url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
  },
  {
    dest: join(pageDir, "restaurant-thai.jpg"),
    url: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
  },
];

async function download(url, dest) {
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 YemekYolCloneAssetFetcher/1.0" },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log("ok", dest, buf.length);
}

async function run() {
  const queue = [...assets];
  const workers = 4;
  await Promise.all(
    Array.from({ length: workers }, async () => {
      while (queue.length) {
        const item = queue.shift();
        if (!item) return;
        try {
          await download(item.url, item.dest);
        } catch (error) {
          console.error("fail", item.url, error);
        }
      }
    }),
  );
}

await run();
