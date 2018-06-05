import React, { Component } from "react";
import AppShell from "shared/components/AppShell";
import ArtworkBrick from "shared/components/ArtworkBrick";
import "./index.css";

class App extends Component {
  render() {
    return (
      <AppShell>
        <ArtworkBrick />
      </AppShell>
    );
  }
}

export default App;
