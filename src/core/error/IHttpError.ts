export interface IHttpError {
  readonly name: string;
  readonly type: string;
  readonly message: string;
  readonly code: number;
}
