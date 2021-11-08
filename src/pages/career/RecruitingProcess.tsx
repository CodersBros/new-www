import React, { useMemo } from 'react'
import styled from 'styled-components'

import { Section, SectionTitle } from '../../components/shared'
import { CustomSectionTitle } from '../../components/shared/index.styled'
import variables from '../../styles/variables'

const RecruitingSection = styled(Section)`
  padding: 2rem 15rem 6rem 15rem;
  @media ${variables.device.laptop} {
    padding: 0 6rem 1.625rem 6rem;
  }
  @media ${variables.device.tabletXL} {
    padding: 0 9rem 1.625rem 9rem;
  }
  @media ${variables.device.tablet} {
    padding: 0 2.25rem 1.625rem 2.25rem;
  }
`

const RecruitingTitle = styled(CustomSectionTitle)`
  margin-bottom: 4rem;
  font-size: 2.5rem;
  line-height: 3.125rem;
  font-weight: 900;
  @media ${variables.device.laptop} {
    font-size: 2.125rem;
    line-height: 2.625rem;
  }
  @media ${variables.device.mobile} {
    font-size: 1.375rem;
  }
`

const Columns = styled.div`
  .column {
    position: relative;
    padding: 1rem 2rem;

    &:not(.is-half):after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 1.5rem;
      height: 1.1rem;
      content: '';
      background-image: url('/images/career/arrow.svg');
      background-size: cover;
    }
    &:nth-of-type(3) figure img {
      padding-top: 20px;
    }
    &:nth-child(n + 4):after {
      display: none;
    }
    &:first-of-type {
      padding-left: 0;
    }
    &:nth-of-type(4) {
      padding-right: 0;
    }
    &:last-of-type {
      padding: 5.375rem 0 5.625rem 0;
    }
    &:last-of-type p {
      font-size: 1.75rem;
      margin-top: 4.25rem;
    }

    figure img {
      max-height: 14.875rem;
      object-fit: contain;
    }

    &.is-half figure img {
      width: 100%;
      max-height: 58.25rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.375rem;
      font-weight: 700;
    }
  }
  @media ${variables.device.laptop} {
    & .column {
      &:not(.is-half):after {
        width: 1.0625rem;
        height: 0.625rem;
      }
      &:last-of-type p {
        font-size: 1.3125rem;
        margin-top: 3rem;
      }
      figure img {
        max-height: 11rem;
        object-fit: contain;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  @media ${variables.device.tabletXL} {
    & .column {
      &:not(.is-half):after {
        width: 0.8125rem;
        height: 0.5rem;
      }
      &:last-of-type p {
        font-size: 1.125rem;
        margin-top: 2.3125rem;
      }
      figure img {
        max-height: 9rem;
        object-fit: contain;
      }
      p {
        font-size: 0.875rem;
        margin-top: 1.25rem;
      }
    }
  }
  @media ${variables.device.tablet} {
    display: block !important;
    && {
      .column {
        margin-bottom: 4.5625rem;
        padding: 0 1.125rem;
        width: 100%;

        &:not(.is-half):after {
          top: unset;
          bottom: -3rem;
          width: 1.5rem;
          height: 1rem;
          transform: translateX(-50%) rotate(90deg) scale(1.5);
          left: 50%;
          right: unset;
        }

        figure img {
          max-height: 296px;
          width: 100%;
          margin: 0 auto;
        }
        p {
          font-size: 1.375rem;
          margin-top: 2.5rem;
        }
      }
    }
    @media ${variables.device.mobile} {
      && {
        .column {
          &:not(.is-half):after {
            top: unset;
            bottom: -3rem;
            width: 1.5rem;
            height: 1rem;
            transform: translateX(-50%) rotate(90deg) scale(1);
            left: 50%;
            right: unset;
          }
        }
      }
    }
  }
`

const RecruitingProcess: React.FC = () => {
  const blocks = useMemo(
    () => [
      { image: '/images/career/recruiting/cv_review.png', title: 'CV screening' },
      { image: '/images/career/recruiting/interview.png', title: 'interview (technical part & non-technical part)' },
      { image: '/images/career/recruiting/Programming_task.png', title: 'programming task' },
      {
        image: '/images/career/recruiting/skills evaluation and feedback.png',
        title: 'skills evaluation and feedback',
      },
    ],
    []
  )

  return (
    <RecruitingSection>
      <RecruitingTitle>recruiting process</RecruitingTitle>

      <Columns className='columns is-multiline has-justify-content-center'>
        {blocks.map((block, index) => (
          <div key={block.title} className='column is-one-quarter has-text-centered'>
            <figure className='image is-inline-block'>
              <img src={block.image} alt={block.title} />
            </figure>
            <p>
              {index + 1}. {block.title}
            </p>
          </div>
        ))}
        <div className='column is-half has-text-centered'>
          <figure className='image is-inline-block'>
            <img src='/images/career/recruiting/congrats.png' alt='congrats' />
          </figure>
          <p>5. congrats! you are a part of a bright team!</p>
        </div>
      </Columns>
    </RecruitingSection>
  )
}

export default RecruitingProcess
