import React from "react";
import { Font } from "expo";
import { ThemeProvider } from "shared/components/Theme";
import ArtistBlock from "shared/components/ArtistBlock";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "Unica77LL-Regular": require("./assets/fonts/Unica77LL-Regular.otf"),
      "Unica77LL-Italic": require("./assets/fonts/Unica77LL-Italic.otf"),
      "Unica77LL-Medium": require("./assets/fonts/Unica77LL-Medium.otf"),
      "Unica77LL-MediumItalic": require("./assets/fonts/Unica77LL-MediumItalic.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <ThemeProvider>
        <ArtistBlock />
      </ThemeProvider>
    ) : null;
  }
}
