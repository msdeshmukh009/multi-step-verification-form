import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  stage: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  hobby: string;
  otherInfo: string;
};

type PayloadType = {
  key: "name" | "email" | "phone" | "city" | "state" | "country" | "hobby" | "otherInfo";
  value: string;
};

const initialState: FormState = {
  stage: 0,
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  hobby: "",
  otherInfo: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateInfo: (state, action: PayloadAction<PayloadType>) => {
      state[action.payload.key] = action.payload.value;
    },
    incrementStage: state => {
      state.stage++;
    },
    decrementStage: state => {
      state.stage--;
    },
    reset: state => {
      state.stage = 0;
      state.name = "";
      state.email = "";
      state.phone = "";
      state.city = "";
      state.country = "";
      state.state = "";
      state.hobby = "";
      state.otherInfo = "";
    },
  },
});

export const { updateInfo, incrementStage, decrementStage, reset } = formSlice.actions;

export default formSlice.reducer;
