import React from "react";
import { Sans } from "./Text";
import styled from "styled-components/primitives";

const Container = styled.View``;

export default class ArtistBlock extends React.Component {
  render() {
    return (
      <Container>
        <Sans>Test 123</Sans>
      </Container>
    );
  }
}
