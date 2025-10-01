import clsx from "clsx";
import { NavLink, type NavLinkProps } from "react-router";

type LinkProps = NavLinkProps;

export function Link(props: LinkProps) {
  const { className, ...restProps } = props;
  return (
    <NavLink
      {...restProps}
      className={clsx("font-medium text-blue-600 dark:text-blue-500 hover:underline", className)}
    />
  );
}
