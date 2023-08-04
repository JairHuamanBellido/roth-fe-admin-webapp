import { UserStatusType } from "@aws-sdk/client-cognito-identity-provider";

const UserStatusColors = new Map<keyof typeof UserStatusType, string>([
  ["UNCONFIRMED", "default"],
  ["CONFIRMED", "green"],
]);

export { UserStatusColors };
