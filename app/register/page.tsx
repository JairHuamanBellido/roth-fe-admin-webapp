"use client";
import RegisterForm from "@/src/components/register/Form";
import { theme, Col, Row } from "antd";

import Image from "next/image";

const { useToken } = theme;

const IMAGE_URL =
  "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2205&q=80";
export default function Login() {
  const { token } = useToken();

  return (
    <main className="w-screen h-screen">
      <Row align={"middle"} className="w-full h-screen">
        <Col span={6} className="bg-gray-100 relative h-full">
          <Image objectFit="cover" src={IMAGE_URL} alt="Image" fill={true} />
        </Col>
        <Col span={18}>
          <div className="relative w-[600px] p-24 h-auto flex flex-col items-center">
            <div className="relative w-full">
              <h1
                style={{ color: token.colorPrimary }}
                className="text-4xl font-bold"
              >
                Sign Up to Roth
              </h1>
              <p className="text-gray-500 mt-2 text-base">
                Let's acces to our administrator dashboard
              </p>

              <RegisterForm />
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
