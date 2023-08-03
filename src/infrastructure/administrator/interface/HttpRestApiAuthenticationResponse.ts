export interface HttpRestApiAuthenticationResponse {
    readonly AccessToken:string;
    readonly ExpiresIn:number;
    readonly IdToken: string;
    readonly RefreshToken:string;
    readonly TokenType:string; 
}