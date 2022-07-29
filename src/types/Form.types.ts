type FormStateType = {
  stage: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  otherInfo: string;
};

type PayloadType = {
  key: "name" | "email" | "phone" | "city" | "state" | "country" | "occupation" | "otherInfo";
  value: string;
};

export type { FormStateType, PayloadType };
