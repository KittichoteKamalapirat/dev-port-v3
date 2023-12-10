import clsx from "clsx";

interface Props {
  className?: string;
}

export const Divider = ({ className }: Props) => {
  return (
    <div
      className={clsx("border-t-4 border-solid border-neutral-400", className)}
    />
  );
};
export default Divider;
