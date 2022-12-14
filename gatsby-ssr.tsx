/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import * as fs from 'fs'

import { GlobalStyle } from './src/styles/global'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  const files = getFilesFromPath('./public/static', '.woff2')
  const preload = [
    'montserrat-v24-latin-ext_latin-regular',
    'montserrat-v24-latin-ext_latin-600',
    'montserrat-v23-latin-700',
    'montserrat-v23-latin-800',
    'montserrat-v23-latin-ext_latin-900',
    'lato-v22-latin-ext_latin-regular',
    'lato-v22-latin-ext_latin-700',
    'lato-v22-latin-ext_latin-900',
  ]

  setHeadComponents([
    files.map((file, i) => {
      return preload.map((font, key) => {
        const fileBeginning = file.split('-').slice(0, -1).join('-')
        if (fileBeginning === font) {
          return (
            <link
              key={key}
              rel='preload'
              as='font'
              type='font/woff2'
              crossOrigin='anonymous'
              href={`/static/${file}`}
            />
          )
        } else {
          return null
        }
      })
    }),
  ])
}

function getFilesFromPath(path: string, extension: string) {
  let dir = fs.readdirSync(path)
  return dir.filter(elm => elm.match(new RegExp(`.*\.(${extension})`, 'ig')))
}
