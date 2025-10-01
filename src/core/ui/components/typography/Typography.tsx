import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType } from "react";

interface VariantMap {
  h1: "h1";
  p: "p";
}

type Variant = keyof VariantMap;

type TypographyProps<V extends Variant> = ComponentPropsWithoutRef<VariantMap[V]> & {
  variant: V;
};

export function Typography<V extends Variant>(props: TypographyProps<V>) {
  const { variant, children, className, ...restProps } = props;
  const Tag = variant as ElementType;

  return (
    <Tag
      {...restProps}
      className={clsx(variant === "h1" && "font-bold text-3xl", className)}
    >
      {children}
    </Tag>
  );
}
