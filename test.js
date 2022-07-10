// test

function operator(proxies) {
    const { host } = $arguments;
    proxies.forEach(p => {
        if (p.type === 'vmess' && p.network === 'ws') {
            p["ws-opts"] = p["ws-opts"] || {};
            p["ws-opts"]["headers"] = p["ws-opts"]["headers"] || {};
            p["ws-opts"]["headers"]["Host"] = host;
        } else if (p.type === 'vmess' && p.network === 'http'){
            p["http-opts"] = p["http-opts"] || {};
            p["http-opts"]["headers"] = p["http-opts"]["headers"] || {};
            p["http-opts"]["headers"]["Host"] = host;
        }
    });
    return proxies;
}