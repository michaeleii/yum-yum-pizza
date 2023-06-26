import { Link } from "react-router-dom";

function Button({
  children,
  to,
  disabled,
  type,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: "small" | "primary" | "secondary" | "round";
  onClick?: () => void;
}) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ";
  const variants = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 px-2.5 py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={variants[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={variants[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={variants[type]} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
