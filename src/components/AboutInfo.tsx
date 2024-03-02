const AboutInfo = () => {
  return (
    <div>
      <h1 className="text-justify text-[18px] text-gray-200">
        Assalamualaikum, I'm
        <span className="font-semibold text-[#4BFFA5]"> Farhan-Masuk </span>a
        frontend web developer based in Bangladesh. I have well knowledge of
        Frontend web development.
      </h1>
      <p className="my-10 text-justify text-[16px] text-gray-300">
        {/* <p>
          👋 Hey there! I'm a 21-year-old self-motivated programmer on a journey
          to become a versatile full-stack web developer. My passion for
          programming drives me to dedicate 6 to 8 hours each day to coding,
          constantly learning, and exploring new technologies.
        </p> */}
        <p className="mt-3">
          🚀 Currently, I have a solid foundation in Frontend Development and
          possess basic knowledge of the MERN stack. My goal is to elevate my
          skills daily, ensuring that I stay at the forefront of web development
          trends.
        </p>
        <p className="my-3">
          💻 Since 2020, I've been actively engaged as a Frontend Web Developer,
          specializing in creating responsive and visually appealing websites.
          My focus is on crafting clean code for optimal performance.
        </p>
        {/* <p>
          🌐 As a GitHub open-source contributor, I'm committed to enhancing my
          skills and delivering high-quality projects. If you're curious about
          my work, feel free to explore my GitHub for an in-depth look at the
          projects I've been involved in. Still, I'm developing my skills daily
          and enjoying my life with programming.
        </p> */}
      </p>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-10">
        <div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#4BFFA5]">Name:</span> Farhan-Masuk
          </div>
          <div className="my-1 flex gap-5 text-[18px]">
            <span className="text-[#4BFFA5]">Phone:</span> +8801701008707
          </div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#4BFFA5]">Nationality:</span>
            Bangladeshi
          </div>
        </div>
        <div className="hidden h-24 border-l-4 border-[#4BFFA5] p-4 md:block"></div>
        <div>
          <div className="flex gap-5 text-[18px]">
            <span className="text-[#4BFFA5]">Phone:</span> +8801886008707
          </div>
          <div className="my-1 flex gap-5 text-[18px]">
            <span className="text-[#4BFFA5]">Address:</span> Dhaka, Bangladesh
          </div>
          <div className="flex gap-5 text-[18px]">
            <span className="mb-5 text-[#4BFFA5] sm:mb-0">Language:</span>
            Bengali, English
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
