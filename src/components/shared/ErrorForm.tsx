import { Alert } from "antd";

interface Props {
  message: string;
}
export default function ErrorForm({ message }: Props) {
  return (
    <div className="my-4">
      <Alert type="error" message={message} />
    </div>
  );
}
