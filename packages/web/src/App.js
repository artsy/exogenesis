import React, { Component } from "react";
import { ThemeProvider } from "shared/components/Theme";
import ArtistBlock from "shared/components/ArtistBlock";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ArtistBlock />
      </ThemeProvider>
    );
  }
}

export default App;
