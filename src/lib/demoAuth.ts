export type DemoRole = "INDUSTRY" | "INDIVIDUAL";

const ROLE_COOKIE = "synapse_role";
const NAME_COOKIE = "synapse_name";

export function setDemoSession(role: DemoRole, name: string) {
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  document.cookie = `${ROLE_COOKIE}=${encodeURIComponent(role)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  document.cookie = `${NAME_COOKIE}=${encodeURIComponent(name)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function clearDemoSession() {
  document.cookie = `${ROLE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
  document.cookie = `${NAME_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function getCookieValue(cookieName: string): string | null {
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${cookieName}=`));
  if (!match) return null;
  return decodeURIComponent(match.split("=").slice(1).join("="));
}

export function getDemoRole(): DemoRole | null {
  const v = getCookieValue(ROLE_COOKIE);
  if (v === "INDUSTRY" || v === "INDIVIDUAL") return v;
  return null;
}

export function getDemoName(): string | null {
  return getCookieValue(NAME_COOKIE);
}

