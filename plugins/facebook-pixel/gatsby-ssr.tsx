import React from 'react'
import { GatsbySSR } from 'gatsby'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }, options) => {
  const pixelId = options.pixelId
  if (pixelId) {
    // https://developers.facebook.com/docs/meta-pixel/get-started
    const pixelInitScript = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', 'revoke');
fbq('init', '${pixelId}');
fbq('track', 'PageView');
    `
    setHeadComponents([<script dangerouslySetInnerHTML={{ __html: pixelInitScript }} />])
  }
}
