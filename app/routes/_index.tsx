import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { indexAction, indexLoader } from "~/controls";
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.jpg";
import heroBgMobile from "~/images/hero-bg-mobile.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import DigitalEnvelope from "~/components/DigitalEnvelope";
import MusicPlayer from "~/components/MusicPlayer";
import ogimage from "~/images/ogimage.jpg";
import GalleryPhotos from "~/components/GalleryPhotos";
import photo1 from "~/images/agendas/1.png";
import photo2 from "~/images/agendas/2.png";
import photo3 from "~/images/agendas/3.png";
import photo4 from "~/images/agendas/4.png";
import photo5 from "~/images/agendas/5.png";
import photo6 from "~/images/agendas/6.png";
import photo7 from "~/images/agendas/7.png";
import photo8 from "~/images/agendas/8.png";
import photo9 from "~/images/agendas/9.png";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "The Cutest Wedding of Deven & Manasi",
    },
    {
      description: "The Park, Visakhapatnam",
    },
    {
      "og:image": ogimage,
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "MannSeDevKi",
    },
    { "og:url": "https://www.amifauzi.com/" },
    { "og:title": "Ready for The Cutest Wedding of Deven & Manasi" },
    {
      "og:description": `The Park, Visakhapatnam`,
    },
    { "og:type": "website" },

    { "twitter:image": ogimage },
    { "twitter:card": "summary_large_image" },
    {
      "twitter:description": "The Park, Visakhapatnam",
    },
  ];
};

