import { HTMLAttributes } from "react";
import { cn } from "../../utils";

export default function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-[36px] font-normal leading-[34px] lg:text-[96px] lg:leading-[32.143px] lg:font-medium text-black",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
