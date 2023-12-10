import React, { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/cn";

export type DocCellProps = {
  /**
   * By default, Cell renders a `<td>`.
   * When asChild is true, however, it merges its props with the child element's props
   * and renders the child element instead. This is similar to `as=""` prop.
   *
   * @example
   * <DocCell asChild>
   *   <th>Header</th>
   * </DocCell>
   *
   * @description In this example, it will result in a `<th>` instead of a `<td>`
   * with classNames and props from Cell
   */
  asChild?: boolean;
  defaultClassName?: string;
  className?: string;
  withPaddingLeft?: boolean;
  children?: ReactNode;
};

/**
 * This is mostly used in CustomDocCell that has a default className.
 * They wouldn't want to accept defaultClassName as a prop.
 */
export type DocCellPropsWithoutDefaultClassName = Omit<
  DocCellProps,
  "defaultClassName"
>;

const DocCell = ({
  asChild,
  children,
  defaultClassName,
  className,
  withPaddingLeft,
  ...restProps
}: DocCellProps) => {
  const Comp = asChild ? Slot : "td";
  return (
    <Comp
      {...restProps}
      className={cn(
        "py-2 text-left",
        { "pl-8": withPaddingLeft },
        defaultClassName,
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default DocCell;
