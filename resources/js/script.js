$(document).ready(function () {
  const documentation = $('#documentation');
  const canvas = $('#urolig-solnedgang-canvas');
  const width = 400;
  const height = 400;
  const context = canvas[0].getContext('2d');
  let animation = null;

  setUpCanvas();

  canvas.mouseenter(function () {
    currentYpos = 50;
  });

  canvas.hover(function () {
    //avoid stacking animation
    if (animation) {
      cancelAnimationFrame(animation);
    }
    animate();
  });

  canvas.mouseout(function () {
    unMount();
  });

  function animate() {
    animation = requestAnimationFrame(animate);
    clearCanvas();
    updateCanvas();
    if (currentYpos >= 350) {
      setUpCanvas();
      return;
    }
  }

  function unMount() {
    cancelAnimationFrame(animation);
    animation = null;
    clearCanvas();
    setUpCanvas();
  }

  function setUpCanvas() {
    setBackground();
    drawSun();
    drawGrass();
    drawTrees();

  }

  function updateCanvas() {
    setBackground();
    drawSun();
    drawTrees();
    drawGrass();
  }

  function setBackground() {
    animation ? canvas[0].style.backgroundColor = 'black' : canvas[0].style.backgroundColor = '#1740f7';
  }

  function drawSun() {
    context.beginPath();
    context.lineWidth = 8;
    context.strokeStyle = 'red';
    if (animation) {
      context.fillStyle = '#660000';
      context.arc(200, currentYpos, 40, 0, 2 * Math.PI);
      currentYpos += 1;
    }
    else {
      context.fillStyle = 'yellow';
      context.arc(200, 50, 40, 0, 2 * Math.PI);
    }
    context.stroke();
    context.fill();
    context.closePath();
  }

  function drawGrass() {
    animation ? context.fillStyle = 'grey' : context.fillStyle = 'rgb(0, 255, 0)';
    context.fillRect(0, 300, 400, 1000);
  }

  function drawTrees() {
    drawTreeTops();
    drawTreeTrunks();
  }

  function drawTreeTops() {
    context.beginPath();
    animation ? context.fillStyle = 'grey' : context.fillStyle = 'green';
    context.moveTo(0, 240);
    context.lineTo(120, 240);
    context.lineTo(55, 10);
    context.moveTo(240, 220);
    context.lineTo(400, 220);
    context.lineTo(325, 25);
    context.fill();
    context.closePath();
  }

  function drawTreeTrunks() {
    animation ? context.fillStyle = 'grey' : context.fillStyle = 'brown';
    context.fillRect(300, 220, 50, 80);
    context.fillRect(40, 240, 40, 60);
  }

  function clearCanvas() {
    context.beginPath();
    context.clearRect(0, 0, width, height);
  }

  $('#doc-link').click(function () {
    documentation.css('display') === 'none' ?
      documentation.css('display', 'block') :
      documentation.css('display', 'none');
    window.scrollTo(0, document.body.scrollHeight);
  });
});