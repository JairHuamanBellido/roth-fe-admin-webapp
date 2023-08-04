import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <h1 className="font-bold  text-2xl mb-12 whitespace-normal">Roth</h1>
      <ul>
        <li>
          <Link className="text-gray-400" href={"/dashboard/users"}>
            Users
          </Link>
        </li>
      </ul>
    </>
  );
}
