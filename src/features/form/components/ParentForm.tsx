import { Container } from "reactstrap";
import { useAppSelector } from "../../../app/hooks";
import { ConfirmInfo } from "./ConfirmInfo";
import { LoginInfoForm } from "./LoginInfoForm";
import { OtherInfoForm } from "./OtherInfoForm";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { SubmissionPage } from "./SubmissionPage";

const ParentForm = () => {
  const { stage } = useAppSelector(state => state.form);

  const headings = [
    "Login Info",
    "Address Info",
    "Other",
    "Confirmation",
    "Thanks for the submission.",
  ];

  return (
    <main style={{ maxWidth: "750px" }} className="min-vh-100 m-auto d-flex">
      <Container className="container-sm m-auto shadow p-4 rounded">
        <h1 className="text-center">{headings[stage]}</h1>
        {stage === 0 && <LoginInfoForm />}
        {stage === 1 && <PersonalInfoForm />}
        {stage === 2 && <OtherInfoForm />}
        {stage === 3 && <ConfirmInfo />}
        {stage === 4 && <SubmissionPage />}
      </Container>
    </main>
  );
};

export { ParentForm };
