import LogoImg from "@/assets/imgs/logo-leilao-legal.png";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  onLogout: () => void;
}

const NavBar: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-[#D7E7F2] border-b border-black-100 w-screen fixed top-0">
      <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 h-16">
        {/*<!-- lg+ -->*/}
        <nav className="flex items-center justify-center h-12 lg:h-16">
          <div className="w-[177px] h-[76px]">
            <a href="/" className="flex items-center">
              <Image
                src={LogoImg}
                alt="Logo Legal Image"
                onClick={onLogout}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;