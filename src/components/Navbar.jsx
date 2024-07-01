import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleInstallAppClick = () => {
    window.location.href = "https://www.spotify.com/de-en/download/";
  };

  const handleBuyPremiumClick = () => {
    window.location.href = "https://www.spotify.com/de-en/premium/?ref=spotifycom_header_premium_individual#plans";
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            onClick={handleBuyPremiumClick}
          >
            Buy Premium
          </p>
          <p
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
            onClick={handleInstallAppClick}
          >
            Install App on PC
          </p>
          <p
            className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
            onClick={togglePopup}
          >
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-[#242424] cursor-pointer px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-[#242424] cursor-pointer px-4 py-1 rounded-2xl">Podcasts</p>
      </div>

      {isPopupVisible && (
        <div className="absolute top-16 right-4 bg-white text-black p-4 rounded-2xl shadow-lg z-10">
          <p className="font-bold">Full Name: Amarpreet Singh</p>
          <p>Profile Section: Premium User</p>
          <button className="mt-2 bg-purple-500 text-white px-4 py-1 rounded-2xl" onClick={togglePopup}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
