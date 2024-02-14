import SectionWrapper from "./Utils/SectionWrapper";
const MAP_EMBEDED_URL =
  "https://maps.google.com/maps?q=The+Park%2C+Visakhapatnam%2C+Dr+NTR+Beach+Rd%2C+Lawsons+Bay+Colony%2C+Pedda+Waltair%2C+Visakhapatnam%2C+Andhra+Pradesh+530023&t=&z=13&ie=UTF8&iwloc=&output=embed";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/The+Park,+Visakhapatnam/@17.7214832,83.3313939,17z/data=!4m22!1m12!4m11!1m3!2m2!1d83.336136!2d17.7216723!1m6!1m2!1s0x3a39449ff005cfed:0xcea4e5d71e955b93!2sThe+Park,+Visakhapatnam,+Dr+NTR+Beach+Rd,+Lawsons+Bay+Colony,+Pedda+Waltair,+Visakhapatnam,+Andhra+Pradesh+530023!2m2!1d83.3361575!2d17.7214832!3m8!1s0x3a39449ff005cfed:0xcea4e5d71e955b93!5m2!4m1!1i2!8m2!3d17.7214832!4d83.3361575!16s%2Fg%2F11bbth6p79?entry=ttu";
const MAP_TITLE = "The Park";
const MAP_ADDRESS =
  "Dr NTR Beach Rd, Lawsons Bay Colony, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530023";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Wedding Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Open maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
