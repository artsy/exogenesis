import styled, { css } from "styled-components/primitives";
import {
  color,
  fontSize,
  lineHeight,
  maxWidth,
  space,
  textAlign
} from "styled-system";

const fontFamily = {
  unica: {
    regular: "Unica77LL-Regular",
    italic: "Unica77LL-Italic",
    medium: "Unica77LL-Medium",
    mediumItalic: "Unica77LL-MediumItalic"
  },
  avantgarde: {
    regular: "AvantGardeGothicITC"
  },
  garamond: {
    regular: "AGaramondPro-Regular",
    italic: "AGaramondPro-Italic",
    semibold: "AGaramondPro-Semibold"
  }
};

export const Sans = styled.Text`
  font-family: ${fontFamily.unica.medium};
  ${color}
  ${fontSize}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${maxWidth}
`;

export const Serif = styled.Text`
  font-family: ${props =>
    props.type ? fontFamily.garamond[props.type] : fontFamily.garamond.regular};
  ${color}
  ${fontSize}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${maxWidth}
`;

export const Display = styled.Text`
  font-family: ${fontFamily.avantgarde.regular};
  ${color}
  ${fontSize}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${maxWidth}
`;
