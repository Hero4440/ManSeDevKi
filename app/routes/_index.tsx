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

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Undangan Pernikahan - Ami & Fauzi",
    },
    {
      description:
        "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu",
    },
    {
      "og:image": ogimage,
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "amifauzi",
    },
    { "og:url": "https://www.amifauzi.com/" },
    { "og:title": "Undangan Pernikahan - Ami & Fauzi" },
    {
      "og:description": `Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu`,
    },
    { "og:type": "website" },

    { "twitter:image": ogimage },
    { "twitter:card": "summary_large_image" },
    {
      "twitter:description":
        "Sabtu, 30 Juli 2022 di Taman Mini Perumnas Batu Galing, Bengkulu",
    },
  ];
};

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
        <Agendas />
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
        Made with ❤ by <span className="font-semibold">Hero and Devd</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
