import clsx from "clsx";

interface Props {
  className?: string;
}

export const Divider = ({ className }: Props) => {
  return (
    <div
      className={clsx("border-t-2 border-solid border-neutral-100", className)}
    />
  );
};
export default Divider;
