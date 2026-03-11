import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CollaborationsPage() {
  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-black/60 p-6 shadow-neural">
      <h1 className="font-headline text-2xl text-text-white">
        Collaborations
      </h1>
      <p className="mt-2 text-sm text-subtext-gray">
        Workspaces for accepted proposals will appear here.
      </p>
      <Link href="/workspace" className="mt-4 inline-block">
        <Button size="sm">Open demo workspace</Button>
      </Link>
    </div>
  );
}

