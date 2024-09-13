"use client";

const ButtonTertiary = ({ btnText }) => {
  return (
    <button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[18px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group">
      <span className="relative text-white text-sm uppercase tracking-[1px]">{btnText}</span>
    </button>
  )
}

export default ButtonTertiary