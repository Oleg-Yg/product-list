import { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import CardProduct from "@/components/CardProduct";
import { useRouter } from "next/router";
import styles from "@/styles/Products.module.scss";
import Pagination from "@/components/Pagination";

const mockProducts = [
  {
    id: 1,
    name: "name_1",
    brand: "brand_1",
    badge: "new",
    src: "https://gas-kvas.com/uploads/posts/2023-02/1675495554_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-4.jpg",
  },
  {
    id: 2,
    name: "name_2",
    brand: "brand_2",
    badge: "top",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644855597_24-fikiwiki-com-p-kartinki-khd-kachestva-25.jpg",
  },
  {
    id: 3,
    name: "name_3",
    brand: "brand_1",
    badge: "top",
    src: "https://w-dog.ru/wallpapers/3/8/499597247090459/kamni-rybalka-reka-priroda-les-nebo-gory-prekrasnyj-pasmurno.jpg",
  },
  {
    id: 4,
    name: "name_4",
    brand: "brand_2",
    badge: "new",
    src: "https://kartinkin.net/uploads/posts/2022-03/1646753667_12-kartinkin-net-p-kartinki-zveryushek-14.jpg",
  },
  {
    id: 5,
    name: "name_5",
    brand: "brand_1",
    badge: "new",
    src: "https://gas-kvas.com/uploads/posts/2023-02/1675495554_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-4.jpg",
  },
  {
    id: 6,
    name: "name_6",
    brand: "brand_2",
    badge: "top",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644855597_24-fikiwiki-com-p-kartinki-khd-kachestva-25.jpg",
  },
  {
    id: 7,
    name: "name_7",
    brand: "brand_1",
    badge: "top",
    src: "https://w-dog.ru/wallpapers/3/8/499597247090459/kamni-rybalka-reka-priroda-les-nebo-gory-prekrasnyj-pasmurno.jpg",
  },
  {
    id: 8,
    name: "name_8",
    brand: "brand_2",
    badge: "new",
    src: "https://kartinkin.net/uploads/posts/2022-03/1646753667_12-kartinkin-net-p-kartinki-zveryushek-14.jpg",
  },
  {
    id: 9,
    name: "name_9",
    brand: "brand_1",
    badge: "new",
    src: "https://gas-kvas.com/uploads/posts/2023-02/1675495554_gas-kvas-com-p-luchshie-kartinki-dlya-fonovogo-risunka-ra-4.jpg",
  },
  {
    id: 10,
    name: "name_10",
    brand: "brand_2",
    badge: "top",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644855597_24-fikiwiki-com-p-kartinki-khd-kachestva-25.jpg",
  },
  {
    id: 11,
    name: "name_11",
    brand: "brand_1",
    badge: "top",
    src: "https://w-dog.ru/wallpapers/3/8/499597247090459/kamni-rybalka-reka-priroda-les-nebo-gory-prekrasnyj-pasmurno.jpg",
  },
  {
    id: 12,
    name: "name_12",
    brand: "brand_2",
    badge: "new",
    src: "https://kartinkin.net/uploads/posts/2022-03/1646753667_12-kartinkin-net-p-kartinki-zveryushek-14.jpg",
  },
  {
    id: 13,
    name: "name_13",
    brand: "brand_1",
    badge: "new",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644977486_31-fikiwiki-com-p-kartinki-krasivikh-mashin-38.jpg",
  },
  {
    id: 14,
    name: "name_14",
    brand: "brand_2",
    badge: "top",
    src: "https://www.automobilesreview.com/img/2010-dodge-viper-srt10-acr-x/2010-dodge-viper-srt10-acr-x-01.jpg",
  },
  {
    id: 15,
    name: "name_15",
    brand: "brand_1",
    badge: "top",
    src: "https://w-dog.ru/wallpapers/1/18/515862667873611/lamborghini-murcielago-lp-670-4-superveloce-chernyj-moshh.jpg",
  },
  {
    id: 16,
    name: "name_16",
    brand: "brand_2",
    badge: "new",
    src: "https://i.pinimg.com/originals/37/12/c2/3712c24f3c989ea7374e843f4d3deabd.jpg",
  },
  {
    id: 17,
    name: "name_17",
    brand: "brand_1",
    badge: "new",
    src: "https://www.fonstola.ru/pic/201310/1280x960/fonstola.ru_134182.jpg",
  },
  {
    id: 18,
    name: "name_18",
    brand: "brand_2",
    badge: "top",
    src: "https://www.fonstola.ru/pic/201201/1920x1080/fonstola.ru_71825.jpg",
  },
  {
    id: 19,
    name: "name_19",
    brand: "brand_1",
    badge: "top",
    src: "https://s1.1zoom.ru/b5050/115/Aston_Martin_DB11_Wine_color_529705_3840x2400.jpg",
  },
  {
    id: 20,
    name: "name_20",
    brand: "brand_2",
    badge: "new",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644977435_8-fikiwiki-com-p-kartinki-krasivikh-mashin-10.jpg",
  },
  {
    id: 21,
    name: "name_21",
    brand: "brand_1",
    badge: "new",
    src: "https://fikiwiki.com/uploads/posts/2022-02/1644977498_46-fikiwiki-com-p-kartinki-krasivikh-mashin-56.jpg",
  },
  {
    id: 22,
    name: "name_22",
    brand: "brand_2",
    badge: "top",
    src: "https://img.fonwall.ru/o/35/avtomobil_kolesa_diski_shinyi_dverki.jpg?route=mid&amp;h=750",
  },
  {
    id: 23,
    name: "name_23",
    brand: "brand_1",
    badge: "top",
    src: "https://mobimg.b-cdn.net/v3/fetch/0e/0e6732f73134a9150b696f2c11f78838.jpeg",
  },
  {
    id: 24,
    name: "name_24",
    brand: "brand_2",
    badge: "new",
    src: "https://i.artfile.ru/1920x1200_649454_[www.ArtFile.ru].jpg",
  },
  {
    id: 25,
    name: "name_25",
    brand: "brand_1",
    badge: "new",
    src: "https://pic.rutubelist.ru/video/08/88/0888d76242d0d3176a078609e1a9b137.jpg",
  },
  {
    id: 26,
    name: "name_26",
    brand: "brand_2",
    badge: "top",
    src: "https://domsmam.com/wp-content/uploads/2019/03/dom-shale.jpg",
  },
  {
    id: 27,
    name: "name_27",
    brand: "brand_1",
    badge: "top",
    src: "https://modernplace.ru/wp-content/uploads/2018/03/Stili-domov-33.jpg",
  },
  {
    id: 28,
    name: "name_28",
    brand: "brand_2",
    badge: "new",
    src: "https://shtory-deco.ru/wp-content/uploads/3/8/2/382f3b5fa79bb4686cc3fb1c971324a3.jpeg",
  },
  {
    id: 29,
    name: "name_29",
    brand: "brand_1",
    badge: "new",
    src: "https://almode.ru/uploads/posts/2021-07/1626244555_52-almode_ru-p-dvukhetazhnii-dom-s-bolshimi-oknami-54.jpg",
  },
  {
    id: 30,
    name: "name_30",
    brand: "brand_2",
    badge: "top",
    src: "https://domsmam.com/wp-content/uploads/2019/03/dom-shale.jpg",
  },
  {
    id: 31,
    name: "name_31",
    brand: "brand_1",
    badge: "top",
    src: "https://modernplace.ru/wp-content/uploads/2018/03/Stili-domov-33.jpg",
  },
  {
    id: 32,
    name: "name_32",
    brand: "brand_2",
    badge: "new",
    src: "https://shtory-deco.ru/wp-content/uploads/3/8/2/382f3b5fa79bb4686cc3fb1c971324a3.jpeg",
  },
  {
    id: 33,
    name: "name_33",
    brand: "brand_1",
    badge: "new",
    src: "https://almode.ru/uploads/posts/2021-07/1626244555_52-almode_ru-p-dvukhetazhnii-dom-s-bolshimi-oknami-54.jpg",
  },
  {
    id: 34,
    name: "name_34",
    brand: "brand_2",
    badge: "top",
    src: "https://dom-alyeparusa.ru/wp-content/uploads/2/2/9/2294e7f7f5aa92bafbba5f4a65f5fffe.jpeg",
  },
  {
    id: 35,
    name: "name_35",
    brand: "brand_1",
    badge: "top",
    src: "https://dom-alyeparusa.ru/wp-content/uploads/2/2/9/2294e7f7f5aa92bafbba5f4a65f5fffe.jpeg",
  },
  {
    id: 36,
    name: "name_36",
    brand: "brand_2",
    badge: "new",
    src: "https://shtory-deco.ru/wp-content/uploads/3/8/2/382f3b5fa79bb4686cc3fb1c971324a3.jpeg",
  },
];

export interface Product {
  id: number;
  name: string;
  brand: string;
  badge: string;
  src: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const { query } = useRouter();

  useEffect(() => {
    if (!Number(query.p)) return;
    let endId =
      query.p *
      (Object.keys(mockProducts).length /
        Math.ceil(Object.keys(mockProducts).length / 12));
    let startId =
      endId -
      Object.keys(mockProducts).length /
        Math.ceil(Object.keys(mockProducts).length / 12);

    let productsPage = mockProducts.slice(startId, endId);

    setProducts(productsPage);
  }, [query.p]);

  return (
    <MainLayout>
      <div className={styles.products}>
        <div className={styles.cards}>
          {products &&
            products.map((product) => (
              <div className={styles.product} key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.name}
                  src={product.src}
                  brand={product.brand}
                  badge={product.badge}
                />
              </div>
            ))}
        </div>
        <div>
          <Pagination
            href={"/products/?p="}
            count={Math.ceil(Object.keys(mockProducts).length / 12)}
          />
        </div>
      </div>
    </MainLayout>
  );
}
