import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Img , Span} from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        This is Achwak Cherif a Full stack developer, I enjoy <Span>building</Span> and desinging websites. 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:a.cherif@esi-sba.dz'}>Contact Me</Button>
    </LeftSection>
    <RightSection main center>
      <Img src='/images/white-me.jpg' />
    </RightSection>
  </Section>
);

export default Hero;