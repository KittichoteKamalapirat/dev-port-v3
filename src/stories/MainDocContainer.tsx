import { ComponentProps } from "react";
import { cn } from "../lib/cn";

export type MainDocContainerProps = ComponentProps<"main">;

const MainDocContainer = ({
  className,
  ...restProps
}: MainDocContainerProps) => {
  return (
    <div className="p-4 md:p-8">
      <main
        {...restProps}
        className={cn("space-y-32 mx-auto max-w-screen-md", className)}
      />
    </div>
  );
};

export default MainDocContainer;
