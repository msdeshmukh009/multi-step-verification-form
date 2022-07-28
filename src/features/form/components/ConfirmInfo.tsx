import { Button, Container, Col, Row } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { incrementStage, decrementStage } from "../formSlice";

const ConfirmInfo = () => {
  const { name, email, phone, city, state, country, hobby, otherInfo } = useAppSelector(
    state => state.form
  );
  const dispatch = useAppDispatch();

  return (
    <Container className="d-flex gap-4 flex-column">
      <Row className="d-flex gap-4 mt-2 justify-content-center">
        <h3 className="text-center">Login Info</h3>
        <Row>
          <span className="fw-bold">Name:</span>
          <span>{name}</span>
        </Row>
        <Row>
          <span className="fw-bold">Email:</span>
          <span>{email}</span>
        </Row>
        <Row>
          <span className="fw-bold">Phone:</span>
          <span>{phone}</span>
        </Row>
      </Row>

      <Row className="d-flex gap-4 mt-2 justify-content-center">
        <h3 className="text-center">Personal Info</h3>
        <Row>
          <span className="fw-bold">City:</span>
          <span>{city}</span>
        </Row>
        <Row>
          <span className="fw-bold">State:</span>
          <span>{state}</span>
        </Row>
        <Row>
          <span className="fw-bold">Country:</span>
          <span>{country}</span>
        </Row>
      </Row>

      <Row className="d-flex gap-4 mt-2 justify-content-center">
        <h3 className="text-center">Other Info</h3>
        <Row>
          <span className="fw-bold">Hobby:</span>
          <span>{hobby === "" ? "-" : hobby}</span>
        </Row>
        <Row>
          <span className="fw-bold">Other Info:</span>
          <span>{otherInfo === "" ? "-" : otherInfo}</span>
        </Row>
      </Row>

      <Container className="mt-2">
        <Row>
          <Col className="text-end">
            <Button color="primary" onClick={() => dispatch(decrementStage())}>
              Prev
            </Button>
          </Col>

          <Col>
            <Button color="primary" onClick={() => dispatch(incrementStage())}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { ConfirmInfo };
