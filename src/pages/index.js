import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import convertDate from "../utils/main";
import l0rdcafe from "../assets/l0rdcafe.jpg";
import l0rd from "../assets/l0rd.jpg";
import readme from "../assets/readme.png";
import uberpage from "../assets/uberpage.png";
import branch from "../assets/branch.gif";
import asyncStrats from "../assets/async-strats.png";
import khamra from "../assets/khamra.png";
import dadjoke from "../assets/dadjoke.png";
import webpack from "../assets/webpack.gif";
import za7ma from "../assets/za7ma.png";
import foodmeup from "../assets/foodmeup.png";

const metadata = {
  description:
    "👑 l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer and Musician based in Toronto, Canada includes project gallery featuring web apps and projects in a range of topics such as HTML5, JavaScript, jQuery, SASS, Flexbox, CSS4, API integration, ES6 and many others. Website also includes front end related blog posts diving into topics such as open-source contribution, debugging and graphic design for web developers using SketchApp.",
  og_type: "website",
  og_title:
    "👑 l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer and Musician based in Toronto, Canada 🍁",
  og_description:
    "👑 l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer and Musician based in Toronto, Canada includes project gallery featuring web apps and projects in a range of topics such as HTML5, CSS4, ES6 and many others. Website also includes front end related blog posts.",
  twitter_title:
    "👑 l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer and Musician based in Toronto, Canada 🍁",
  twitter_description:
    "👑 l0rdcafé 👑 Personal Homepage of Ismail Arafa, Freelance Front End Web Developer based in Toronto, Canada includes projects in a range of topics such as HTML5, CSS4, ES6."
};

const Banner = styled.div`
  .main__banner {
    height: 100vh;
    background: #3d9970;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .main__banner__wrapper {
    animation-delay: 0.5s;
    text-align: center;
    font-size: 5.25rem;
    margin: 0;

    @media (max-width: 650px) {
      font-size: 4.5rem;
      margin-bottom: 5%;
      padding: 0 2%;
    }
  }

  .main__banner__wrapper__logo {
    width: 40%;
    margin-bottom: -0.75rem;
    border-style: none;

    @media (max-width: 650px) {
      width: 50%;
    }
  }

  .x-centered {
    display: block;
    margin: auto;
  }

  .l0rd {
    width: 25%;
    border-radius: 50%;
    margin: 0;

    @media (max-width: 650px) {
      width: 80%;
    }
  }

  .crown {
    font-size: 5.1rem;
    position: relative;
    top: 5px;

    @media (max-width: 650px) {
      font-size: 1.75rem;
      top: 10px;
    }
  }
`;

const BannerParagraph = styled.p`
  text-align: center;
  color: #fff;
  padding: 0 8%;
  font-size: 2rem;
  margin: 0;

  @media (max-width: 650px) {
    font-size: 1rem;
    letter-spacing: 0.035rem;
  }

  a {
    color: #ffdc00;
    font-weight: 700;
  }

  a:hover {
    color: #ffee80;
  }

  small {
    opacity: 0.7;
    font-size: 1.25rem;

    @media (max-width: 650px) {
      font-size: 0.75rem;
    }
  }

  .main__banner__wrapper__span {
    position: relative;
    left: 15px;
    top: 5px;

    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }
`;

