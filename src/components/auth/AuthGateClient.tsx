"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDemoRole } from "@/lib/demoAuth";

export function AuthGateClient() {
  const router = useRouter();

  useEffect(() => {
    if (getDemoRole()) {
      router.replace("/dashboard");
    }
  }, [router]);

  return null;
}
