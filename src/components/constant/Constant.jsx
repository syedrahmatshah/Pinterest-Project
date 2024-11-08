/** @format */

// Constant.jsx
import SearchCenter from "../../assets/images/SearchCenter.png";
import SearchRight from "../../assets/images/SearchRight.png";
import SearchTopLeft from "../../assets/images/SearchTopLeft.png";
import SearchTopRight from "../../assets/images/SearchTopRight.png";
import homeLeft from "../../assets/images/homeLeft.png";
import homeRight from "../../assets/images/homeRight.png";
import homeMiddle from "../../assets/images/homeMiddle.png";
import bottomRight from "../../assets/images/bottomRight.png";
import bottomLeft from "../../assets/images/bottomLeft.png";
import homeTopRight from "../../assets/images/homeTopRight.png";
import homeTopMiddle from "../../assets/images/homeTopMiddle.png";
import homeTopLeft from "../../assets/images/homeTopLeft.png";
import Avatar from "../../assets/images/Avatar.png";
import ShopCard from "../../assets/images/ShopCard.png";
import AvatarRound from "../../assets/images/AvatarRound.png";

export const SearchImages = [
  {
    url: SearchCenter,
    customStyle: "w-80 h-64 absolute z-10 left-52 top-20 ",
  },

  {
    url: SearchRight,
    customStyle: "w-44 h-44 ml-auto mr-20 ",
  },
  {
    url: SearchTopLeft,
    customStyle: "w-52 h-44 ml-16 ",
  },
  {
    url: SearchTopRight,
    customStyle: "w-40 h-56 ml-auto mr-16 mt-4 ",
  },
];

export const HomeImages = [
  {
    url: homeLeft,
    title: "Fern future home vibes",
    customStyle: "w-96 h-96 text-[56px] ",
    textStyle: "w-80 top-14 left-8 font-medium",
  },
  {
    url: homeRight,
    title: "My Scandinavian bedroom",
    customStyle: "w-56 h-56 absolute top-0 right-0 text-[28px]",
    textStyle: "w-52 top-24 left-8 font-medium",
  },
  {
    url: homeMiddle,
    title: "The deck of my dreams",
    customStyle: "w-40 h-40 absolute top-72 right-24 text-xl",
    textStyle: "w-32 top-20 left-4 font-medium",
  },
  {
    url: bottomRight,
    title: "Our bathroom upgrade",
    customStyle: "w-52 h-52 absolute mt-28 right-24 text-[28px]",
    textStyle: "w-44 top-24 left-8 px-3 font-medium",
  },
  {
    url: bottomLeft,
    title: "Serve my drinks in style",
    customStyle: "w-60 h-60 absolute mt-16 ml-24 text-[28px]",
    textStyle: "w-40 top-32 left-8 font-medium",
  },
  {
    url: homeTopLeft,
    customStyle: "w-24 h-24 absolute top-60 left-8",
  },
  {
    url: homeTopMiddle,
    customStyle: "w-24 h-24 absolute top-60 left-36",
  },
  {
    url: homeTopRight,
    customStyle: "w-24 h-24 absolute top-60 left-64",
  },
];

export const AvatarImages = [
  {
    url: ShopCard,
    customStyle: "w-auto h-full ",
    customHeight: "h-full",
  },
  {
    url: Avatar,
    customStyle: "w-52 h-96 absolute top-24 left-20",
    title: "Scout The City",
    textStyle: "w-44 top-[98%] left-16 text-base font-semibold",
  },

  {
    url: AvatarRound,
    customStyle: "w-24 h-24 absolute top-[60%] left-10",
  },
];
