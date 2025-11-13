import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const ScrollToTopBtn = () => {
  return (
    <div className="container mx-auto mb-10 md:mb-30 flex justify-center">
      <Link
        to="home"
        smooth={true}
        duration={500} // scroll duration in ms
        className="flex justify-center items-center border border-violet-400 p-3 rounded-full 
                   bg-white hover:bg-violet-400 hover:text-white dark:bg-[#2D2B3A] dark:text-white
                   hover:-translate-y-2 transition-all duration-300 ease-in-out"
        style={{ cursor: "pointer", boxShadow: "0 8px 15px rgba(139, 92, 246, 0.5)" }} // violet shadow
      >
        <FiArrowUp size={25} />
      </Link>
    </div>
  );
};

export default ScrollToTopBtn;
