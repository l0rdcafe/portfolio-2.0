import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "../css/main.css";

const MainWrapper = styled.div`
  .main {
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
  }
`;

const Layout = ({ children, description, title, og_type, og_description, twitter_description }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${title ? `👑 ${title} –` : "👑"} ${data.site.siteMetadata.title}`}
          meta={[
            { name: "description", content: description },
            { name: "theme-color", content: "#3d9970" },
            { name: "og:type", content: og_type },
            { name: "og:title", content: `${`${title} – ` || ""}${data.site.siteMetadata.title}` },
            { name: "og:description", content: og_description },
            { name: "og:url", content: "http://www.l0rdcafe.com" },
            { name: "og:image", content: "/assets/code.png" },
            { name: "og:image:width", content: "1018" },
            { name: "og:image:height", content: "932" },
            { name: "article:author", content: "Ismail Arafa" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:site", content: "@l0rdcafe" },
            { name: "twitter:image", content: "/assets/code-twitter.png" },
            { name: "twitter:title", content: `${`${title} – ` || ""}${data.site.siteMetadata.title}` },
            { name: "twitter:description", content: twitter_description }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <MainWrapper>
          <section className="main" itemScope itemType="http://www.l0rdcafe.com/WebPage">
            {children}
          </section>
        </MainWrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  og_type: PropTypes.string,
  og_description: PropTypes.string.isRequired,
  twitter_description: PropTypes.string.isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  og_type: "website",
  title: ""
};

export default Layout;
