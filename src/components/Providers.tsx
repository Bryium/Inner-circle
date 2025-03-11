import React, { ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastContainer position="bottom-right" hideProgressBar />
      {children}
    </HeroUIProvider>
  );
}
