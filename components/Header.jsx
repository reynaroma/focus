import ButtonSecondary from "./ButtonSecondary"

const Header = () => {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center justify-between">
      {/* btn */}
      <ButtonSecondary btnText={"Get started"}/>
    </header>
  )
}

export default Header