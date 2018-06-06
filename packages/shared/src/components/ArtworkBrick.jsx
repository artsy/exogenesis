import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/primitives";
import { View, Image } from "react-primitives";
import { Sans, Serif } from "./elements/Typography";

const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export default class ArtworkBrick extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 175, height: 262, marginBottom: 10 }}
          source={{ uri: "https://picsum.photos/200/300/?random" }}
        />
        <Sans size="1" weight="medium">
          $2000,00
        </Sans>
        <Serif size="2" weight="semibold" color="black60">
          Artist Unknown
        </Serif>
        <Row>
          <Serif size="2" color="black60" italic>
            A Testable Image,
          </Serif>
          <Serif size="2" color="black60">
            {" "}
            2018
          </Serif>
        </Row>
        <Serif size="2" color="black60">
          Artsy
        </Serif>
      </View>
    );
  }
}

ArtworkBrick.propTypes = {
  auction: PropTypes.bool
};
