import { HttpRestApiAdministrator } from "@/src/infrastructure/administrator/HttpRestApiAdministrator";
import { UserMapper } from "../mapper/UserMapper";

export class GetUsersUseCase {
  public static async execute() {
    const cognitoUsers = await HttpRestApiAdministrator.listUsers();
    return UserMapper.toDomainEntities(cognitoUsers ?? []);
  }
}
