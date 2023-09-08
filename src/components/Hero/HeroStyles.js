import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 75%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const RightSection = styled.div`
  width: 25%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: auto auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 25%;
    display: flex;
    flex-direction: row;

    margin: auto auto;
  }
`;

export const Img = styled.img`
margin-top: 100px;
  height:220px;
  border-radius:50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0;
    width:100px;
   height:120px;
  border-radius:50%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
 
  }
`

export const Span = styled.span`

  color:#945DD6;
  font-weight: 800;
  `