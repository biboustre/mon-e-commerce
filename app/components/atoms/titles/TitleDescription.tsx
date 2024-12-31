// "use client";

import React from "react";

interface TitleDescriptionProps {
  title: string;
  className?: string;
}

export default function TitleDescription({ title, className }: TitleDescriptionProps) {
  return <h1 className={`uppercase text-2xl font-bold ${className}`}>{title}</h1>;
}
