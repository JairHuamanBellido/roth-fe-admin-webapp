import Sidebar from "@/src/components/dashboard/sidebard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen overflow-y-hidden relative">
      <div className="flex h-full">
        <div className="h-full bg-gray-50 w-[240px] relative p-8">
          <Sidebar />
        </div>
        <div
          style={{ width: "calc(100% - 240px)" }}
          className="overflow-auto p-8"
        >
          {children}
        </div>
      </div>
    </main>
  );
}
