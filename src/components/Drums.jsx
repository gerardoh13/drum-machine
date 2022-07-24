import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Drums = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  const handleKeyPress = (e) => {
    let validKeys = props.bank.map((x) => x.keyCode);
    let trigger = e.key.toUpperCase();
    let display = props.bank.find((x) => x.keyCode === e.keyCode);
    if (validKeys.includes(e.keyCode)) {
      display = display.id;
      play(trigger, display);
    }
  };

  const play = (trigger, display) => {
    const sound = document.getElementById(trigger);
    sound.currentTime = 0;
    sound.volume = props.volume / 10;
    sound.play();
    props.updateDisplay(display);
  };
  let mappedBank = props.bank.map((pad, i) => {
    return (
      <Col lg={4} xs={4} className="pad" key={i}>
        <Button
          id={pad.id}
          className="drum-pad"
          variant="secondary"
          onClick={() => play(pad.keyTrigger, pad.id)}
          disabled={props.power ? false : true}
        >
          {pad.keyTrigger}
          <audio className="clip" id={pad.keyTrigger} src={pad.url} />
        </Button>
      </Col>
    );
  });
  return (
    <Col lg={6} xs={12} className="padCol">
      <Row className="padRow">{mappedBank}</Row>
    </Col>
  );
};
export default Drums;
