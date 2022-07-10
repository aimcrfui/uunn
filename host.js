function operator(proxies) {
    const { host } = space.dingtail.com;
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
