import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  background: url("/images/forest.jpg") left center;
  font-size: 1em;

  @media (max-width: 999px) {
    font-size: 0.8em;
  }
  @media (max-width: 759px) {
    flex-direction: column;
    align-items: center;
    background-position: center top;
    height: 100vh;
  }
`;

const Container = styled.div`
  background-color: ${props => props.background};
  height: 100vh;
  width: 43vw;
  @media (max-width: 759px) {
    height: auto;
    width: 100vw;
    flex-grow: 1;
  }
`;

const Slant = styled.div`
  height: 100vh;
  width: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: -2px;
  margin-left: 2px;
  background: linear-gradient(to top left, #fff 50%, transparent 50.5%)
    no-repeat;
  @media (max-width: 759px) {
    width: 100%;
    height: auto;

    margin: 0;
    background: linear-gradient(transparent 50%, #fff 50%) no-repeat;
  }
`;

const Logo = styled.img`
  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
  width: 12vw;

  @media (max-width: 759px) {
    width: 60px;
  }
`;

const InnerContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 1em;
  flex-grow: 1;
`;

const HeadingLeft = styled.a`
  font-size: 60px;
  color: #fff;
  margin-right: -300px;
  text-decoration: none;
`;

const HeadingRight = styled.a`
  font-size: 60px;
  color: #333;
  margin-left: -300px;
  text-decoration: none;
`;

const LandingPage = () => (
  <>
    <SEO title="" />
    <Page>
      <Container>
        <InnerContent>
          <HeadingLeft href="audit">Audit</HeadingLeft>
        </InnerContent>
      </Container>

      <Slant>
        <Logo src="/images/react.png" />
      </Slant>
      <Container background={"#fff"}>
        <InnerContent>
          <HeadingRight href="/">Review</HeadingRight>
        </InnerContent>
      </Container>
    </Page>
  </>
);
export default LandingPage;
