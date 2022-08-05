import React from "react";
import styled from "styled-components/macro";
import background from '../img/background1.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const PageWrapper = styled.div`
    height: calc(100vh - 3.65rem);
    margin-top: 3.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image:url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    /* Styling canvas background generated by particles.js */
    div {
      filter: brightness(1.5);
      background-image:url(${background});
      background-color: #232732;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      height: calc(100vh - 3.65rem) !important;
      width: 100vw !important;
      position: absolute;
      z-index: 10;
    }
    h1 {
      color: white;
      position: relative;
      z-index: 11;
      font-size: 3rem;
      font-family: 'Playfair Display', serif;
      user-select: none;
      text-shadow: 2px 2px 4px black;
      pointer-events: none;
      span {
        color: #ffc700;
      }
    }
  `;

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <PageWrapper id="home">
      {/* Sets particles in the background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
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
              color: "#ffffff",
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
              speed: 1.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 100,
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
          detectRetina: true,
        }}
        style={{
          position: "relative",
        }}
      />
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 400,
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                duration: 1,
              },
            },
          },
        }}
      /> */}
      <h1>
        Hello, I'm <span>Nasser Mughrabi.</span>
        <br />
        I'm a full-stack software developer.
      </h1>
    </PageWrapper>
  );
}

export default Home;