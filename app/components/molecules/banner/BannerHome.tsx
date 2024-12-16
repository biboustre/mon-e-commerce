import Image from "next/image";
import React from "react";

export default function BannerHome() {
  return (
    <section className=" w-full h-[calc(100vh-100px)] relative flex flex-col justify-center flex-grow">
      {/* Image pour les écrans de bureau */}
      <Image
        src="/images/parfum-banner-pc.jpg"
        alt="banner-home-desktop"
        layout="fill"
        objectFit="cover"
        className="hidden md:block h-full w-full absolute -z-10"
      />
      {/* Image pour les écrans mobiles */}
      <Image
        src="/images/parfum-banner-mobile.jpg"
        alt="banner-home-mobile"
        layout="fill"
        objectFit="cover"
        className="block md:hidden h-full w-full absolute -z-10"
      />

      <section className="flex flex-col items-center gap-10">
        <h1 className="text-3xl">PARFUMERIE</h1>
        <h2>VOTRE BOUTIQUE DE PARFUMS</h2>
        <button className="bg-yellow-700 ">Acheter</button>
      </section>
    </section>
  );
}