const events = [
  {
    name: "Pelli Koothuru",
    date: "8:00 AM February 26",
    location: "Sri Varshini Homes, Vizag",
    photo: photo1,
    description:
      "The Pelli Koothuru function marks the official “kick off” of the wedding proceedings at the bride’s home. It literally translates to “making of the bride”. All the elders of the family place oil on the bride’s head and raw turmeric roots are ground in front of her and her younger sister. The bride is not supposed to step out of her house once this event is concluded (except for the wedding, of course).",
  },
  {
    name: "Mehendi",
    date: "4:00 PM February 27",
    photo: photo2,
    location: "Sri Varshini Homes, Vizag",
    description:
      "The Mehendi function involves the application of Henna paste in extremely intricate designs on the palms and feet of the bride. Most of the ladies of the household also get Mehendi done on their palms during this event. It is a very colorful event, with a lot of fun, laughter and music. It is also widely known that the darker the Henna stain, the deeper the love of the groom is for his bride. Another fun part of this event is that the initials of the groom’s name are hidden in the Mehendi design of the bride’s hand, and it is posed as a challenge for the groom to look for it.",
  },
  {
    name: "Ganesh Pujan",
    photo: photo3,
    date: "3:00 PM February 28",
    location: "Neptune Hall - The Park, Vizag",
    description:
      "The Ganesh Pujan is the first ceremony performed at most traditional Hindu wedding ceremonies. Lord Ganesh is known as the Remover of Obstacles. Before any auspicious event is performed, it is customary to worship Lord Ganesh, and is generally held one day before the wedding day. The Pujan is performed to seek blessings and good luck from the Lord and to prepare the newlyweds for a happy married life. After Ganesh Pujan, Mameru ceremony takes place, where Mama and Mousa gifts the groom / bride with traditional clothes, sweets, dry fruits and so on wrapped beautifully in grand trousseau trays.",
  },
  {
    photo: photo4,
    name: "Haldi",
    date: "4:00 PM February 28",
    location: "Poolside - The Park, Vizag",
    description:
      "In Hindu belief, the bright yellow of turmeric is considered highly auspicious and with strong purifying qualities. This also goes hand-in-hand with science because turmeric is commonly considered a strong antiseptic. The Haldi rasam is typically done a day before the main wedding to prevent evil spirits from harming the to-be-wed couple. In this ritual, all near & dear ones apply turmeric on the bride & groom and shower them with flowers.",
  },
  {
    photo: photo5,
    name: "Sangeet",
    date: "8:00 PM February 28",
    location: "Beach Lawns - The Park, Vizag",
    description:
      "After the Haldi ceremony, a Sangeet Sandhya event is organized. The main intent behind this is for both the families to get to know each other better. In this ceremony, everyone dances and sings their hearts out. Typically in Gujarati weddings, Dandiya and Garba form a key part of the evening. Unlike other religious ceremonies, the Sangeet is solely conducted to relish in the happiness and joy surrounding the couple.",
  },
  {
    photo: photo6,
    name: "Snathakam and Kasi Yatra",
    date: "8:00 AM February 29",
    location: "Lawns - The Park, Vizag",
    description:
      "The Snathakam is a ritual signifying the readiness of the groom to enter into the Grihastha stage of life. Thousands of years ago, young Brahmin boys were made to wear a sacred thread and sent to learn the Vedas and Puranas (as their basic education) under the guidance of Sages. Once done, he comes back and has to perform the Snathakam to purify himself, following which he is given a choice to either get married or go to Kasi (Varanasi), continue to study the Vedas, and take up the life of an ascetic (Sanyasi). In this ritual, the groom pretends to set out for Kasi renouncing all worldly pleasures such as marriage, family, real estate. The bride’s brother then stops him and convinces him to come back and start family life with his sister. In today’s times, this ritual stands for the groom’s readiness to get married.",
  },
  {
    photo: photo7,
    name: "Eduru Sannaham,Thota Sambram & Palla",
    date: "3:00 PM February 29",
    location: "Neptune Hall - The Park, Vizag",
    description:
      "The Eduru Sannaham involves the bride’s family formally introducing their entire family to the groom’s family and inviting them to arrive at the wedding venue for the final wedding proceedings. During the Thota Sambram ceremony, the groom's family is welcomed by the bride's family with traditional hospitality, and the elders from both families exchange pleasantries, blessings, and gifts as a symbol of goodwill and mutual respect. This is followed by the priest reading out the entire ‘Lagna Patrika’ in front of both the families. Combining both our cultures, we are clubbing this with Palla - a Gujarati tradition, where the bride is embellished with gifts by the groom’s family. This is done to honor and appreciate the bride and welcome her to the groom’s family.",
  },
  {
    photo: photo8,
    name: "Baraat & Jaimala",
    date: "5:00 PM February 29",
    location: "Beach Lawns, The Park Vizag",
    description:
      "Baraat refers to the groom's wedding procession or the groom's party. It is a celebratory procession where the groom, accompanied by his family members, relatives, and friends, travels to the wedding venue. The Baraat is a lively and joyous event, often accompanied by music, dancing, and sometimes even fireworks.The groom typically rides a decorated horse, elephant, or car as he leads the procession to the wedding venue. The Baraat is welcomed by the bride's family and friends upon arrival at the venue. This ceremony symbolizes the groom's journey to the bride's home to marry her and start a new life together. Once the Baraat has been welcomed and has settled down, the bride enters the venue. This is followed by the Jaimala, where the bride and groom exchange garlands signifying acceptance of each other as their spouse and as a promise of love and respect for one another.",
  },
  {
    photo: photo9,
    name: "Vivaha Muhurtham",
    date: "2:54 AM March 1st",
    location: "Beach Lawns - The Park, Vizag",
    description:
      "The Vivaha Muhurtham specifically refers to the auspicious moment or time chosen for the wedding ceremony. Vivaha means wedding, and Muhurtham refers to the auspicious time. The Muhurtham ceremony typically involves the exchange of vows, seeking blessings from several Hindu gods & goddesses, and the tying of the sacred thread - the Mangalsutra.",
  },
];

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const { ENV } = useLoaderData<LoaderDataType>();
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  }, []);

  // const onCloseWelcomeModal = () => {
  //   setOpenWelcome(false);
  // };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-background-2"
    >
      {/* <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} /> */}
      <div
        className="flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #CE7BB0" }}
          >
            Deven & Manasi
          </h4>
          <h5
            className="text-center font-head font-bold text-2xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "1px 1px 0.5px #CE7BB0" }}
          >
            <i># MannSeDevKi</i>
          </h5>
          <div
            className="text-center font-black font-sans text-md text-[#EFEFEF] italic border-t-2 border-[#CE7BB0] pt-3"
            style={{ textShadow: "2px 2px 1px #CE7BB0" }}
          >
            29.02.2024
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-36 pt-24">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Agendas events={events} />
      </SectionWrapper>

      <div className="mb-24">
        <LocationMap />
      </div>

      <SectionWrapper className="mb-36">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="py-24 bg-background text-gray-700 relative text-center font-sans">
        Made with ❤ by <span className="font-semibold">Hero and Devd </span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
