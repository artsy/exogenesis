import React from 'react'
import styled from 'styled-components/primitives'
import { color, maxWidth, space, textAlign, themeGet } from 'styled-system'

const dynamicTheme = (callback) => (props) =>
  themeGet.apply(null, [].concat(callback(props)))(props)

const selectFontType = ({ weight = 'regular', italic }) => {
  if (italic) {
    if (weight === 'medium') return 'mediumItalic'
    return 'italic'
  }
  return weight
}

const fontPath = (props) => [
  `fontFamily.${props.family}.${selectFontType(props)}`,
  'regular' // fallback
]

const fontSize = (props) => `typeSizes.${props.typeSize}.fontSize`

const lineHeight = (props) => `typeSizes.${props.typeSize}.lineHeight`

const StyledText = styled.Text`
  font-family: ${dynamicTheme(fontPath)};
  font-size: ${dynamicTheme(fontSize)};
  line-height: ${dynamicTheme(lineHeight)};
  ${color};
  ${space};
  ${textAlign};
  ${maxWidth};
`

export const Sans = (props) => (
  <StyledText family="unica" typeSize={`sans${props.size || 4}`} {...props} />
)
export const Serif = (props) => (
  <StyledText
    family="garamond"
    typeSize={`serif${props.size || 4}`}
    {...props}
  />
)
export const Display = (props) => (
  <StyledText
    family="avantgarde"
    typeSize={`display${props.size || 2}`}
    {...props}
  />
)
