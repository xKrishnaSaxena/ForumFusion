"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProvideProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvideProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
