import { Button, Form, FormGroup, Label, Input, Container, Col, Row } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateInfo, incrementStage, decrementStage } from "../formSlice";

const OtherInfoForm = () => {
  const { occupation, otherInfo } = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "occupation") {
      dispatch(updateInfo({ key: "occupation", value }));
    } else {
      dispatch(updateInfo({ key: "otherInfo", value }));
    }
  };

  return (
    <Form inline>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="occupation">
          Occupation
        </Label>
        <Input
          id="occupation"
          name="occupation"
          type="text"
          value={occupation}
          onChange={onChangeHandler}
        />
      </FormGroup>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="otherInfo">
          OtherInfo
        </Label>
        <Input
          id="otherInfo"
          name="otherInfo"
          type="textarea"
          value={otherInfo}
          onChange={onChangeHandler}
        />
      </FormGroup>

      <Container className="mt-2">
        <Row>
          <Col className="text-end">
            <Button color="primary" onClick={() => dispatch(decrementStage())}>
              Prev
            </Button>
          </Col>

          <Col>
            <Button color="primary" onClick={() => dispatch(incrementStage())}>
              Confirmation
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export { OtherInfoForm };
