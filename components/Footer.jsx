import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const icons = [
  {
    src: "/footer/1.svg",
    href: "",
  },
  {
    src: "/footer/2.svg",
    href: "",
  },
  {
    src: "/footer/3.svg",
    href: "",
  },
  {
    src: "/footer/4.svg",
    href: "",
  },
  {
    src: "/footer/5.svg",
    href: "",
  },
  {
    src: "/footer/6.svg",
    href: "",
  },
  {
    src: "/footer/7.svg",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#10112f] py-24'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row items-center gap-12 xl:justify-between'>
          {/* socials */}
          <div>socials</div>
          {/* logo */}
          <div>
            <Logo />
          </div>
          {/* copyright */}
          <p>&copy; 2024 Focus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer