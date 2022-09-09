var canvas = document.getElementById('field'),
  context = canvas.getContext('2d');

// context.beginPath();
// context.moveTo(100, 150);
// context.lineTo(350, 50);
// context.stroke();

width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

// noise.seed(Math.random());
// var z = 0;
// render();

// function render() {
//   context.clearRect(0, 0, width, height);
//   var res = 15;
//   for(var x = 0; x < width; x += res) {
//     for(var y = 0; y < height; y += res) {
//       var value = getValue(x, y);
//       context.save();
//       context.translate(x, y);
//       context.rotate(value);
//       context.beginPath();
//       context.moveTo(0, 0);
//       context.lineTo(res * 1.5, 0);
//       context.stroke();
//       context.restore();
//       context.strokeStyle = 'white';
//     }
//   }
//   z += 0.01;
//   requestAnimationFrame(render);
// }

// function getValue(x, y) {
//   var scale = 0.01;
//   return noise.perlin3(x * scale, y * scale, z) * Math.PI * 2;
// }


context.lineWidth = 0.6;

var z = -1;
noise.seed(Math.random());
render();

function render() {
  context.clearRect(0, 0, width, height);
  for(var y = 0; y < height; y += 5) {
    var p = {
      x: width / 50,
      y: y, 
      vx: 0,
      vy: 0
    };
    context.beginPath();
    context.moveTo(p.x, p.y);

    for(var i = 0; i < 500; i++) {
      var value = getValue(p.x, p.y);
      p.vx += Math.cos(value) * 0.8;
      p.vy += Math.sin(value) * 0.7;
      p.x += p.vx;
      p.y += p.vy;
      context.lineTo(p.x, p.y);

      p.vx *= 0.99;
      p.vy *= 0.99;
    }
    context.stroke();
    context.strokeStyle = 'white';
  }
  z += 0.00001;
  requestAnimationFrame(render);
}

function getValue(x, y) {
  var scale = 0.005;
  return noise.perlin3(x * scale, y * scale, z) * Math.PI * 2;
}