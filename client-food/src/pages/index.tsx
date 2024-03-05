import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";
import { NavBar } from "../components/NavBar";
import { HomePic } from "../components/HomePic";
import { Frames } from "../components/Frames";
import { Sales } from "../components/Sales";
import { MainDishes } from "../components/MainDishes";
import { Salads } from "../components/Salads";
import { Desert } from "../components/Desert";
import { Footer } from "../components/Footer";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [first, setfirst] = useState<number>(0);
  const handleClick = () => {
    console.log("object");
  };
  return (
    <div>
      <HomePic />
      <div className="flex w-[1200px] m-auto mt-[122px] mb-[122px] gap-[8px]">
        <Frames
          icon={"/assets/icon/book.png"}
          title={"Хүргэлтийн төлөв хянах"}
          description={"Захиалга бэлтгэлийн явцыг хянах"}
        />
        <Frames
          icon={"/assets/icon/clock.png"}
          title={"Шуурхай хүргэлт"}
          description={"Захиалга бэлтгэлийн явцыг хянах"}
        />
        <Frames
          icon={"/assets/icon/food.png"}
          title={"Эрүүл, баталгаат орц"}
          description={"Захиалга бэлтгэлийн явцыг хянах"}
        />
        <Frames
          icon={"/assets/icon/book.png"}
          title={"Хоолны өргөн сонголт"}
          description={"Захиалга бэлтгэлийн явцыг хянах"}
        />
      </div>
      <Sales />
      <MainDishes />
      <Salads />
      <Desert />
    </div>
  );
}
