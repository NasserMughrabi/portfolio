import React from "react";
import styled from "styled-components/macro";
import background from "../img/skys-background.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const PageWrapper = styled.div`
  height: calc(100vh - 3rem);
  margin-top: 3.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  /* Styling canvas background generated by particles.js */
  div {
    filter: brightness(1.5);
    background-image: url(${background});
    background-color: #232732;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: calc(100vh - 3.65rem) !important;
    width: 100vw !important;
    position: absolute;
    z-index: 10;

    /* position: relative; */
    width: 100%;
    height: auto;
    min-height: 35rem;
    /* padding: 15rem 0; */
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.7) 75%,
        #000 100%
      ),
      url("../assets/img/bg-masthead.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
  }
  article {
    h1 {
      color: white;
      position: relative;
      z-index: 11;
      font-size: 2.5rem;
      /* line-height: 2.5rem; */
      letter-spacing: 0.1rem;
      font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 4rem;
      user-select: none;
      pointer-events: none;
      background: linear-gradient(
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0)
      );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    h2 {
      color: rgba(255, 255, 255, 0.5) !important;
      position: relative;
      z-index: 11;
      font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 4rem;
      user-select: none;
      pointer-events: none;
      background: linear-gradient(
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0)
      );
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
`;

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container.canvas.element.style["position"]);
    container.canvas.element.style["position"] = "relative";
  };
  return (
    <PageWrapper id='home'>
      {/* Sets particles in the background */}
      <Particles
        canvasClassName='tsparticles-canvas-el'
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 40,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 380,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "none",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
        style={{
          position: "relative",
        }}
      />
      <article>
        <h1>
          NASSER MUGHRABI
        </h1>
        <h2>Full-Stack Software Developer</h2>
      </article>
    </PageWrapper>
  );
}

export default Home;
