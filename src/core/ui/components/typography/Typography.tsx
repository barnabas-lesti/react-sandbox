import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType } from "react";

interface VariantMap {
  h1: "h1";
  h2: "h2";
  h3: "h3";
  p: "p";
}

type Variant = keyof VariantMap;

type TypographyProps<V extends Variant> = ComponentPropsWithoutRef<VariantMap[V]> & {
  variant?: V;
};

export function Typography<V extends Variant>(props: TypographyProps<V>) {
  const { variant = "p", children, className, ...restProps } = props;
  const Tag = variant as ElementType;

  return (
    <Tag
      {...restProps}
      className={clsx(
        variant === "h1" && "font-bold text-3xl",
        variant === "h2" && "font-bold text-2xl",
        variant === "h3" && "font-bold text-xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
