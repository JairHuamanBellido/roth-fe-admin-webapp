"use client";
import AuthForm from "@/src/components/auth/Form";
import { theme, Button, Checkbox, Col, Form, Input, Row } from "antd";

import Image from "next/image";
import Link from "next/link";

type FieldType = {
  username?: string;
  password?: string;
};
const { useToken } = theme;

const IMAGE_URL =
  "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2205&q=80";
export default function Login() {
  const { token } = useToken();

  const [form] = Form.useForm();
  return (
    <main className="w-screen h-screen">
      <Row className="w-full h-screen">
        <Col span={12}>
          <div className="w-full h-full relative flex flex-col items-center justify-center">
            <div className="relative w-[500px]">
              <h1
                style={{ color: token.colorPrimary }}
                className="text-4xl font-bold"
              >
                ROTH
              </h1>
              <p className="text-gray-500 mt-2 text-base">
                Sign in by entering to the administrator{" "}
              </p>

              <AuthForm />
              <div>
                <p className="text-gray-500 text-sm">
                  Don't have an account?{" "}
                  <span>
                    <Link href={"/register"}>Sign Up</Link>
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12} className="bg-gray-100 relative">
          <Image src={IMAGE_URL} alt="Image" fill={true} />
        </Col>
      </Row>
    </main>
  );
}
