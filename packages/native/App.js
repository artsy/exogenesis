import React from "react";
import { Font } from "expo";
import AppShell from "shared/lib/components/AppShell";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "Unica77LL-Regular": require("shared/assets/fonts/Unica77LL-Regular.otf"),
      "Unica77LL-Italic": require("shared/assets/fonts/Unica77LL-Italic.otf"),
      "Unica77LL-Medium": require("shared/assets/fonts/Unica77LL-Medium.otf"),
      "Unica77LL-MediumItalic": require("shared/assets/fonts/Unica77LL-MediumItalic.otf"),
      "AGaramondPro-Bold": require("shared/assets/fonts/AGaramondPro-Bold.otf"),
      "AGaramondPro-BoldItalic": require("shared/assets/fonts/AGaramondPro-BoldItalic.otf"),
      "AGaramondPro-Italic": require("shared/assets/fonts/AGaramondPro-Italic.otf"),
      "AGaramondPro-Regular": require("shared/assets/fonts/AGaramondPro-Regular.otf"),
      "AGaramondPro-Semibold": require("shared/assets/fonts/AGaramondPro-Semibold.otf"),
      AvantGardeGothicITC: require("shared/assets/fonts/AVG65lig.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <AppShell /> : null;
  }
}
