import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [first, setfirst] = useState<number>(0);
  const handleClick = () => {
    console.log("object");
  };
  return <div></div>;
}
