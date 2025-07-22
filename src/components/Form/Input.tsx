"use client";

import type React from "react";
import { cn } from "@/utils/cn";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

export function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className="relative group">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-green-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={cn(
          "w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all duration-200 shadow-sm",
          disabled && "bg-gray-50 cursor-not-allowed"
        )}
      />
    </div>
  );
}
