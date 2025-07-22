"use client";

import type React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  disabled?: boolean;
}

export function Select({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
}: SelectProps) {
  return (
    <div className="relative group">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200 group-focus-within:text-green-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={cn(
          "w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none transition-all duration-200 shadow-sm appearance-none pr-10 bg-white",
          disabled && "bg-gray-50 cursor-not-allowed"
        )}
      >
        <option value="">Select</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-6">
        <ChevronRight className="h-4 w-4 rotate-90" />
      </div>
    </div>
  );
}
