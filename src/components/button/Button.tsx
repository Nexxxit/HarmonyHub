type ButtonProps = (
  | { text: string; image?: never }
  | { image: string; text?: never }
) & {
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  text,
  image,
  onClick,
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick} role="button" aria-label={ariaLabel}>
      {text ? <span>{text}</span> : image ? <img src={image} /> : null}
    </button>
  );
}
