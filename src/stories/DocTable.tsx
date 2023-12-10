import { ComponentPropsWithoutRef, ReactNode } from "react";

import DocCell from "./DocCell";
import { cn } from "../lib/cn";

export const DefaultDocTableHeader = () => {
  return (
    <tr>
      <DocCell asChild>
        <th>Class Name</th>
      </DocCell>
      <DocCell withPaddingLeft asChild>
        <th>Preview</th>
      </DocCell>
    </tr>
  );
};

export type DocTableProps = Omit<
  ComponentPropsWithoutRef<"table">,
  "children"
> & {
  header?: ReactNode;
  body?: ReactNode;
};

const DocTable = ({
  className,
  header = <DefaultDocTableHeader />,
  body,
  ...restProps
}: DocTableProps) => {
  return (
    <table {...restProps} className={cn("w-full", className)}>
      {Boolean(header) && <thead>{header}</thead>}
      <tbody>{body}</tbody>
    </table>
  );
};

export default DocTable;
