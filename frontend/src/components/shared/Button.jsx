 
function Button({
  text,
  type = "button",
  variant = "default",
  icon,
  position,
  onClick,
}) {
  const baseClasses =
    "flex items-center gap-2 rounded-3xl px-6 py-2 border transition-colors duration-200";

  const variantClasses =
    variant === "active"
      ? "bg-black border-primary text-white"
      : "bg-transparent border border-gray-400 text-black hover:bg-gray-100";

  return (
    <button
      type={type}  
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} pointer-events-auto relative z-10`}
    >
      {position === "left" && <span>{icon}</span>}
      {text}
      {position === "right" && <span>{icon}</span>}
    </button>
  );
}

export default Button;
