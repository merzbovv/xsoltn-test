"use server";
import HeaderServer from "@/app/components/Header/HeaderServer";
import Main from "@/app/components/Main/Main";

export default async function Home(): Promise<React.JSX.Element>
{
  return (
    <>
      <HeaderServer/>
      <div className={"flex flex-col items-center"}>
        <Main/>
      </div>
    </>
  );
}
