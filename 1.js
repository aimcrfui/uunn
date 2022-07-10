function setHost(p, host) {
    if (['vmess', 'vless'].includes(p.type)) {
      p.servername = host
      if (p.network === 'ws') {
        $.lodash_set(p, 'ws-opts.headers.Host', host)
      } else if (p.network === 'h2') {
        $.lodash_set(p, 'h2-opts.host', [host])
      } else if (p.network === 'http') {
        $.lodash_set(p, 'http-opts.headers.Host', [host])
      } else if (p.network) {
        $.lodash_set(p, `${p.network}-opts.headers.Host`, [host])
      }
    }
    return p
  }
