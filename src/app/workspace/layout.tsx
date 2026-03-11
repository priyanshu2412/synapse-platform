import Link from "next/link";
import { Sidebar } from "@/components/workspace/Sidebar";

export default function WorkspaceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen bg-[#0B0F0C]"
      style={{ backgroundColor: "#0B0F0C" }}
    >
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
      <div className="fixed right-4 top-4 z-10">
        <Link
          href="/dashboard"
          className="rounded-lg border border-[#00FF9C]/30 bg-[#111814] px-3 py-1.5 text-xs text-[#00FF9C] transition hover:bg-[#00FF9C]/10"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
