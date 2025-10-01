import clsx from "clsx";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps) {
  const { className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={clsx(
        "p-4 bg-white border border-gray-200 rounded-lg shadow-sm",
        "dark:bg-gray-800 dark:border-gray-700",
        className,
      )}
    />
  );
}
