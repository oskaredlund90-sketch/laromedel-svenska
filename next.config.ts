import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old standalone routes → redirect to hogstadiet as default
      { source: "/grammatik", destination: "/hogstadiet/grammatik", permanent: true },
      { source: "/grammatik/:topic", destination: "/hogstadiet/grammatik/:topic", permanent: true },
      { source: "/skrivverkstad", destination: "/hogstadiet/skrivverkstad", permanent: true },
      { source: "/skrivverkstad/:template", destination: "/hogstadiet/skrivverkstad/:template", permanent: true },
      { source: "/ovningar", destination: "/hogstadiet/ovningar", permanent: true },
      { source: "/textbank", destination: "/hogstadiet/textbank", permanent: true },
      { source: "/textbank/:slug", destination: "/hogstadiet/textbank/:slug", permanent: true },
      { source: "/nationella-prov", destination: "/hogstadiet/nationella-prov", permanent: true },
      { source: "/nationella-prov/arskurs-3", destination: "/lagstadiet/nationella-prov", permanent: true },
      { source: "/nationella-prov/arskurs-6", destination: "/mellanstadiet/nationella-prov", permanent: true },
      { source: "/nationella-prov/arskurs-9", destination: "/hogstadiet/nationella-prov", permanent: true },
      { source: "/nationella-prov/gymnasiet", destination: "/gymnasiet/nationella-prov", permanent: true },
      { source: "/litteraturhistoria", destination: "/hogstadiet/litteraturhistoria", permanent: true },
      { source: "/litteraturtips", destination: "/hogstadiet/litteraturhistoria", permanent: true },
      { source: "/ai-labbet", destination: "/hogstadiet/ai-i-svenskan", permanent: true },
      { source: "/ai-labbet/:path*", destination: "/hogstadiet/ai-i-svenskan", permanent: true },
      { source: "/sva", destination: "/hogstadiet", permanent: true },
    ];
  },
};

export default nextConfig;
