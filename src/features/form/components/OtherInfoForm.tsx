import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateInfo, incrementStage, decrementStage } from "../formSlice";

const OtherInfoForm = () => {
  const { hobby, otherInfo } = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "hobby") {
      dispatch(updateInfo({ key: "hobby", value }));
    } else {
      dispatch(updateInfo({ key: "otherInfo", value }));
    }
  };

  return (
    <form>
      <input type="text" name="hobby" value={hobby} onChange={onChangeHandler} />
      <input type="text" name="otherInfo" value={otherInfo} onChange={onChangeHandler} />
      <div>
        <button onClick={() => dispatch(decrementStage())}>Prev</button>
        <button onClick={() => dispatch(incrementStage())}>Confirmation</button>
      </div>
    </form>
  );
};

export { OtherInfoForm };
