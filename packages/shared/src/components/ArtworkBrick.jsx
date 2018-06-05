import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/primitives";
import { View, Image } from "react-primitives";
import { SansText, SerifText } from "./Text";

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
        <SansText size="1">$2000,00</SansText>
        <SerifText size="2" type="semibold" color="black60">
          Artist Unknown
        </SerifText>
        <Row>
          <SerifText size="2" type="italic" color="black60">
            A Testable Image,
          </SerifText>
          <SerifText size="2" color="black60">
            {" "}
            2018
          </SerifText>
        </Row>
        <SerifText size="2" color="black60">
          Artsy
        </SerifText>
      </View>
    );
  }
}

ArtworkBrick.propTypes = {
  auction: PropTypes.bool
};
