import Link from "next/link";
import { PropsWithChildren } from "react";

type LinkButtonProps = {
  href: string;
  id: string;
};
export const LinkButton = ({
  children,
  href,
  id,
}: PropsWithChildren<LinkButtonProps>) => (
  <Link
    href={href}
    className="text-3xl cursor-pointer text-[hsl(209,18%,30%)] outline-0 border-0 hover:text-[hsl(210,24%,16%)]"
    data-test-id={id}
  >
    {children}
  </Link>
);
