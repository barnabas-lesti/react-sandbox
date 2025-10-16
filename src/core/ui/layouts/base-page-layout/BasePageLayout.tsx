import type { HTMLAttributes } from "react";

import { Link } from "#core/ui/components/link/Link";
import { Typography } from "#core/ui/components/typography/Typography";

type BasePageLayoutProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  isHomePage?: boolean;
};

export function BasePageLayout(props: BasePageLayoutProps) {
  const { children, title, isHomePage, ...restProps } = props;
  return (
    <div
      {...restProps}
      className="flex flex-col gap-4 p-4"
    >
      <Typography variant="h1">{title}</Typography>
      {!isHomePage && <Link to="/">Back Home</Link>}
      {children}
    </div>
  );
}
