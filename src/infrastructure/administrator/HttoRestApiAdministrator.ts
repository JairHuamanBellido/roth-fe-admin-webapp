import { httpClient } from "@/src/core/HttpClient";

import { ICreateAdministrator } from "@/src/domain/interface/ICreateAdministrator";

export class HttoRestApiAdministrator {
  public static async create(payload: ICreateAdministrator) {
    return await httpClient.post<ICreateAdministrator, any>("/signup", payload);
  }
}
