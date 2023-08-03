"use client";
import React from "react";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Montserrat",
              colorPrimary: "#262bbe",
            },
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ConfigProvider>
      </QueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
