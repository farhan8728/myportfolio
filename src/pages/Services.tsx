import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceData } from "../data/ServiceData";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Services = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto my-10 w-[105px] border-b-[3px] border-[#4BFFA5] text-2xl font-semibold md:w-[130px] md:text-3xl">
        <h1 className="text-center">Services</h1>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={35}
        slidesPerView={"auto"}
        loop={true}
        speed={400}
        autoplay={{ delay: 3000 }}
      >
        {serviceData.map((data) => (
          <SwiperSlide className="max-w-[370px] " key={data.id}>
            <div
              key={data.id}
              className="mb-10 flex h-[250px] cursor-pointer  flex-col    justify-center rounded-lg bg-[#252425] px-2 text-center transition-all hover:scale-95 hover:border-b hover:border-[#4BFFA5] sm:h-[220px]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#161616] text-3xl text-[#4BFFA5]">
                {data.icon}
              </div>
              <h1 className="my-2 text-2xl font-semibold text-gray-200">
                {data.name}
              </h1>
              <p className="text-gray-300">{data.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
