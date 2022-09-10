var canvas2 = document.getElementById('field2'),
  ctx = canvas2.getContext('2d');


w = canvas2.w = window.innerWidth,
h = canvas2.h = window.innerHeight;

ctx.lineWidth = 1;

var z2 = 5;
noise.seed(Math.random());
render2();

function render2() {
  ctx.clearRect(0, 0, w, h);
  for(var y2 = 0; y2 < h; y2 += 5) {
    var p2 = {
      x2: w / 100,
      y2: y2, 
      vx2: 0,
      vy2: 0,
    };
    ctx.beginPath();
    ctx.moveTo(p2.x2, p2.y2);

    for(var i = 0; i < 500; i++) {
      var value2 = getValue(p2.x2, p2.y2);
      p2.vx2 += Math.cos(value2) * 0.1;
      p2.vy2 += Math.sin(value2) * 0.5;
      p2.x2 += p2.vx2;
      p2.y2 += p2.vy2;
      ctx.lineTo(p2.x2, p2.y2);

      p2.vx2 *= 0.99;
      p2.vy2 *= 0.99;
    }
    ctx.stroke();
    ctx.strokeStyle = 'white';
  }
  z2 += 0.1;
  requestAnimationFrame(render2);
}

function getValue(x2, y2) {
  var scale = 0.005;
  return noise.perlin3(x2 * scale, y2 * scale, z2) * Math.PI * 1.2;
}