const Main = styled.div`
  text-align: center;

  .main__body {
    flex: 1 1 70%;
    margin: 0 5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 2.75%;
  }

  .main__body__section {
    margin-top: 1.5em;

    h2 {
      font-size: 3.75rem;
      letter-spacing: -0.125rem;
      font-weight: 400;
      color: #000;

      @media (max-width: 650px) {
        font-size: 2.25rem;
      }
    }
  }

  .l0rd {
    text-decoration: none;
    color: #3d9970;
    font-weight: 700;
  }

  p {
    text-align: left;
    font-size: 1.8rem;
    letter-spacing: -0.05rem;

    @media (max-width: 650px) {
      font-size: 1.2rem;
    }
  }

  .main__body__section__fig {
    width: 41%;
    border-bottom: 1px solid #aaa;
    padding: 2%;
    text-align: left;
    display: inline-block;
    margin: 2%;

    @media (max-width: 650px) {
      width: 85%;
    }

    a {
      display: block;
      background: transparent;
      transition: opacity 0.2s;
      color: #000;

      &:hover,
      &:active {
        opacity: 0.5;
      }
    }

    img {
      border: 1px solid #aaa;
      max-width: 100%;
    }

    iframe {
      width: 100%;
    }

    h4 {
      font-size: 2rem;
      line-height: 1.35;
      letter-spacing: -0.1rem;
      font-weight: 300;
      margin-bottom: 0;
      color: #3d9970;

      @media (max-width: 650px) {
        font-size: 1.25rem;
      }
    }

    p {
      font-weight: 300;
      letter-spacing: -0.075rem;
      font-size: 1.33333rem;

      @media (max-width: 650px) {
        font-size: 1rem;
      }
    }
  }

  .main__body__section--content {
    padding: 0 17%;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: 0.005em;
    margin-top: 6em;
    text-align: center;
    margin-bottom: 2em;

    h2 {
      font-size: 3.75rem;
      letter-spacing: -0.125rem;
      font-weight: 400;

      @media (max-width: 650px) {
        font-size: 1.75rem;
      }
    }

    h3 {
      font-size: 1.8rem;
      text-align: left;
      font-weight: 300;
      letter-spacing: -0.075rem;

      @media (max-width: 650px) {
        font-size: 1rem;
        letter-spacing: -0.015rem;
      }

      a {
        transition: color 0.25s;
      }

      & a:hover {
        color: #85144b;
      }
    }

    small {
      text-align: left;
      color: #85144b;
      font-size: 50%;
      font-weight: 500;
      padding: 1em 0;
      opacity: 0.7;
      margin-bottom: 2.5em;

      @media (max-width: 650px) {
        font-size: 40%;
      }
    }
  }
`;

