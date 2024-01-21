import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";

const PageHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <section {...props}>{children}</section>;
};

export { PageHeader };
