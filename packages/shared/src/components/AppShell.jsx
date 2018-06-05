import React from "react";
import styled from "styled-components/primitives";
import { ThemeProvider } from "./Theme";
import { isWeb } from "../context";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default class AppShell extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Container>{this.props.children}</Container>
      </ThemeProvider>
    );
  }
}
