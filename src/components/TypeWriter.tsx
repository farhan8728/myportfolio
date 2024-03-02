import { Cursor, Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div className="my-2 text-2xl font-semibold md:text-4xl">
      I'm a
      <span className="ml-2 text-3xl text-[#4BFFA5]   xl:text-4xl">
        <Typewriter
          words={[
            "Javascript Developer.",
            "Frontend Developer.",
            "React Developer.",
          ]}
          loop={0}
          typeSpeed={120}
          deleteSpeed={80}
        />
        <Cursor cursorStyle="|" />
      </span>
    </div>
  );
};

export default TypeWriter;
