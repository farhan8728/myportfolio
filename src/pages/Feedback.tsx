import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbackData } from "../data/FeedbackData";
import { Link } from "react-router-dom";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="mx-auto my-10 w-[123px] border-b-[3px] border-[#4BFFA5]   text-2xl font-semibold md:w-[155px] md:text-3xl">
        <h1 className="text-center">Feedback</h1>
      </div>

      <div className=" mx-auto my-20   max-w-[1200px] rounded-lg bg-[#252425] px-7  py-20">
        <Slider {...settings}>
          {feedbackData.map((data) => (
            <div key={data.id}>
              <div className="flex flex-wrap items-center justify-center md:justify-evenly">
                <div className="mt-2 flex items-center justify-center gap-5">
                  <img
                    className="h-16 w-16 rounded-full ring-2 ring-[#4BFFA5]"
                    src={data.img}
                    alt=""
                  />
                  <div>
                    <h1 className="text-2xl font-semibold">{data.name}</h1>
                    <div className="my-1 flex">
                      <h2 className="mr-2 text-[#4BFFA5]">{data.position}</h2> @
                      <Link
                        className="underline"
                        to="https://devaspire.com/"
                        target="_blank"
                      >
                        {data.company}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="mx-auto mt-10 text-center text-[#ddd] sm:w-[500px]">
                  {data.fbMsg}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Feedback;
