/*
* 只保存vmess network-ws
*/

function filter(proxies) {
  return proxies.map(p => p.network === "ws");
}