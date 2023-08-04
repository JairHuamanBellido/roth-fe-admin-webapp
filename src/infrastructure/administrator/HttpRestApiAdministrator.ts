import { httpClient } from "@/src/core/HttpClient";
import { IAuthenticationAdministrator } from "@/src/domain/interface/IAuthenticationAdministrator";

import { ICreateAdministrator } from "@/src/domain/interface/ICreateAdministrator";
import { HttpRestApiAuthenticationResponse } from "./interface/HttpRestApiAuthenticationResponse";
import { AxiosResponse } from "axios";
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { AWSCredentials } from "../aws/repository/Credentials";

export class HttpRestApiAdministrator {
  public static async create(payload: ICreateAdministrator) {
    return await httpClient.post<ICreateAdministrator, any>("/signup", payload);
  }
  public static async auth(payload: IAuthenticationAdministrator) {
    return await httpClient
      .post<
        IAuthenticationAdministrator,
        AxiosResponse<HttpRestApiAuthenticationResponse>
      >("/auth", payload)
      .then((res) => res.data);
  }

  public static async listUsers() {
    const { accessKeyId, secretAccessKey, sessionToken } =
      await AWSCredentials.getCredentials();
    const cognito = new CognitoIdentityProviderClient({
      region: "us-east-2",
      credentials: {
        accessKeyId,
        secretAccessKey,
        sessionToken,
      },
    });

    const command = new ListUsersCommand({
      UserPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID ?? "",
    });

    const users = await cognito.send(command);
    return users.Users;
  }
}
