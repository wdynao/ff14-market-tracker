import Image from "next/image";
import { Button } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">FF14 Market Tracler</p>
        <p>FF14のマーケット情報を追跡してくれるアプリです。</p>
      </div>
      <Button size="xl" onClick={() => router.push("/app")}>
        アプリに移動
        <IconChevronRight />
      </Button>
      <p>Powered by WDY</p>
    </main>
  );
}
