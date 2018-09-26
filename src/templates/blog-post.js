import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { convertDate } from "../utils/main";

const PostWrapper = styled.div`
  .main__body__section--post {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: 0.005em;
    margin-top: 0;
    padding: 0 10%;
    text-align: left;

    .main__body__content__code {
      justify-content: center;
      display: flex;
      flex: 1;
      margin-bottom: 1em;
      padding: 2%;
      font-size: 1rem;
      text-align: left;
      border: 1px solid #b5b5b5;
      border-radius: 4px;
      background: #ddd;
      margin: 0 0.2rem;

      @media (max-width: 650px) {
        font-size: 0.75rem;
      }
    }

    img {
      max-width: 70%;
      display: block;
      margin: auto;
    }

    ol {
      list-style: none;
      margin: 0;
      font-size: 1.25rem;

      svg {
        color: #ffdc00;
        transition: all 0.25s;

        &:hover {
          color: #fff08f;
        }
      }

      a {
        transition: all 0.25s;
        margin-left: 1.5%;

        &:hover {
          color: #85144b;
        }
      }

      li {
        margin-bottom: 1rem;

        &:hover > svg {
          color: #fff08f;
        }
      }
    }

    h1 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 1rem;

      @media (max-width: 650px) {
        font-size: 2rem;
      }
    }

    small {
      justify-content: flex-end;
      font-weight: 500;
      font-size: 50%;
      color: #85144b;
      margin-right: 1.5%;
      padding: 1em 0;
      display: flex;
      opacity: 0.7;

      @media (max-width: 650px) {
        font-size: 40%;
      }
    }

    .main__body__content__span {
      font-weight: 500;
      color: #85144b;
      transition: all 0.25s;

      &:hover {
        color: #ba1c68;
      }
    }

    p {
      font-size: 1.25rem;

      @media (max-width: 650px) {
        font-size: 1rem;
      }

      a {
        transition: color 0.25s;
      }

      a:hover {
        color: #85144b;
      }
    }
  }
`;

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      og_type="article"
      og_description={post.frontmatter.og_description}
      twitter_description={post.frontmatter.twitter_description}
    >
      <Nav sticky />
      <section className="main__body">
        <PostWrapper>
          <article className="main__body__section--post" itemScope itemType="http://www.l0rdcafe.com/BlogPosting">
            <h1 itemProp="name">
              <span role="img" aria-label="thought bubble emoji">
                💭
              </span>{" "}
              {post.frontmatter.title}{" "}
              <span role="img" aria-label="thought bubble emoji">
                💭
              </span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <small itemProp="datePublished">{convertDate(post.frontmatter.date)}</small>
          </article>
        </PostWrapper>
      </section>
      <Footer />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        description
        og_description
        twitter_description
      }
    }
  }
`;