class IndexPage extends React.Component {
  componentDidMount() {
    const nav = document.querySelector("#nav");

    if (!nav) {
      return;
    }

    const sticky = nav.offsetTop;
    function stickNav() {
      const top = window.pageYOffset;
      const isSticky = nav.classList.contains("sticky");
      const isHome = window.location.pathname === "/";
      if (top > sticky) {
        document.querySelector(".main__banner__list__logo").style.display = "block";
        nav.classList.add("sticky");
        nav.classList.remove("fadeIn");
        nav.className += " animated bounceInLeft";
      } else if (isSticky && isHome) {
        document.querySelector(".main__banner__list__logo").style.display = "none";
        nav.classList.remove("sticky");
        nav.classList.remove("bounceInLeft");
        nav.classList.add("fadeIn");
      }
    }
    window.addEventListener("scroll", stickNav);
  }
  render() {
    const { data } = this.props;
    return (
      <Layout
        description={metadata.description}
        og_type={metadata.og_type}
        og_title={metadata.og_title}
        og_description={metadata.og_description}
        twitter_title={metadata.twitter_title}
        twitter_description={metadata.twitter_description}
      >
        <Banner>
          <section className="main__banner" itemScope itemType="http://www.l0rdcafe.com/Person">
            <h1 className="main__banner__wrapper animated tada">
              <Link to="/" href="/" role="link" itemProp="url">
                <span role="img" aria-label="crown emoji" className="crown">
                  👑
                </span>{" "}
                <img className="main__banner__wrapper__logo" src={l0rdcafe} alt="l0rdcafe logo" />{" "}
                <span role="img" aria-label="crown emoji" className="crown">
                  👑
                </span>
              </Link>
            </h1>
            <img className="l0rd" src={l0rd} alt="Ismail Arafa in Cairo, Egypt circa 2013" itemProp="photo" />
            <BannerParagraph>
              <span itemProp="name">Ismail Arafa</span> is a{" "}
              <Link href="/#projects" to="/#projects">
                web developer{" "}
                <span role="img" aria-label="laptop emoji">
                  💻
                </span>
              </Link>,{" "}
              <Link href="/#music" to="/#music">
                accomplished musician{" "}
                <span role="img" aria-label="treble clef emoji">
                  🎼
                </span>
              </Link>, and a huge cheese 🧀 fiend.
              <br />
              <small>Based in Toronto, Canada</small>
              <span className="main__banner__wrapper__span" role="img" aria-label="maple leaf emoji">
                🍁
              </span>
            </BannerParagraph>
            <Nav />
          </section>
        </Banner>
        <Main>
          <section className="main__body" role="main">
            <article id="intro" className="main__body__section" itemScope itemType="http://www.l0rdcafe.com/Article">
              <h2 itemProp="name">
                <span role="img" aria-label="camel emoji">
                  🐪
                </span>{" "}
                Story{" "}
                <span role="img" aria-label="canada flag emoji">
                  🇨🇦
                </span>
              </h2>
              <p itemProp="articleBody">
                Originally a desert dweller,{" "}
                <a className="l0rd" href="mailto:me@l0rdcafe.com">
                  l0rdcafé
                </a>{" "}
                stumbled upon the art of coding one day and, eager to learn more, he traversed the Atlantic Ocean{" "}
                <span role="img" aria-label="ocean wave emoji">
                  🌊
                </span>{" "}
                through a combination of camel back riding, telekinesis and sheer willpower.
              </p>
              <p>
                After an arduous and tasking journey, he finally made his way to Canadian shores where he would pursue
                his passions for melting cheese and crafting a myriad of web creations.
              </p>
            </article>
          </section>
          <section id="projects" className="main__body__section">
            <h2>
              <span role="img" aria-label="floppy disk emoji">
                💾
              </span>{" "}
              Projects{" "}
              <span role="img" aria-label="floppy disk emoji">
                💾
              </span>
            </h2>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://l0rdcafe.github.io/readme/" itemProp="url">
                <img src={readme} alt="Spotify currently playing track information" itemProp="image" />
                <h4 itemProp="name">Readme</h4>
                <p itemProp="description">
                  Spotify OAuth sign in fetching currently playing information and Genius annotations.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://l0rdcafe.github.io/ubereaucracy/" itemProp="url">
                <img src={uberpage} alt="Landing page of mock app Ubereaucracy" itemProp="image" />
                <h4 itemProp="name">Ubereaucracy</h4>
                <p itemProp="description">
                  A design and homepage for making paperwork easier in Egypt. Designed with Sketch App.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://github.com/l0rdcafe/branch-set/" itemProp="url">
                <img src={branch} alt="Gif of bash script setting git remote branches" itemProp="image" />
                <h4 itemProp="name">Branch Set</h4>
                <p itemProp="description">Update all git remote branches in a directory.</p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://github.com/l0rdcafe/async-strategies" itemProp="url">
                <img
                  src={asyncStrats}
                  alt="Command line terminal iTerm2 showing two tasks in series"
                  itemProp="image"
                />
                <h4 itemProp="name">Async Strategies</h4>
                <p itemProp="description">
                  Asynchronous JS strategies using promises, callbacks and async/await in serial and parallel.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://khamra.surge.sh/" itemProp="url">
                <img src={khamra} alt="Map displaying marker for drinks venue" itemProp="image" />
                <h4 itemProp="name">Khamra</h4>
                <p itemProp="description">
                  Foursquare API and Mapbox-GL app finding drinks venues using geolocation and kilometer radius.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://l0rdcafe.github.io/dad-joke-gen/" itemProp="url">
                <img src={dadjoke} alt="Dad joke app showing random joke and search field" itemProp="image" />
                <h4 itemProp="name">Dad Jokez</h4>
                <p itemProp="description">
                  Dad joke generator with random button and search field using icanhazdadjoke API.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://l0rdcafe.github.io/za7ma/" itemProp="url">
                <img
                  src={za7ma}
                  alt="Graph data visualizer showing nodes and edges with color coding depending on edge cost"
                  itemProp="image"
                />
                <h4 itemProp="name">Za7ma</h4>
                <p itemProp="description">Cairo traffic visualizer using SigmaJS with data from Bey2ollak API.</p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://github.com/l0rdcafe/cc-ss" itemProp="url">
                <img src={webpack} alt="Webpack demo showing framework build in iTerm2" itemProp="image" />
                <h4 itemProp="name">CC-SS</h4>
                <p itemProp="description">
                  CC-SS build setup including custom CSS framework, project templates and webpack config.
                </p>
              </a>
            </figure>
            <figure
              className="main__body__section__fig"
              itemScope
              itemType="http://www.l0rdcafe.com/CreativeWork"
              role="group"
            >
              <a href="https://l0rdcafe.github.io/foodmeup/" itemProp="url">
                <img
                  src={foodmeup}
                  alt="Dragon fruit and strawberry poke ingredients list and nutritional facts"
                  itemProp="image"
                />
                <h4 itemProp="name">FoodMeUp</h4>
                <p itemProp="description">
                  Ingredient-based recipe search using Edamam API including nutritional facts.
                </p>
              </a>
            </figure>
          </section>
          <section className="main__body__section">
            <h2 id="music">
              <span role="img" aria-label="treble clef and electric guitar emojis">
                🎼 🎸
              </span>{" "}
              Music{" "}
              <span role="img" aria-label="pint of beer and microphone emojis">
                🍺 🎙
              </span>
            </h2>
            <h3>
              EPs{" "}
              <span role="img" aria-label="treble clef emoji">
                🎼
              </span>
            </h3>
            <figure className="main__body__section__fig" itemScope itemType="http://www.l0rdcafe.com/MusicRecording">
              <iframe
                scrolling="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/137851268&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
                itemProp="audio"
                title="Soundcloud Player Dear Fady Album"
                width="398"
                frameBorder="no"
              />
              <h4 itemProp="name">
                عزيزي فادي - "Dear Fady" (2014){" "}
                <span role="img" aria-label="microphone emoji">
                  🎙
                </span>
              </h4>
            </figure>
            <figure className="main__body__section__fig" itemScope itemType="http://www.l0rdcafe.com/MusicRecording">
              <iframe
                scrolling="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/171710141&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
                itemProp="audio"
                title="Soundcloud Player Heavy Indie Album"
                width="398"
                frameBorder="no"
              />
              <h4 itemProp="name">
                إندي جامد - "Heavy Indie" (2014){" "}
                <span role="img" aria-label="microphone emoji">
                  🎙
                </span>
              </h4>
            </figure>
            <figure className="main__body__section__fig" itemScope itemType="http://www.l0rdcafe.com/MusicRecording">
              <iframe
                scrolling="no"
                src="https://www.youtube.com/embed/xNztF5wGrT8"
                itemProp="video"
                title="YouTube Player Live Performance"
                width="400"
                height="350"
                frameBorder="no"
              />
              <h4 style={{ textAlign: "center" }}>
                <span aria-label="pint of beer emoji" role="img">
                  🍺
                </span>{" "}
                Live
              </h4>
            </figure>
          </section>
          <section className="main__body__section--content" itemScope itemType="http://www.l0rdcafe.com/Blog">
            <h2 id="blog">
              <span role="img" aria-label="thinking emoji">
                🤔
              </span>{" "}
              Thoughts{" "}
              <span role="img" aria-label="thinking emoji">
                🤔
              </span>
            </h2>
            {data.allMarkdownRemark.edges.reverse().map(post => (
              <React.Fragment key={post.node.frontmatter.date}>
                <h3 itemProp="name" role="listitem">
                  <Link to={post.node.frontmatter.path} href={post.node.frontmatter.path} itemProp="url" role="link">
                    <span role="img" aria-label="thought bubble emoji">
                      💭
                    </span>{" "}
                    {post.node.frontmatter.title}{" "}
                    <span role="img" aria-label="thought bubble emoji">
                      💭
                    </span>
                  </Link>
                </h3>
                <small itemProp="datePublished">{convertDate(post.node.frontmatter.date)}</small>
              </React.Fragment>
            ))}
          </section>
        </Main>
        <Footer />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string,
              title: PropTypes.string,
              date: PropTypes.string
            })
          })
        })
      )
    })
  }).isRequired
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
