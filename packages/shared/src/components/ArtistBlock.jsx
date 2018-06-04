import React from "react";
import { Sans1 } from "./Text";
import styled from "styled-components/primitives";

const Container = styled.View``;

export default class ArtistBlock extends React.Component {
  render() {
    return (
      <Container>
        <Sans1>Test 123</Sans1>
      </Container>
    );
  }
}
