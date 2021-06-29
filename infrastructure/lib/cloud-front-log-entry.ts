const sampleEvent = {
  date: '2021-06-28',
  time: '18:35:45',
  'x-edge-location': 'CDG50-P1',
  'sc-bytes': '38868',
  'c-ip': '188.241.83.110',
  'cs-method': 'GET',
  'cs-host': 'd2u4rh35bofsuw.cloudfront.net',
  'cs-uri-stem': '/images/favicon-32x32.png',
  'sc-status': '404',
  'cs-referer': '-',
  'cs-user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
  'cs-uri-query': '-',
  'cs-cookie': '-',
  'x-edge-result-type': 'Error',
  'x-edge-request-id': '-mfD4Yc9SH3mTGX9TCP9VCxouZe_Ryecva2JwfGk9c8ETft0RQ1cwA==',
  'x-host-header': 'brightinventions.pl',
  'cs-protocol': 'https',
  'cs-bytes': '166',
  'time-taken': '0.093',
  'x-forwarded-for': '-',
  'ssl-protocol': 'TLSv1.3',
  'ssl-cipher': 'TLS_AES_128_GCM_SHA256',
  'x-edge-response-result-type': 'Error',
  'cs-protocol-version': 'HTTP/2.0',
  'fle-status': '-',
  'fle-encrypted-fields': '-',
  'c-port': '37590',
  'time-to-first-byte': '0.083',
  'x-edge-detailed-result-type': 'Error',
  'sc-content-type': 'text/html',
  'sc-content-len': '-',
  'sc-range-start': '-',
  'sc-range-end': '-',
}

export type CloudFrontLogEntry = typeof sampleEvent
