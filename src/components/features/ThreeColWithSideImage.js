import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
// import { css } from "styled-components/macro";
// import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import defaultCardImage from "images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import {
  previousStep01,
  previousStep02,
  previousStep03,
  previousStep04,
  previousStep05,
  previousStep06,
} from "images/steps/index";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch sm:flex-row flex-wrap justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = styled.div`
  ${tw`flex flex-col items-center justify-center mx-16`}
    p {
      ${tw`relative text-xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-10`}
    }
    hr {
      ${tw`border-2 md:border-3 border-primary-500`}
    }
    img {
      ${tw`hidden sm:block absolute top-[0rem] left-[18.6rem] md:top-[0.5rem] md:left-[28.2rem] lg:top-[1rem] lg:left-[33.8rem] w-12 md:w-16`}
    }
  }`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`sm:w-1/2 max-w-md`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`relative text-center p-5`}
    img {
      ${tw`w-full md:w-auto h-full md:h-auto`}
    }
  }
`;

const PrimaryButton = styled(PrimaryButtonBase)`
  ${tw`absolute top-9/12 w-9/12 lg:h-16 h-12 p-0 bg-white border border-gray-800 lg:text-lg md:text-sm text-xs text-gray-800 inset-y-1/2 -translate-x-1/2 -translate-y-1/2`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ steps = null, heading = null }) => {
  const defaultSteps = [
    {
      imageSrc: previousStep01,
      title: "previousStep01",
      description: "Wear Doctor app installation",
      button: "웨어닥터 다운로드",
    },
    {
      imageSrc: previousStep02,
      title: "previousStep02",
      description: "Health Connect app installation",
      button: "Health Connet 다운로드",
    },
    {
      imageSrc: previousStep03,
      title: "previousStep03",
      description: "Launch Health Connect app",
    },
    {
      imageSrc: previousStep04,
      title: "previousStep04",
      description: "Select app permissions",
    },
    {
      imageSrc: previousStep05,
      title: "previousStep05",
      description: "Select Wear Doctor and Samsung Health",
    },
    {
      imageSrc: previousStep06,
      title: "previousStep06",
      description: "Allow all app access",
    },
  ];

  if (!steps) steps = defaultSteps;
  if (!heading) heading = "previous-text-1";

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          <p>웨어닥터 초기 셋팅</p>
          <p>
            웨어닥터 앱 실행 전 우선 진행해주세요!
            <img src={require(`../../images/check-icon.png`)} alt={""} />
            <hr />
          </p>
        </Heading>
        <VerticalSpacer />
        {steps.map((step, i) => (
          <Column key={i}>
            <Card>
              <div className="imageContainer">
                <img
                  src={step.imageSrc || defaultCardImage}
                  alt={step.description}
                />
                {step.button && <PrimaryButton>{step.button}</PrimaryButton>}
              </div>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
