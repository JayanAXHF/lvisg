"use client";

import React from "react";
import { UnstyledButton } from "@mantine/core";
import Link from "next/link";
interface propTypes {
  onClick?: () => void;
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  dark?: boolean;
  link: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = (props: propTypes) => {
  const primary = (
    <span className="group relative inline-block focus:outline-none focus:ring">
      <span
        className={`absolute inset-0 translate-x-2 translate-y-2 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0 ${props.className}`}
      ></span>

      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
        {props.children}
      </span>
    </span>
  );

  const secondary = (
    <span className={`bg-secondary px-20 py-4 ${props.className}`}>
      {props.children}
    </span>
  );
  return (
    <UnstyledButton
      renderRoot={(renderProps) =>
        props.link ? (
          <Link href={props.href} target="_blank" {...renderProps} />
        ) : (
          <button></button>
        )
      }
    >
      {props.primary ? primary : secondary}
    </UnstyledButton>
  );
};

export default Button;
