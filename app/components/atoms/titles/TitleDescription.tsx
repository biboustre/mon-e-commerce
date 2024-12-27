// "use client";

import React from "react";

interface TitleDescriptionProps {
  title: string;
}

export default function TitleDescription({ title }: TitleDescriptionProps) {
  return <h1 className="uppercase text-2xl font-bold">{title}</h1>;
}
