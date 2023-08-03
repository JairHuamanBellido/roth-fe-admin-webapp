import { ICreateAdministrator } from "@/src/domain/interface/ICreateAdministrator";
import { HttpRestApiAdministrator } from "@/src/infrastructure/administrator/HttpRestApiAdministrator";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import SuccessfullyRegister from "./SuccessRegister";
import Link from "next/link";
import ErrorForm from "../shared/ErrorForm";
import { IHttpError } from "@/src/core/error/IHttpError";
import { AxiosError } from "axios";

export default function RegisterForm() {
  const [form] = Form.useForm();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation<
    any,
    AxiosError<IHttpError>,
    ICreateAdministrator
  >(
    ["register"],
    async (payload: ICreateAdministrator) =>
      await HttpRestApiAdministrator.create(payload)
  );

  if (isSuccess) {
    return <SuccessfullyRegister />;
  }

  return (
    <>
      <Form<ICreateAdministrator>
        style={{ marginTop: "4rem", width: 400 }}
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={(values) => {
          mutate(values);
        }}
      >
        <Form.Item<ICreateAdministrator>
          name="name"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Please enter a full name",
            },
          ]}
        >
          <Input placeholder="Full name" />
        </Form.Item>
        <Form.Item<ICreateAdministrator>
          name="email"
          label="Email address"
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

        <Form.Item<ICreateAdministrator>
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {isError && <ErrorForm message={error.response?.data.message ?? ""} />}
        <Form.Item style={{ marginTop: "32px" }}>
          <Button
            loading={isLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div>
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <span>
            <Link href={"/login"}>Sign In</Link>
          </span>
        </p>
      </div>
    </>
  );
}
