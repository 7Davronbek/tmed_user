import React, { Suspense } from "react";
import { Loader, RootLayoutProps } from "@/shared";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/widgets/layout/ui/main";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "T-MED Client",
  description:
    "Muassasa haqida. 1899 yilda Kaspiy orti va Markaziy Osiyo yo'llari bir-biriga Markaziy Osiyo nomi bilan qo'shilib, uning tarkibida mavjud tibbiyot muassasalarini boshqarish va yo'l qurilishini nazorat qilish funktsiyalari mavjud bo'lgan tibbiy qism tashkil etildi. Shu vaqtga kelib, tibbiyot muassasalari paramedik-akusherlik punktlari (PAP), paramedik punktlar, tibbiy joylar, shuningdek, Buxoro stantsiyasida 10 o'ringa mo'ljallangan shifoxona tashkil etilgan.\n" +
    "Ushbu bosqichda yangi qurilayotgan yo'l uchastkalarida ambulator yordamning birlamchi bo'g'inini tashkil etish davom ettirildi, malakali ambulatoriya yordami yaratildi, yangi yordam rejimlari joriy etildi (otolaringologiya, jarrohlik, nevrologik, laboratoriya). Toshkent, Ashxobod, Qarshi, Charjou, Krasnovodsk, Samarqand, Chernyayevo, Kizilarvat stantsiyalarida shifoxona bo'limlari dastlab umumiy, so'ngra maxsus (terapiya, jarrohlik, infeksiya, tug'ruqxona) tashkil etildi. 1918-yilda 185 ta koyka, 1940-yilda 1306 ta, 1950-yilda 1890 ta, 1968-yilga kelib esa 3000 dan ziyod koykalar qo'yib bo'lingan edi. 1929 yilda poliklinika, sog'liqni saqlash markazlari qayta tashkil etildi. Poliklinikalarda yuqori sifatli profilaktika tekshiruvlarini ta'minlaydigan tor mutaxassisliklar shifokorlarining shtatdagi lavozimi joriy etildi.\n" +
    "1959 yildan boshlab shtatlar ajratildi, bolalar maslahatxonalari bolalar poliklinikalariga isloh qilindi, bolalar statsionar bo'limlari tashkil etildi. Ular bolalarni tibbiy ko'rikdan o'tkazish va yaxshilashni ta'minladilar.\n" +
    "1970 yilga kelib asosiy kuchni ishga tushirib, tibbiyot muassasalari ham tibbiy yordam, ham shifokorlar mehnati sharoitida yaxshilanishni davom ettirdi. 1979-1980 yillarda barcha muassasalar eski yoki namunaviy yangi binolar (Samarqand, Urganch, Xo'jayli, Andijon, Qarshi, Qo'ng'irot) obodonlashtirildi. Nazarbek qishlog'ida shifoxona va Havotog' stansiyasida iqlim shifoxonasi qurilgan. Tish klinikasi va teri-venerologiya dispanseri yaratildi.\n" +
    "1980-yillarning oxiriga kelib, 12 ta profildan 3330 ta statsionar yotoq va 19 ta profilda bir smenada 6900 ta tashrif buyuradigan poliklinika (bo'lim) mavjud edi. Tibbiy yordamni liniyada yashovchi temiryo'lchilarga yaqinlashtirish maqsadida \"Salomatlik\" tibbiy-sanitariya yordami poyezdi tashkil etilib, unda shifokorlar xonalari, protseduralar, registrlar va diagnostika xonalari, flyurograf vagonlari, xodimlar uchun yotoqxona vagonlari mavjud bo'lgan ikkita ambulatoriya vagonlari mavjud. \"Salomatlik\" poyezdida tibbiyot xodimlarining kichik stansiyalarda ishlashi, Markaziy tuman shifoxonalaridan uzoqda joylashgan joylarda istiqomat qiluvchi temiryo'lchilarni tibbiy ko'rikdan o'tkazish uchun barcha sharoitlar yaratilgan.\n" +
    "Kompaniyaning tibbiy-sanitariya xizmati boshliqlarining nomlari: Briganin, Dmitriyevskiy, Sarkisov, I. Umarov, Martirosyan, A. Alimov, A. Akbarov, Sh.Eshonxajayev, A. M. Miragzamov. Ularning har birlari temir yo'l ishchi xodimlari sog'lig'ini yaxshilashga o'z hissalarini qo'shdilar.",
  category: "T-MED",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://t-med.uz",
    title: "T-MED Client",
    description: "T-MED Client",
    siteName: "T-MED Client",
    images: [
      {
        url: "https://t-med.uz",
        width: 1200,
        height: 630,
        alt: "T-MED Client",
      },
    ],
  },
};
export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <meta property="og:image" content="T-MED Client" />
        <meta property="og:image:type" content="T-MED Client" />
        <meta property="og:image:width" content="T-MED Client" />
        <meta property="og:image:height" content="T-MED Client" />
        <meta property="og:image:alt" content="T-MED Client" />
        <meta property="og:title" content="T-MED Client" />
        <meta property="og:description" content="T-MED Client" />
        <meta property="og:site_name" content="T-MED Client" />
        <meta property="og:type" content="T-MED Client" />
        <meta property="og:url" content="T-MED Client" />
        <meta property="og:locale" content="T-MED Client" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loader />}>
            <MainLayout>
              {children}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              {/*<ScrollToTop />*/}
            </MainLayout>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
