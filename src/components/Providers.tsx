import React, { ReactNode } from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
