import { ComponentProps } from "react";
import { cn } from "../lib/cn";

export type MainDocContainerProps = ComponentProps<"main">;

const MainDocContainer = ({
  className,
  ...restProps
}: MainDocContainerProps) => {
  return (
    <div className="py-8 px-6 md:py-20 md:px-10">
      <main
        {...restProps}
        className={cn("space-y-32 mx-auto max-w-screen-md", className)}
      />
    </div>
  );
};

export default MainDocContainer;
