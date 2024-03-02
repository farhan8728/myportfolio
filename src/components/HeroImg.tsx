interface HeroImgProps {
  heading: string;
  text: string;
}

const HeroImg: React.FC<HeroImgProps> = ({ heading, text }) => {
  return (
    <div className="mb-20 mt-16 min-h-[40vh] w-full    bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80')] bg-cover bg-center  ">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default HeroImg;
