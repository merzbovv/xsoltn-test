"use server";
import bgImg from "./images/img.svg";
import like from "./images/like.svg";
import medalStar from "./images/medal-star.svg";
import star from "./images/star.svg";
import Image from "next/image";
import Inputs from "@/app/components/Main/Inputs";

export default async function Main(): Promise<React.JSX.Element>
{
  return (
    <main
      className={`w-full bg-cover bg-[#F3F3F3] bg-center mt-[25px] w-[1140px] h-[590px] rounded-[35px] flex justify-between items-start flex-wrap`}>
      <div className={"w-[600px]"}>
        <div className={"flex flex-row gap-5 m-[30px]"}>
          <div className={"flex flex-row items-center bg-[#FFDE00] p-[8px] rounded-[20px]"}>
            <Image src={medalStar} className={"w-[16px] h-[16px] mr-[3px]"} alt={"medal-star"}/>
            <p className={"text-[14px] font-[500]"}>Опыт 15+ лет</p>
          </div>
          <div className={"flex flex-row items-center bg-[#FFDE00] p-[8px] rounded-[20px]"}>
            <Image src={like} className={"w-[16px] h-[16px] mr-[3px]"} alt={"medal-star"}/>
            <p className={"text-[14px] font-[500]"}>2000+ довольных клиентов</p>
          </div>
          <div className={"flex flex-row items-center bg-[#FFDE00] p-[8px] rounded-[20px]"}>
            <Image src={star} className={"w-[16px] h-[16px] mr-[3px]"} alt={"medal-star"}/>
            <p className={"text-[14px] font-[500]"}>Рейтинг 4,98</p>
          </div>
        </div>
        <div className={"mt-[120px] ml-[100px] flex flex-col leading-[57px]"}>
          <h1 className={"text-[48px] font-[800] text-[#1A1A1A]"}>Помощь студентам в учебе</h1>
          <p className={"leading-[23px] mt-[40px] w-[400px] text-[#1A1A1A] font-[400]"}>Персональный менеджер — 0 р.
            Техническая поддержка 24/7. Каждая услуга «под ключ».</p>
        </div>
      </div>
      <div className={"w-[520px]"}>
        <Image src={bgImg} className={"w-[696px] h-[590px]"} alt={"bg-image"}/>
      </div>
      <div className={"w-full mt-[-70px] ml-[30px]"}>
        <Inputs/>
      </div>
    </main>
  );
}