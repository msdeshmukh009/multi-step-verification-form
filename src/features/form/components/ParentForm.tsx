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
    "Personal Info",
    "Other",
    "Confirm",
    "Thanks for the submission.",
  ];

  return (
    <main>
      <h1>{headings[stage]}</h1>
      {stage === 0 && <LoginInfoForm />}
      {stage === 1 && <PersonalInfoForm />}
      {stage === 2 && <OtherInfoForm />}
      {stage === 3 && <ConfirmInfo />}
      {stage === 4 && <SubmissionPage />}
    </main>
  );
};

export { ParentForm };
