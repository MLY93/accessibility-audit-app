import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";

const Page = styled.div`
  display: flex;
  background: #292929;
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
  background: linear-gradient(to top left, #fff 50%, transparent 50.1%)
    no-repeat;
  @media (max-width: 759px) {
    width: 100%;
    height: auto;

    margin: 0;
    background: linear-gradient(transparent 50%, #fff 50%) no-repeat;
  }
`;

const Svg = styled.svg`
  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
  width: 100px;
  height: 100px;
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
    <SEO title="Landing Page" />
    <Page>
      <Container>
        <InnerContent>
          <HeadingLeft href="audit">Audit</HeadingLeft>
        </InnerContent>
      </Container>

      <Slant>
        <Svg xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="64"
            cy="64"
            r="50"
            fill="#292929"
            transform="translate(-14 -14)"
          />
          <g transform="translate(-14 -14)" fill="#00dbfc">
            <circle class="st1" cx="64" cy="63.9" r="5.5" />
            <path
              class="st1"
              d="M91.6 58.5c-1.9-1.6-4.6-3-7.8-4.1-.6-.2-1.3-.4-2-.6.1-.5.2-.9.3-1.4 1.5-7.4.4-13.2-2.8-15.1-1.6-.9-3.8-.9-6.3 0-2.3.9-4.9 2.5-7.4 4.7-.5.4-1 .9-1.5 1.4-.3-.3-.7-.6-1-.9-5.6-5-11.2-7-14.5-5.1-1.6.9-2.7 2.8-3.2 5.5-.4 2.4-.3 5.5.4 8.8.1.7.3 1.3.5 2-.8.2-1.6.5-2.3.7-6.7 2.3-10.7 5.9-10.7 9.5 0 1.9 1.1 3.9 3.2 5.6 2 1.7 4.8 3.2 8 4.3.5.2 1.1.4 1.7.5-.2.7-.3 1.5-.5 2.2-1.3 6.9-.2 12.2 2.9 14 .8.5 1.8.7 2.9.7s2.3-.2 3.6-.7c2.5-.9 5.1-2.5 7.7-4.8.4-.4.9-.8 1.3-1.2.6.5 1.1 1 1.7 1.5 3.9 3.4 7.7 5.2 10.7 5.2 1.1 0 2.1-.2 2.9-.7 1.6-1 2.8-2.9 3.3-5.6.5-2.6.4-5.7-.3-9.1-.1-.5-.2-1.1-.4-1.6.4-.1.8-.2 1.1-.4 7.2-2.4 11.6-6.2 11.6-10 0-1.7-1.1-3.6-3.1-5.3zM73.9 39.8c1.8-.6 3.2-.7 4.1-.2 1.8 1 3 5.3 1.6 12.3l-.3 1.2c-2.6-.6-5.3-1-8.2-1.3-1.7-2.4-3.4-4.6-5.2-6.5.5-.5.9-.9 1.4-1.3 2.3-2 4.6-3.4 6.6-4.2zM72.6 69c-1 1.7-1.9 3.3-2.9 4.7-1.8.1-3.7.2-5.6.2s-3.8-.1-5.6-.2c-1-1.5-2.1-3.1-3-4.8-1-1.6-1.8-3.3-2.6-5 .8-1.7 1.7-3.3 2.6-4.9l3-4.8c1.8-.1 3.7-.2 5.6-.2s3.8.1 5.6.2c1 1.5 2 3.1 3 4.7 1 1.7 1.9 3.3 2.7 4.9-1 1.8-1.8 3.5-2.8 5.2zm4-2c.8 1.9 1.5 3.7 2.1 5.4-1.8.4-3.7.7-5.7 1 .6-1 1.3-2.1 1.9-3.1.6-1.1 1.2-2.2 1.7-3.3zM64.1 80.9c-1.2-1.3-2.5-2.8-3.7-4.4 1.2 0 2.4.1 3.6.1 1.3 0 2.5 0 3.7-.1-1.2 1.6-2.4 3.1-3.6 4.4zm-9-7.5c-2-.2-3.9-.5-5.7-.9.5-1.8 1.2-3.6 2-5.4.6 1.1 1.1 2.1 1.7 3.2.7 1.1 1.3 2.1 2 3.1zm-1.9-15.7c-.6 1.1-1.2 2.1-1.7 3.2-.8-1.8-1.4-3.6-2-5.3 1.8-.4 3.6-.7 5.6-1-.7 1-1.3 2.1-1.9 3.1zM64 47.2c1.2 1.3 2.4 2.8 3.6 4.4-1.2-.1-2.4-.1-3.7-.1-1.2 0-2.4 0-3.6.1 1.3-1.6 2.5-3.1 3.7-4.4zm10.8 10.5c-.6-1.1-1.2-2.1-1.9-3.1 2 .2 3.8.6 5.6 1-.5 1.7-1.2 3.5-2 5.3-.4-1-1-2.1-1.7-3.2zm-26.5-6.5c-.6-3-.7-5.7-.3-7.8.3-1.8 1-3.1 1.9-3.7 1.8-1 6.1 0 11.4 4.8l.9.9c-1.8 1.9-3.5 4.1-5.2 6.5-2.9.3-5.7.7-8.2 1.3-.2-.8-.3-1.4-.5-2zm-2.9 20.2c-6.5-2.2-9.5-5.4-9.5-7.5 0-2 2.8-4.9 8.9-7 .7-.2 1.4-.5 2.1-.7.8 2.5 1.8 5.1 3 7.8-1.2 2.7-2.3 5.3-3 7.9-.5-.2-1-.3-1.5-.5zm6.1 17.3c-.7 0-1.2-.1-1.6-.4-1.7-1-2.9-4.8-1.6-11.2.1-.7.3-1.3.4-2 2.5.6 5.3 1 8.3 1.2 1.7 2.4 3.5 4.6 5.3 6.5-.4.4-.8.7-1.2 1.1-3.9 3.4-7.4 4.8-9.6 4.8zm28.3-12.3c1.3 6.7 0 10.9-1.7 11.9s-5.6.1-10.5-4.2c-.5-.4-1-.9-1.5-1.4 1.7-1.9 3.5-4.1 5.2-6.5 3-.3 5.8-.7 8.3-1.3 0 .5.1 1 .2 1.5zm2.5-5c-.3.1-.7.2-1 .3-.8-2.4-1.8-5.1-3.1-7.8 1.2-2.6 2.2-5.2 3-7.7l1.8.6c2.9 1 5.3 2.3 6.9 3.6 1.4 1.2 2.2 2.4 2.2 3.5 0 2.1-3.1 5.3-9.8 7.5z"
            />
          </g>
        </Svg>
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
