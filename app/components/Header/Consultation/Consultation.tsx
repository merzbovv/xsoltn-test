"use client";
import {useState} from "react";
import {InputMask} from "@react-input/mask";

type SubmitDataType = {
  page: string,
  service: string,
  name: string,
  phone: string,
  university: string
}

export default function Consultation(): React.JSX.Element
{
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    university: ""
  });

  // Список услуг
  const services: string[] = ["Услуга 1", "Услуга 2", "Услуга 3"];

  // Обработчик изменения значений в форме
  function fnChangeValuesInForm(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void
  {
    event.stopPropagation();
    const {name, value} = event.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  }

  // Подтверждение отправки
  async function fnFormSubmit(event: React.MouseEvent<HTMLButtonElement>): Promise<void>
  {
    event.preventDefault();
    const obj: SubmitDataType = {
      page: "/",
      service: formData.service,
      name: formData.name,
      phone: formData.phone.replaceAll(/[-+() ]/g, ''),
      university: formData.university
    }
    const submitData: Response = await fetch("https://bigozo.ru/api/submit-main-application/",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        cache: "no-store",
        body: JSON.stringify(obj)
      }
    );
    if (submitData.status === 200)
    {
      const json: string = await submitData.json();
      console.log(json);
    }
  }

  return (
    <div className="flex justify-center items-center">
      {/* Кнопка для открытия модального окна */}
      <button
        onClick={() => setShowForm(true)}
        className={"bg-[#FFDE00] rounded-[8px] p-[16px] font-[500] leading-[19px] hover:bg-[#E5C909]"}>
        Проконсультироваться
      </button>

      {/* Модальное окно */}
      {showForm && (
        <>
          <div className={"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"}
               id="backgroundOverlay" onClick={() => setShowForm(false)}/>
          <form
            className={" flex flex-col border-4 p-[20px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] rounded-[10px]"}>
            {/* Поле "Услуга" */}
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 mb-2">
                Услуга
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={fnChangeValuesInForm}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Выберите услугу</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Поле "Имя" */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={fnChangeValuesInForm}
                className="w-full p-2 border rounded-lg"
                placeholder="Введите ваше имя"
              />
            </div>

            {/* Поле "Телефон" */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Телефон
              </label>
              <InputMask type={"tel"}
                         id="phone"
                         name="phone"
                         value={formData.phone}
                         onChange={fnChangeValuesInForm}
                         mask="+7 (___) ___-__-__" replacement={{_: /\d/}}
                         className="w-full p-2 border rounded-lg"
                         placeholder={"+7 (XXX)-XXX-XX-XX"}/>
            </div>

            {/* Поле "ВУЗ" */}
            <div className="mb-4">
              <label htmlFor="university" className="block text-gray-700 mb-2">
                ВУЗ
              </label>
              <input
                type="text"
                id="university"
                name="university"
                value={formData.university}
                onChange={fnChangeValuesInForm}
                className="w-full p-2 border rounded-lg"
                placeholder="Введите название ВУЗа"
              />
            </div>

            {/* Кнопка отправки формы */}
            <button
              onClick={fnFormSubmit}
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Отправить
            </button>
          </form>
        </>
      )
      }
    </div>
  );
}