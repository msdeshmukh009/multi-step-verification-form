import { Button } from "reactstrap";
import { useAppDispatch } from "../../../app/hooks";
import { reset } from "../formSlice";

const SubmissionPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="text-center mt-4">
      <Button color="primary" onClick={() => dispatch(reset())}>
        Give another response
      </Button>
    </div>
  );
};

export { SubmissionPage };
