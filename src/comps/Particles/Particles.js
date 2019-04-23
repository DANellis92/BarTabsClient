import React from "react";
import Particles from "react-particles-js";

const ParticleFx = () => {
  return (
    <React.Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 58,
              density: {
                enable: true,
                value_area: 480.7191558571619
              }
            },
            color: {
              value: "#e6e0dc"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#f2e4e4"
              },
              polygon: {
                nb_sides: 8
              },
              image: {
                src: "img/github.svg",
                width: 50,
                height: 100
              }
            },
            opacity: {
              value: 0.4887311417881146,
              random: true,
              anim: {
                enable: true,
                speed: 0.8115236356258881,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 16.023971861905395,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2
            },
            move: {
              enable: true,
              speed: 8.011985930952699,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 801.1985930952699,
                rotateY: 1442.1574675714858
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: false
        }}
      />
    </React.Fragment>
  );
};

export default ParticleFx;
