export type Authenticated = {
  db: string;
  login?: string;
  password: string;
  uid?:number;
  memberId?:number,
  fields?:string[],
  model?:string,
};
