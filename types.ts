
export type Authenticated = {
  db: string;
  login?: string;
  password: string;
  uid?:number;
  memberId?:number,
  fields?:string[],
  model?:string,
};

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: { userId: string };
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
};

