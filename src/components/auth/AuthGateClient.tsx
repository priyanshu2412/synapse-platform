"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export function AuthGateClient() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/dashboard";
    }
  }, [status]);

  return null;
}

