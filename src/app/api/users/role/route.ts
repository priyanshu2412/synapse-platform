import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const session = await getServerSession(authConfig);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as
    | { role?: "INDUSTRY" | "INDIVIDUAL" }
    | null;
  const role = body?.role;
  if (!role) {
    return NextResponse.json({ error: "Missing role" }, { status: 400 });
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { role }
  });

  return NextResponse.json({ ok: true });
}

