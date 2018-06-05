import React from "react";
import { Sans, Serif, Display } from "./Fonts";
import styled from "styled-components/primitives";

export const SansText = ({ level, children }) => (
  <Sans typeSet={`sans${level}`}>{children}</Sans>
);

export const SerifText = ({ level, children, ...props }) => (
  <Serif typeSet={`serif${level}`} {...props}>
    {children}
  </Serif>
);
