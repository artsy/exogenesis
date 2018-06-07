import React from 'react'
import { color } from 'styled-system'
import { Display } from './elements/Typography'
import { styled } from './platform/primitives'
import { Theme } from './Theme'

// http://24ways.org/2010/calculating-color-contrast/
function getContrast(hex) {
  var r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? 'black' : 'white'
}
const visibleColor = (color) => getContrast(Theme.colors[color])

const Row = styled.View`
  display: flex;
  flex-direction: column;
`

const ColorBlock = styled.View`
  width: 100px;
  height: 100px;
  padding: 5px;
  ${color};
`

export default ({ name }) => (
  <ColorBlock bg={name}>
    <Row>
      <Display color={visibleColor(name)} size="4t">
        {name.toUpperCase()}
      </Display>
      <Display color={visibleColor(name)} size="4t">
        {Theme.colors[name]}
      </Display>
    </Row>
  </ColorBlock>
)
