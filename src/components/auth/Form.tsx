import { IHttpError } from "@/src/core/error/IHttpError";
import { IAuthenticationAdministrator } from "@/src/domain/interface/IAuthenticationAdministrator";
import { HttpRestApiAdministrator } from "@/src/infrastructure/administrator/HttpRestApiAdministrator";
import { HttpRestApiAuthenticationResponse } from "@/src/infrastructure/administrator/interface/HttpRestApiAuthenticationResponse";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { AxiosError } from "axios";
import ErrorRegister from "../shared/ErrorForm";

export default function AuthForm() {
  const [form] = Form.useForm();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    HttpRestApiAuthenticationResponse,
    AxiosError<IHttpError>,
    IAuthenticationAdministrator
  >(
    ["auth"],
    async (payload: IAuthenticationAdministrator) =>
      await HttpRestApiAdministrator.auth(payload)
  );

  return (
    <>
      <Form<IAuthenticationAdministrator>
        style={{ marginTop: "4rem" }}
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={(values) => {
          mutate(values);
        }}
      >
        <Form.Item<IAuthenticationAdministrator>
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter a email address",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item<IAuthenticationAdministrator>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {isError && (
          <ErrorRegister message={error.response?.data.message ?? ""} />
        )}
        <Form.Item style={{ marginTop: "32px" }}>
          <Button
            loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
