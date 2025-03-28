import React from "react";
import Image from "next/image";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return <Image src="/BB_logo_cream.svg" width="60" height="60" />;
};

export default Icon;
