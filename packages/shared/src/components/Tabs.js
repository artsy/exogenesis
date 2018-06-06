import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/primitives";
import { View } from "react-primitives";
import { Display } from "./elements/Typography";

const Tab = props => <Display size="3" {...props} />;
const ActiveTab = props => <Display size="3" {...props} />;

// labels
// onTabChanged
// activeTab

const TabsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export default class Tabs extends React.Component {
  setActiveTab = activeTab => {
    this.setState({ activeTab });
  };
  render() {
    return (
      <TabsContainer>
        {this.props.labels.map(
          (label, index) =>
            this.activeTab === index ? (
              <ActiveTab key={index}>{label}</ActiveTab>
            ) : (
              <Tab key={index} onClick={() => this.setActiveTab(index)}>
                {label}
              </Tab>
            )
        )}
      </TabsContainer>
    );
  }
}
