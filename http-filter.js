function filter(proxies) {
  return proxies.map(p => p.network === "ws");
}