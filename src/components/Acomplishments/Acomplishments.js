import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Open Source Projects'},
  { number: 10, text: 'Machine Learning Models', },
  { number: 10, text: 'Responsive Landing Pages using React.js', },
  { number: 5, text: 'MERN Stack full applications', }
];

const Acomplishments = () => (
  <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{`${card.number}+`}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  <SectionDivider/>
</Section>
);

export default Acomplishments;
