import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={`
      border-2
      border-gray-900
      bg-blue-600
      rounded
      p-2
      w-full
      text-white
      font-bold
      hover:bg-blue-500focus:bg-blue-400
      transition-colors
      disabled:bg-gray-500
      ${className}`}
      {...props}
      ref={ref}
    >
        {children}
    </button>
  );
});
