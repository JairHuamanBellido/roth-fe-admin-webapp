import { UserStatusType } from "@aws-sdk/client-cognito-identity-provider";


export interface IUser {
  username: string;
  name: string;
  email: string;
  status: UserStatusType ;
}
