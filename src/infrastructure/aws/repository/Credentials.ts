import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"; // ES6 import
import Cookies from "js-cookie";
export class AWSCredentials {
  public static async getCredentials() {
    const credentials = fromCognitoIdentityPool({
      identityPoolId: process.env.NEXT_PUBLIC_IDP ?? "",
      logins: {
        [process.env.NEXT_PUBLIC_IDP_LOGINS ?? ""]:
          Cookies.get("IdToken") ?? "",
      },
      clientConfig: { region: "us-east-2" },
    });

    return await credentials()
  }
}
