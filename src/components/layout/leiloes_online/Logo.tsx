import Image from "next/image";
import LogoImg from "@/assets/imgs/logo-leilao-legal.png";
import React from "react";

interface HeaderProps {
  onLogout: () => void;
}

const Logo: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
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
  );
}

export default Logo;