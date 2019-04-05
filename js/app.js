/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
var valsDefault=[20,28,16,16,16];
var valsMobile=[10,14,8,8,8];
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  particlesJS('particles-js',
  
{
  "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#a6dbdb"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 3,
          "color": "#f7ba36"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1.0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 60,
        "color": "#fff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2.8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }

      },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab":{
          "distance": 400,
          "line_linked":{
            "opacity": 0.5
          }
        },
        "bubble":{
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse":{
          "distance": 200,
          "duration": 0.4
        },
        "push":{
          "particles_nb": 4
        },
        "remove":{
          "particles_nb": 2
        }
      }
      
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#000000",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


}
else{
  particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#a6dbdb"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 3,
          "color": "#f7ba36"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1.0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 60,
        "color": "#fff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2.8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }

      },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": "true",
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab":{
          "distance": 400,
          "line_linked":{
            "opacity": 0.5
          }
        },
        "bubble":{
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse":{
          "distance": 200,
          "duration": 0.4
        },
        "push":{
          "particles_nb": 4
        },
        "remove":{
          "particles_nb": 2
        }
      }
      
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#000000",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


}