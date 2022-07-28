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

const LoginInfoForm = () => {
  const { stage, name, email, phone } = useAppSelector(state => state.form);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      dispatch(updateInfo({ key: "name", value }));
    } else if (name === "email") {
      dispatch(updateInfo({ key: "email", value }));
    } else {
      dispatch(updateInfo({ key: "phone", value }));
    }
  };

  const nextStage = () => {
    setSubmitted(true);
    if (name === "" || !email.match(mailFormat) || phone.length !== 10) {
      return;
    }
    dispatch(incrementStage());
  };

  return (
    <Form inline>
      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="name">
          Name
        </Label>
        <Input
          required
          id="name"
          name="name"
          invalid={name === "" && submitted}
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={onChangeHandler}
        />
        <FormFeedback>Name can not be empty</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="email">
          Email
        </Label>
        <Input
          required
          id="email"
          name="email"
          invalid={!email.match(mailFormat) && submitted}
          placeholder="johndoe@xyz.com"
          type="email"
          value={email}
          onChange={onChangeHandler}
        />
        <FormFeedback>Enter valid email</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-2 me-sm-2 mb-sm-0">
        <Label className="me-sm-2" for="phone">
          Phone
        </Label>
        <Input
          required
          id="phone"
          name="phone"
          invalid={phone.length !== 10 && submitted}
          placeholder="5689237415"
          type="text"
          value={phone}
          onChange={onChangeHandler}
        />
        <FormFeedback>Enter a valid phone number(10 digit).</FormFeedback>
      </FormGroup>

      <Container className="mt-2">
        <Row>
          <Col className="text-end">
            <Button
              color="primary"
              disabled={stage === 0}
              onClick={() => dispatch(decrementStage())}
            >
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

export { LoginInfoForm };
