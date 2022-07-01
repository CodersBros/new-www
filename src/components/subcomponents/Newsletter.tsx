import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { useScript } from '../utils/use-script'
import variables from '../../styles/variables'

const NewsletterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${variables.pxToRem(25)};
  padding: 0;
  overflow: hidden;
  margin: 0 auto;
  & .newsimage {
    align-self: flex-end;
    flex-basis: 60%;
  }

  @media ${variables.device.tablet} {
    flex-direction: column;
    gap: 0;
    & .newsimage {
      max-width: 50%;
      flex-basis: 100%;
    }
  }

  @media ${variables.device.mobile} {
    & .newsimage {
      max-width: 100%;
    }
  }
`
const FormWrapper = styled.div`
  /* min-width: ${variables.pxToRem(550)};
  padding: 0 ${variables.pxToRem(30)}; */
  overflow: hidden;

  div.iframe-wrapper {
    width: 460px;
    height: 531px;
    top: 0px;
    left: 0px;
    margin: auto;

    @media ${'screen and (max-width: 460px)'} {
      width: 320px;
    }

    & iframe {
      height: ${variables.pxToRem(600)};
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
  }
`

export default function Newsletter() {
  const status: string = useScript('https://app.getresponse.com/view_webform_v2.js?u=QX16N&webforms_id=hiz1B')

  return (
    <>
      {status === 'ready' && (
        <NewsletterWrapper>
          <StaticImage src='../../../static/images/newsletter.png' alt='Newsletter' className='newsimage' />
          <FormWrapper>
            <div className='iframe-wrapper'>
              <iframe
                className='responsive-iframe'
                src='https://app.getresponse.com/site2/5d4d6f8b6908199482efeb84d0edf9a5/?u=QX16N&webforms_id=hiz1B'
              ></iframe>
            </div>
          </FormWrapper>
        </NewsletterWrapper>
      )}
    </>
  )
}
