import { useAppDispatch } from "../../../app/hooks";
import { reset } from "../formSlice";

const SubmissionPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(reset())}>Give another response</button>
    </>
  );
};

export { SubmissionPage };
