import Image from "next/image";
import { Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen w-full">
      <div className="flex-none flex flex-col w-64 bg-sky-800 items-center">
        <p className="p-3 text-white">
          <span className="text-2xl font-bold">FF14 </span>Market Tracker
        </p>
        <p></p>
      </div>
      <div className="flex-auto bg-gray-100"></div>
    </main>
  );
}
