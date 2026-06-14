const ratelimit = new Map<string, number[]>();

export const config = {
  matcher: "/(.*)",
};

export default async function middleware(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const windowMs = 10_000;
  const max = 30;

  const times = ratelimit.get(ip) || [];
  const recent = times.filter((t) => now - t < windowMs);

  if (recent.length >= max) {
    return new Response("Rate limit exceeded. Try again later.", {
      status: 429,
      headers: { "Retry-After": "10" },
    });
  }

  recent.push(now);
  ratelimit.set(ip, recent);
}
