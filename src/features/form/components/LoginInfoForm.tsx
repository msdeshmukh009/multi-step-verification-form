import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { updateInfo, incrementStage, decrementStage } from "../formSlice";

const LoginInfoForm = () => {
  const { stage, name, email, phone } = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

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

  return (
    <form>
      <input type="text" name="name" value={name} onChange={onChangeHandler} />
      <input type="text" name="email" value={email} onChange={onChangeHandler} />
      <input type="text" name="phone" value={phone} onChange={onChangeHandler} />
      <div>
        <button disabled={stage === 0} onClick={() => dispatch(decrementStage())}>
          Prev
        </button>
        <button
          disabled={name === "" || email === "" || phone === ""}
          onClick={() => dispatch(incrementStage())}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export { LoginInfoForm };
