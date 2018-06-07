import React from 'react'
import PropTypes from 'prop-types'
import webStyled from 'styled-components'
import styled from 'styled-components/primitives'
import { borders, themeGet } from 'styled-system'
import { Touchable, View } from 'react-primitives'
import { Display } from './elements/Typography'

const TabContainer = styled.View`
  padding-bottom: 13;
  margin-bottom: -1;
  margin-right: 20;
  ${borders};
`
const ActiveTabContainer = styled.View`
  padding-bottom: 13;
  margin-bottom: -1;
  margin-right: 20;
  border-bottom-width: 1;
  border-bottom-color: ${themeGet('colors.black60')};
`

const TabsContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: ${themeGet('colors.black10')};
  margin-bottom: 5;
`

const Tab = ({ children, ...props }) => (
  <Touchable {...props}>
    <TabContainer>
      <Display size="3t">{children}</Display>
    </TabContainer>
  </Touchable>
)

const ActiveTab = ({ children, ...props }) => (
  <Touchable {...props}>
    <ActiveTabContainer>
      <Display size="3t">{children}</Display>
    </ActiveTabContainer>
  </Touchable>
)

export default class Tabs extends React.Component {
  state = {
    activeTab: 0
  }
  setActiveTab = (activeTab) => {
    this.setState({ activeTab })
  }
  render() {
    return (
      <TabsContainer>
        {this.props.labels.map((label, index) => {
          return this.state.activeTab === index ? (
            <ActiveTab key={index}>{label}</ActiveTab>
          ) : (
            <Tab key={index} onPress={() => this.setActiveTab(index)}>
              {label}
            </Tab>
          )
        })}
      </TabsContainer>
    )
  }
}
