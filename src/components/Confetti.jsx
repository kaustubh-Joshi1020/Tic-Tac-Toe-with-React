// import React, { useRef, useEffect } from "react";

// const Confetti = () => {
//   const canvasRef = useRef(null);

//   const possibleColors = [
//     "DodgerBlue",
//     "OliveDrab",
//     "Gold",
//     "Pink",
//     "SlateBlue",
//     "LightBlue",
//     "Gold",
//     "Violet",
//     "PaleGreen",
//     "SteelBlue",
//     "SandyBrown",
//     "Chocolate",
//     "Crimson"
//   ];

//   function randomFromTo(from, to) {
//     return Math.floor(Math.random() * (to - from + 1) + from);
//   }

//   function ConfettiParticle() {
//     this.x = Math.random() * W; // x
//   this.y = Math.random() * H - H; // y
//   this.r = randomFromTo(11, 33); // radius
//   this.d = Math.random() * maxConfettis + 11;
//   this.color =
//     possibleColors[Math.floor(Math.random() * possibleColors.length)];
//   this.tilt = Math.floor(Math.random() * 33) - 11;
//   this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
//   this.tiltAngle = 0;

//   this.draw = function() {
//     context.beginPath();
//     context.lineWidth = this.r / 2;
//     context.strokeStyle = this.color;
//     context.moveTo(this.x + this.tilt + this.r / 3, this.y);
//     context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
//     return context.stroke();
//   };
//   }

//   function drawConfetti(context, particles) {
//     const results = [];

//     // Magical recursive functional love
//     requestAnimationFrame(Draw);
  
//     context.clearRect(0, 0, W, window.innerHeight);
  
//     for (var i = 0; i < maxConfettis; i++) {
//       results.push(particles[i].draw());
//   }

//   function animateConfetti(context, canvas, particles) {
//     let particle = {};
//     let remainingFlakes = 0;
//     for (var i = 0; i < maxConfettis; i++) {
//       particle = particles[i];
  
//       particle.tiltAngle += particle.tiltAngleIncremental;
//       particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
//       particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;
  
//       if (particle.y <= H) remainingFlakes++;
  
//       // If a confetti has fluttered out of view,
//       // bring it back to above the viewport and let if re-fall.
//       if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
//         particle.x = Math.random() * W;
//         particle.y = -30;
//         particle.tilt = Math.floor(Math.random() * 10) - 20;
//       }
//     }
  
//     return results;
//   }
//   }

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     const maxConfettis = 150;
//     const particles = [];

//     for (let i = 0; i < maxConfettis; i++) {
//       particles.push(new ConfettiParticle());
//     }

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const resizeHandler = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeHandler);

//     const animationFrame = requestAnimationFrame(function draw() {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       drawConfetti(context, particles);
//       animateConfetti(context, canvas, particles);
//       requestAnimationFrame(draw);
//     });

//     return () => {
//       window.removeEventListener("resize", resizeHandler);
//       cancelAnimationFrame(animationFrame);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }} />;
// };

// export default Confetti;
