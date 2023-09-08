import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:314-343-3432">0675234231</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:contact@jsmastery.com">
          a.cherif@esi-sba.dz
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Building modern and high quality websites</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/Achwak28?tab=repositories">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/achwak-cherif-936493178/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/achwak_cherif?igshid=MzRlODBiNWFlZA==">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
