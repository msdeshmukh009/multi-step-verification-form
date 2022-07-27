import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { incrementStage, decrementStage } from "../formSlice";

const ConfirmInfo = () => {
  const form = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  return (
    <div>
      {JSON.stringify(form)}
      <div>
        <button onClick={() => dispatch(decrementStage())}>Prev</button>
        <button onClick={() => dispatch(incrementStage())}>Submit</button>
      </div>
    </div>
  );
};

export { ConfirmInfo };
