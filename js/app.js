/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
var particles = [];
var frequency = 20;

function popolate() {
  particles.push(
    new Particle(canvas, {
      x: ($(window).width() / 2),
      y: ($(window).height() / 2)
    })
  );
  return particles.length;
}

function createCanvas(properties) {
  var canvas = document.createElement('canvas');
  canvas.width = properties.width;
  canvas.height = properties.height;
  var context = canvas.getContext('2d');
  return {
    canvas: canvas,
    context: context
  };
}

function writeText(canvas, context, text) {
  var size = 100;
  context.font = size + "px Montserrat";
  context.fillStyle = "#111111";
  context.textAlign = "center";
  var lineheight = 70;
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i], canvas.width / 2, canvas.height / 2 + lineheight * i - (lineheight * (lines.length - 1)) / 3);
  }
}

function maskCanvas() {
  c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height);
  c3.context.globalCompositeOperation = 'source-atop';
  c3.context.drawImage(c1.canvas, 0, 0);
  blur(c1.context, c1.canvas, 2);
}

function blur(ctx, canvas, amt) {
  ctx.filter = "blur(" + amt + "px)";
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';
}

function Particle(canvas, options) {
  var random = Math.random();
  this.canvas = canvas;
  this.x = options.x;
  this.y = options.y;
  this.s = (3 + Math.random());
  this.a = 0;
  this.w = $(window).width();
  this.h = $(window).height();
  this.radius = 0.5 + Math.random() * 20;
  this.color = this.radius > 5 ? "#FF5E4C" : "#ED413C"; //this.randomColor()
}

Particle.prototype.randomColor = function () {
  var colors = ["#FF5E4C", "#FFFFFF"];
  return colors[this.randomIntFromInterval(0, colors.length - 1)];
};

Particle.prototype.randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Particle.prototype.render = function () {
  this.canvas.beginPath();
  this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  this.canvas.lineWidth = 2;
  this.canvas.fillStyle = this.color;
  this.canvas.fill();
  this.canvas.closePath();
};

Particle.prototype.move = function () {
  this.x += Math.cos(this.a) * this.s;
  this.y += Math.sin(this.a) * this.s;
  this.a += Math.random() * 0.8 - 0.4;

  if (this.x < 0 || this.x > this.w - this.radius || this.y < 0 || this.y > this.h - this.radius) {
    return false;
  }

  this.render();
  return true;
};

var c1 = createCanvas({ width: $(window).width(), height: $(window).height() });
var c2 = createCanvas({ width: $(window).width(), height: $(window).height() });
var c3 = createCanvas({ width: $(window).width(), height: $(window).height() });

var tela = c1.canvas;
var canvas = c1.context;

$("body").append(c3.canvas);
writeText(c2.canvas, c2.context, "SUBHENDU ADHIKARI\n");

function clear() {
  canvas.globalAlpha = 0.03;
  canvas.fillStyle = '#111111';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}

function update() {
  clear();
  particles = particles.filter(function (p) {
    return p.move();
  });
  maskCanvas();
  requestAnimationFrame(update.bind(this));
}

function initializeParticles() {
  particlesJS('particles-js', {
    // ... Particle.js config ...
  });
}

setInterval(popolate, frequency);
update();
initializeParticles();


/* Otherwise just put the config content (json): */
particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": false,
        "value_area": 1759.2962814874058
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1.5,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2239104358256698,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 991.6033586565377,
      "color": "#ffffff",
      "opacity": 0.2718912435025991,
      "width": 1.4394242303078775
    },
    "move": {
      "enable": true,
      "speed": 6,
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
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 179.47879358343363,
        "line_linked": {
          "opacity": 0
        }
      },
      "bubble": {
        "distance": 610.2278981836744,
        "size": 328.0334999149544,
        "duration": 1,
        "opacity": 0.3725812591626642,
        "speed": 3
      },
      "repulse": {
        "distance": 16.199185180985403,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

