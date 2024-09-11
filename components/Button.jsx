const Button = ({ btnText }) => {
  return (
    <button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent via-accent_secondary to-accent"></span>
      <span className="relative text-white text-sm uppercase tracking-[1px]">{btnText}</span>
    </button>
  )
}

export default Button