import React, { useState } from "react";
import { Col, Card, Form, Row } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

const Controls = (props) => {
  const [value, setValue] = useState(7);
  const volumeControl = (e) => {
    let val = e.target.value;
    setValue(val);
    props.setVolume(val);
  };

  return (
    <>
      <Col lg={6} xs={12}>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <p className="pFont">Power</p>
              </Col>
              <Col>
                <Form>
                  <Form.Check
                    type="switch"
                    id="power-switch"
                    variant="warning"
                    onChange={props.onSwitch}
                    checked={props.power}
                  />
                </Form>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <div id="display">
              <p>{props.display}</p>
            </div>
            <Form>
              <RangeSlider
                value={value}
                max={10}
                onChange={volumeControl}
                disabled={props.power ? false : true}
              />
            </Form>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <p className="pFont">Bank 1</p>
              </Col>
              <Col>
                <Form>
                  <Form.Check
                    type="switch"
                    id="bank-switch"
                    variant="warning"
                    onChange={props.switchBanks}
                    checked={!props.bankUno}
                    disabled={props.power ? false : true}
                  />
                </Form>
              </Col>
              <Col>
              <p className="pFont">Bank 2</p>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Controls;
