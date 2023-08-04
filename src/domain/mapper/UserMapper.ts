import {
  UserStatusType,
  UserType,
} from "@aws-sdk/client-cognito-identity-provider";
import { IUser } from "../interface/IUsers";

export class UserMapper {
  public static toDomainEntity(cognitoUser: UserType): IUser {
    return {
      username: cognitoUser.Username ?? "",
      name:
        cognitoUser.Attributes?.find((val) => val.Name === "name")?.Value ?? "",
      email:
        cognitoUser.Attributes?.find((val) => val.Name === "email")?.Value ??
        "",
      status: cognitoUser.UserStatus as UserStatusType,
    };
  }

  public static toDomainEntities(cognitoUsers: UserType[]): IUser[] {
    return cognitoUsers.map((user) => this.toDomainEntity(user));
  }
}
