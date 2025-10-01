import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// https://flowbite.com/docs/components/buttons/
export function Button(props: ButtonProps) {
  const { className, type = "button", children, ...restProps } = props;
  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg",
        "text-sm px-5 p-2 focus:outline-none cursor-pointer",
        "dark:focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
        className,
      )}
    >
      {children}
    </button>
  );
}
