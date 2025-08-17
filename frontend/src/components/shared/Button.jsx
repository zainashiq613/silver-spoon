function Button({ text, className, icon, position, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary flex gap-2 items-center hover:bg-secondary px-5 py-2 rounded-3xl text-white text-base cursor-pointer pointer-events-auto relative z-10`}
    >
      {position === 'left' && <span>{icon}</span>}
      {text}
      {position === 'right' && <span>{icon}</span>}
    </button>
  );
}

export default Button;
