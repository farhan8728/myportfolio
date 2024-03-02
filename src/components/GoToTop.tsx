import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden: number = 100;

    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-5 right-5   cursor-pointer">
          <div
            onClick={goToBtn}
            className="flex  h-8 w-8 animate-bounce items-center justify-center rounded-full bg-[#252425] ring-2 ring-[#4BFFA5] transition-all md:h-10 md:w-10"
          >
            <div className="text-[18px] md:text-[20px] ">
              <SlArrowUp />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoToTop;
