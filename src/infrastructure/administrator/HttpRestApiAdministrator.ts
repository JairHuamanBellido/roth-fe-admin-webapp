import { httpClient } from "@/src/core/HttpClient";
import { IAuthenticationAdministrator } from "@/src/domain/interface/IAuthenticationAdministrator";

import { ICreateAdministrator } from "@/src/domain/interface/ICreateAdministrator";
import { HttpRestApiAuthenticationResponse } from "./interface/HttpRestApiAuthenticationResponse";
import { AxiosResponse } from "axios";

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
}
