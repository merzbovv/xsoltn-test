"use client";

export default function Inputs(): React.JSX.Element
{
  return (
    <div className={"flex items-center"}>
      <input className={"w-[299px] h-[48px] mr-[10px] rounded-[8px] gap-[10px] font-[400]"}
             placeholder={"   Что вас интересует?"}/>
      <input className={"w-[299px] h-[48px] mr-[10px] rounded-[8px] gap-[10px] font-[400]"}
             placeholder={"   Номер телефона"}/>
      <input className={"w-[299px] h-[48px] mr-[10px] rounded-[8px] gap-[10px] font-[400]"}
             placeholder={"   E-mail"}/>
      <button className={"bg-[#FFDE00] rounded-[8px] p-[16px] font-[500] leading-[19px] hover:bg-[#E5C909]"}
              type={"submit"} onClick={(e) => e.preventDefault()}>Заказать звонок
      </button>
    </div>
  );
}