import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

import {
  previousStep01,
  previousStep02,
  previousStep03,
  previousStep04,
  previousStep05,
  previousStep06,
  watchStep01,
  watchStep02,
  watchStep03,
  watchStep04,
  previousText,
  watchText
} from 'images/steps/index';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch sm:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`sm:w-1/2 max-w-md`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row md:justify-center items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`text-center p-5`}
    img {
      ${tw`w-full md:w-auto h-full md:h-auto`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({steps = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  const defaultSteps = [
    { imageSrc: previousStep01, title: "previousStep01", description: "Wear Doctor app installation" },
    { imageSrc: previousStep02, title: "previousStep02", description: "Health Connect app installation" },
    { imageSrc: previousStep03, title: "previousStep03", description: "Launch Health Connect app" },
    { imageSrc: previousStep04, title: "previousStep04", description: "Select app permissions" },
    { imageSrc: previousStep05, title: "previousStep05", description: "Select Wear Doctor and Samsung Health" },
    { imageSrc: previousStep06, title: "previousStep06", description: "Allow all app access" },
  ]

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {steps.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer"> 
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
