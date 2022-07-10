/**
 * 为 VMess WebSocket 节点修改混淆 host
 * 示例
 * #host=google.com
 */
function operator(proxies) {
    const { host } = $arguments;
    proxies.forEach(p => {
        if (p.type === 'vmess' && p.network === 'ws') {
            p["ws-opts"] = p["ws-opts"] || {};
            p["ws-opts"]["headers"] = p["ws-opts"]["headers"] || {};
            p["ws-opts"]["headers"]["Host"] = host;
        }
        if (p.type === 'vmess' && p.network === 'http') {
            p["http-opts"] = p["http-opts"] || {};
            p["http-opts"]["headers"] = p["http-opts"]["headers"] || {};
            p["http-opts"]["headers"]["Host"] = host;
        }
    });
    return proxies;
}