function operator(proxies) {
    const { host } = $arguments;
    proxies.forEach(p => {
        if (p.type === 'vmess' && p.network === 'ws') {
            p["ws-opts"] = p["ws-opts"] || {};
            p["ws-opts"]["headers"] = p["ws-opts"]["headers"] || {};
            p["ws-opts"]["headers"]["Host"] = host;
        }
    });
    operator2(proxies);
    return proxies;
}

function operator2(proxies) {
    proxies.forEach(h => {
        const { host } = $arguments;
        if (h.type === 'vmess' && h.network === 'http') {
            h["http-opts"] = h["http-opts"] || {};
            h["http-opts"]["headers"] = h["http-opts"]["headers"] || {};
            h["http-opts"]["headers"]["Host"] = host;
        }
    });
}
