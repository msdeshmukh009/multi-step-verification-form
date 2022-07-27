import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateInfo, incrementStage, decrementStage } from "../formSlice";

const PersonalInfoForm = () => {
  const { city, state, country } = useAppSelector(state => state.form);
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

  return (
    <form>
      <input type="text" name="city" value={city} onChange={onChangeHandler} />
      <input type="text" name="state" value={state} onChange={onChangeHandler} />
      <input type="text" name="country" value={country} onChange={onChangeHandler} />
      <div>
        <button onClick={() => dispatch(decrementStage())}>Prev</button>
        <button
          disabled={city === "" || state === "" || country === ""}
          onClick={() => dispatch(incrementStage())}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export { PersonalInfoForm };
