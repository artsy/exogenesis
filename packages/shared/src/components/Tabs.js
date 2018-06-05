import React from "react";
import PropTypes from "prop-types";
import { View } from "react-primitives";
import { Display } from "./Fonts";

const Tab = props => <Display {...props} />;
const ActiveTab = props => <Display {...props} />;

// labels
// onTabChanged
// activeTab

export default class Tabs extends React.Component {
  setActiveTab = activeTab => {
    this.setState({ activeTab });
  };
  render() {
    return (
      <View>
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
      </View>
    );
  }
}
