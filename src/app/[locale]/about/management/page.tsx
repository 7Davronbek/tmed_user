import { AboutLayout } from '@/widgets/layout/ui'
import { ManagersCard } from '@/shared'
import raxbar from '@/assets/images/raxbar.jpg'
import raxbar2 from '@/assets/images/raxbar2.jpg'
import { Grid } from '@mui/material'
import { useTranslations } from 'next-intl'

const ManagementPage = () => {
  const t = useTranslations('Main')
  return (
    <AboutLayout title={t('management')}>
      <Grid container>

        <ManagersCard image={raxbar} name={'MAMASIDIKOV MUXSINJON MUSAJONOVICH'} phoneNumber={'+998 71 299-98-27'}
                      email={'nvs@railway.uz'}
                      admissionDay={'Dushanbadan Jumagacha \n' +
                        '16:00 dan 18:00 gacha'}
                      staj={'1993-1994 yy. - "M.Topiboldiev" nomli shirkat xo\'jaligi 8-brigada ishchisi\n' +
                        '1994-1997 yy. - "O\'zbekiston temir yo\'llari" AJ "O\'ztemiryo\'linshootta\'mir" birlashmasining Toshkent fuqaro inshootlari distansiyasi 3 razryadli chilangari\n' +
                        '1997-1998 yy. - harbiy xizmat\n' +
                        '1998-2000 yy. - "O\'zbekiston temir yo\'llari" AJ Toshkent fuqaro inshootlari va suv ta\'minoti distansiyasi soliq bo\'yicha ustasi\n' +
                        '2000-2010 yy. - "O\'zbekiston temir yo\'llari" AJ binolar va inshootlarga xizmat ko\'rsatish direksiyasi 1-toifali muhandisi, direksiya boshlig\'ining o\'rinbosari\n' +
                        '2010-2011 yy. - "O\'zbekiston temir yo\'llari" AJ Toshkent mintaqaviy temir yo\'l uzeli boshlig\'ining kadrlar va ijtimoiy masalallar bo\'yicha o\'rinbosari\n' +
                        '2011-2012 yy. - O\'zbekiston temiryo\'lchilari va transport quruvchilari kasaba uyushmasi Markaziy kengashi raisi o\'rinbosari\n' +
                        '2012-2014 yy. - Afg\'oniston Islom Respublikasidagi "Xayraton-Mazari-Sharif temir yo\'lini ekspluatasiya qilish bo\'yicha "O\'zbekiston temir yo\'llari" AJ "O\'zbektemiryo\'lekspedisia" unitar korxonasi qoshidagi "Sogdiana Trans" shu\'ba korxonasi direktori\n' +
                        '2014-2015 yy. - "O\'zbekiston temir yo\'llari" AJ kadrlar boshqarmasi boshlig\'i vazifasini bajaruvchisi\n' +
                        '2015-2015 yy. - "O\'zbekiston temir yo\'llari" AJ kadrlar boshqarmasi boshlig\'i\n' +
                        '2015-2017 yy. - "O\'zbekiston temir yo\'llari" AJ personalni boshqarish va kadrlar tayyorlash boshqarmasi boshlig\'i\n' +
                        '2017-2019 yy. - "O\'zbekiston temir yo\'llari" AJ "Qo\'qon mintaqaviy temir yo\'l uzeli" UK boshlig\'i vazifasini bajaruvchisi\n' +
                        '2019-2020 yy. - "O\'zbekiston temir yo\'llari" AJ personalni boshqarish va kadrlar tayyorlash boshqarmasi boshlig\'i\n' +
                        '2020 y. - h.v. "O\'zbekiston temir yo\'llari" AJ Sog\'liqni saqlash xizmati boshlig\'i'}

                      permission={'O\'zbekiston Respublikasi qonunlarini, O\'zbekiston Respublikasi Prezidentining farmonlari va qarorlarini, O\'zbekiston Respublikasi Oliy Majlisi va Vazirlar Mahkamasining qarorlarini, Vazirlik buyruqlarini amalga oshirish bo\'yicha chora-tadbirlarni ishlab chiqish. Sog\'liqni saqlash va boshqa davlat organlari hamda "O\'zbekiston temir yo\'llari" AJ raisi, shuningdek ularning bajarilishini nazorat qilish.\n' +
                        '"O\'zbekiston temir yo\'llari" AJ Texnik-iqtisodiy kengashi tomonidan tasdiqlangan kontingentga tibbiy yordam ko\'rsatish rejalarini ishlab chiqish.\n' +
                        'Tibbiy muassasalardagi barcha favqulodda vaziyatlarni o\'z vaqtida va puxta tekshirishni tashkil etish (to\'satdan o\'lim, vaqtida tibbiy yordam ko\'rsatmaslik, temir yo\'l ishchilarida yuqumli kasalliklar paydo bo\'lishi, baxtsiz hodisalar va boshqalar), shuningdek tekshirishlar natijalari va ko\'rilgan choralar, zudlik bilan yuqori tashkilotlarga xabar berish.\n' +
                        'Vrachlar amaliyotida profilaktika, diagnostika va davolashning zamonaviy shakllarini, tibbiy yordamning barcha turlarini targ\'ib qilish, shuningdek temir yo\'l xodimlari orasida nogironlik va o\'limning oldini olish, ularga yuqori malakali tibbiy xizmatlarni ko\'rsatish.\n' +
                        'Tibbiy fan va texnikaning ilg\'or tashkiliy shakllarini, sog\'liqni saqlash sohasidagi yutuqlarni va profilaktika, sanitariya va terapevtik vositalarni joriy etish orqali temir yo\'lchilar sog\'lig\'ini saqlash va mustahkamlashga qaratilgan chora-tadbirlarning bajarilishini nazorat qilish.\n' +
                        'Tibbiy xizmatga fuqarolarning takliflari, arizalari, xatlari va shikoyatlarini o\'z vaqtida ko\'rib chiqilishini, ularning har biri bo\'yicha aniq qarorlar qabul qilinishini va ushbu qarorlarning bajarilishini nazorat qilishni ta\'minlash.\n' +
                        'Barcha tadbirlarga rahbarlikni, jamoat kengashi ishida ishtirok etishni va jamoat o\'rtasida o\'tkaziladigan ijtimoiy-siyosiy tadbirlar paytida uning ishlashi uchun zarur shart-sharoitlarni ta\'minlashni ta\'minlash.\n' +
                        'Tibbiy xizmatning asosiy mutaxassislari bilan birgalikda tibbiyot uskunalari, dori vositalari va tibbiyot muassasalari uchun zarur bo\'lgan boshqa tibbiy asbob-uskunalarga yillik buyurtmalarni ko\'rib chiqish va tasdiqlash.\n' +
                        'Sog\'liqni saqlash vazirligining 200-sonli buyrug\'iga binoan, shuningdek, "O\'zbekiston temir yo\'llari" AJning 334-N va 551-N-sonli buyruqlari bilan davriy, muntazam tibbiy ko\'riklar, tibbiy muassasalarda dispanser nazoratining tashkil etilishi va sifatini nazorat qilish.\n' +
                        'Tibbiyot muassasalarida tibbiy asbob-uskunalarni o\'rnatish, ishlatish va texnik xizmat ko\'rsatishni nazorat qilish.\n' +
                        'Tibbiy xizmatning barcha davolash-profilaktika muassasalari faoliyatini nazorat qilish, belgilangan tartibda amaliy yordam ko\'rsatish tizimini nazorat qilish.'}
                      jobTitle={'Sog\'liqni saqlash xizmati boshlig\'i'} />
        <ManagersCard image={raxbar2} name={'SHAYUNUSOV BUNYOD SOLIYEVICH'} phoneNumber={'+998 71 299-75-45'}
                      email={'nvs26@mail.ru'}
                      admissionDay={'Dushanbadan Jumagacha \n' +
                        '16:00 dan 18:00 gacha'}
                      jobTitle={'Xizmat boshlig\'i o\'rinbosari - davolash bo\'limi mudiri'}
                staj={'2009-2011 yy. - Toshkent vrachlar malaka oshirish instituti klinik ordenaturasi\n' +
                  '2012-2015 yy. - "O\'zbekiston temir yo\'llari" AJ Markaziy klinik kasalxonasi urolog shifokori\n' +
                  '2015-2016 yy. - "O\'zbekiston temir yo\'llari" AJ temir yo\'l qon quyish stansiyasi bosh shifokori\n' +
                  '2016 y. - h.v. - "O\'zbekiston temir yo\'llari" AJ Sog\'liqni saqlash xizmati boshlig\'i o\'rinbosari –davolash bo\'limi mudiri'}
        />

      </Grid>
    </AboutLayout>
  )
}
export default ManagementPage