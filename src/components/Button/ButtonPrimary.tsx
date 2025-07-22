"use client";
import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonPrimary({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      style={{ borderColor: "#57803E" }}
      className={cn(
        "rounded-lg flex text-center flex-row justify-center w-auto bg-getStarted border-[1.5px] shadow-[inset_0_4px_6px_rgba(0,0,0,0.05),inset_0_-4px_6px_rgb(216,242,196)]",
        "text-base font-normal relative cursor-pointer leading-6",
        "hover:bg-opacity-80 hover:shadow-[0px_4px_4px_0px_rgba(15,64,12,0.30)] transition-all duration-200 ",
        className
      )}
    >
      {children}
    </button>
  );
}
