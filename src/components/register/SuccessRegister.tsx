"use client";
import { Alert } from "antd";
import Link from "next/link";

export default function SuccessfullyRegister() {
  return (
    <div className="my-12">
      <Alert
        type="success"
        message="Congratulations"
        description="Your account has been successfully created!"
        showIcon
      />
      <div className="mt-2">
        <Link href={"/login"}>Go to Login</Link>
      </div>
    </div>
  );
}
