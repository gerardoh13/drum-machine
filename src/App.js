import "./App.css";
import Drums from "./components/Drums";
import Controls from "./components/Controls";
import { Row, Card } from "react-bootstrap";
import { bankOne, bankTwo } from "./components/banks";
import React from "react";

class App extends React.Component {
  state = {
    currentBank: bankOne,
    display: "Drum Machine",
    power: true,
    bankUno: true,
    volume: 7,
  };

  switchBanks = () => {
    if (this.state.currentBank === bankOne) {
      this.setState({
        currentBank: bankTwo,
        display: "Smooth Piano Kit",
        bankUno: false,
      });
    } else {
      this.setState({
        currentBank: bankOne,
        display: "Heater Kit",
        bankUno: true,
      });
    }
  };

  updateDisplay = (str) => {
    this.setState({
      display: str.replace(/-/g, " "),
    });
  };

  onSwitch = () => {
    if (this.state.power) {
      this.setState({
        power: false,
    });
    this.updateDisplay('Power Off')
    } else {
      this.setState({
        power: true,
    });
    this.updateDisplay('Drum Machine')
    }
  };

  setVolume = (val) => {
    this.setState({
      volume: val,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card id="drum-machine">
            <Row>
              <Drums
                bank={this.state.currentBank}
                power={this.state.power}
                volume={this.state.volume}
                updateDisplay={this.updateDisplay}
              />
              <Controls
                switchBanks={this.switchBanks}
                display={this.state.display}
                power={this.state.power}
                onSwitch={this.onSwitch}
                bankUno={this.state.bankUno}
                volume={this.state.volume}
                setVolume={this.setVolume}
              />
            </Row>
          </Card>
          <p className="pFont">Drum Machine by</p>
          <p className="pFont">gerardoh13</p>
        </header>
      </div>
    );
  }
}

export default App;
