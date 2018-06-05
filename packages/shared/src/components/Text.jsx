import React from "react";
import { Sans, Serif, Display } from "./Fonts";
import styled from "styled-components/primitives";

export const SansText = ({ size, children }) => (
  <Sans typeSet={`sans${size}`}>{children}</Sans>
);

export const SerifText = ({ size, children, ...props }) => (
  <Serif typeSet={`serif${size}`} {...props}>
    {children}
  </Serif>
);
