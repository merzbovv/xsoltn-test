"use server";
import Image from "next/image";
import logo from "./images/logo.svg";
import profile from "./images/profile.svg";
import AboutUs from "@/app/components/Header/AboutUs";
import Consultation from "@/app/components/Header/Consultation/Consultation";

export default async function HeaderServer(): Promise<React.JSX.Element>
{
  const commonStyles = "p-[5px] font-[500] cursor-pointer hover:text-[#5f5a5a] leading-[19px]";

  return (
    <header style={{margin: "0 auto"}} className={"h-[98px] flex items-center justify-around w-[1245px]"}>
      <Image src={logo} alt={"logo"} width={154} height={50} priority={true}/>
      <nav className={"flex flex-row gap-5"}>
        <AboutUs props={{commonStyles: commonStyles}}/>
        <p className={commonStyles}>Услуги и цены</p>
        <p className={commonStyles}>Предметы</p>
        <p className={commonStyles}>Бонусы</p>
        <p className={commonStyles}>Блог</p>
      </nav>
      <div className={"flex gap-7"}>
        <div className={"flex gap-1"}>
          <button className={"font-[500] text-[#858FFF]"}>Войти</button>
          <Image src={profile} alt={"profile"} width={24} height={24} priority={true}/>
        </div>
        <Consultation/>
      </div>
    </header>
  );
}