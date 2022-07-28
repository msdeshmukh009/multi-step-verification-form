import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Container,
  Col,
  Row,
} from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateInfo, incrementStage, decrementStage } from "../formSlice";

const PersonalInfoForm = () => {
  const { city, state, country } = useAppSelector(state => state.form);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "city") {
      dispatch(updateInfo({ key: "city", value }));
    } else if (name === "state") {
      dispatch(updateInfo({ key: "state", value }));
    } else {
      dispatch(updateInfo({ key: "country", value }));
    }
  };

  const nextStage = () => {
    setSubmitted(true);
    if (city === "" || state === "" || country === "") {
      return;
    }
    dispatch(incrementStage());
  };

  return (
    <Form inline>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="city">
          City
        </Label>
        <Input
          required
          id="city"
          name="city"
          invalid={city === "" && submitted}
          placeholder="Mumbai"
          type="text"
          value={city}
          onChange={onChangeHandler}
        />
        <FormFeedback>City name can not be empty</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="state">
          State
        </Label>
        <Input
          required
          id="state"
          name="state"
          invalid={state === "" && submitted}
          placeholder="Maharashtra"
          type="text"
          value={state}
          onChange={onChangeHandler}
        />
        <FormFeedback>State name can not be empty</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="country">
          Country
        </Label>
        <Input
          required
          id="country"
          name="country"
          invalid={country === "" && submitted}
          placeholder="India"
          type="text"
          value={country}
          onChange={onChangeHandler}
        />
        <FormFeedback>Country name can not be empty</FormFeedback>
      </FormGroup>

      <Container className="mt-2">
        <Row>
          <Col className="text-end">
            <Button color="primary" onClick={() => dispatch(decrementStage())}>
              Prev
            </Button>
          </Col>

          <Col>
            <Button color="primary" onClick={nextStage}>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export { PersonalInfoForm };
