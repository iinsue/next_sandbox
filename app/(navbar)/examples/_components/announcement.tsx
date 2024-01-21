import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export const Announcement = () => {
  return (
    <Link href="">
      <Separator />
      <span>New components and more.</span>
    </Link>
  );
};
