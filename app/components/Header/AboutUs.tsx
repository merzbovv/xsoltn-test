"use client";
import {useState} from "react";

type StyleProps = {
  props: {
    commonStyles: string
  }
}

export default function AboutUs(props: StyleProps): React.JSX.Element
{
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const commonStyles: string = "px-4 py-2 hover:bg-gray-100 cursor-pointer";

  // Функция для закрытия меню
  function fnCloseDropdown(event: React.MouseEvent<HTMLDivElement>): void
  {
    // Проверяем, что мышь покинула родительскую область или дочерние элементы
    if (!event.currentTarget.contains(event.relatedTarget as Node))
    {
      setShowAbout(false);
    }
  }

  return (
    <>
      <div className={"relative inline-block text-left"} onMouseEnter={() => setShowAbout(true)}
           onMouseLeave={fnCloseDropdown}>
        <div className={props.props.commonStyles + " flex items-center"}>
          <p>О нас</p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 19 36"
            fill="none"
            className={"ml-[5px] "}
            style={showAbout ? {transform: "rotate(0deg)", transition: "0.2s"} : {
              transform: "rotate(90deg)",
              transition: "0.2s"
            }}
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 2L16.8146 16.8146C17.1966 17.1966 17.2077 17.8111 16.8379 18.2048C14.5878 20.6 7.09277 28.5787 2 34"
              stroke="#131313" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        {
          showAbout &&
            <div
                className={"absolute w-56 rounded-lg bg-white shadow-lg z-10"}>
                <ul className={"py-2"}>
                    <li className={commonStyles}>
                        Пункт 1
                    </li>
                    <li className={commonStyles}>
                        Пункт 2
                    </li>
                    <li className={commonStyles}>
                        Пункт 3
                    </li>
                </ul>
            </div>
        }
      </div>

    </>
  );
}