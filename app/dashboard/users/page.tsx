"use client";

import type { ColumnsType } from "antd/es/table";
import { IUser } from "@/src/domain/interface/IUsers";
import { useQuery } from "@tanstack/react-query";
import { GetUsersUseCase } from "@/src/domain/use-case/GetUsersUseCase";
import { Spin, Table, Tag } from "antd";
import { UserStatusColors } from "@/src/domain/map/UserStatusColor";

const columns: ColumnsType<IUser> = [
  {
    title: "ID",
    key: "username",
    dataIndex: "username",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, record) => {
      return (
        <Tag color={UserStatusColors.get(record.status)}> {record.status} </Tag>
      );
    },
  },
];

export default function UsersPage() {
  const { isLoading, isSuccess, data } = useQuery(
    ["users"],
    async () => await GetUsersUseCase.execute()
  );

  if (isLoading) return <Spin />;
  return (
    <div>
      {isSuccess && (
        <Table rowKey={"username"} columns={columns} dataSource={data} />
      )}
    </div>
  );
}
