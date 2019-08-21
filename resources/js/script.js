$(document).ready(function () {

  const canvas = $('#kaotisk-hverdag');
  const slider = $('#amount');
  const colorpicker = $('#color');

  const width = 600;
  const height = 600;

  const context = canvas[0].getContext('2d');

  $('#color').change(function () {
    canvas[0].style.backgroundColor = colorpicker.val();
  });


  $('#amount-slider-div').change(function () {
    context.clearRect(0, 0, width, height);
    for (i = 0; i < slider.val(); i++) {
      const figType = generateRandomNumber(3);
      switch (figType) {
        case 1:
          drawRandomColoredCircle();
          break;
        case 2:
          drawRandomColoredRect();
          break;
        case 3:
          drawRandomTriangle();
          break;
      }
    }
  })

  function drawRandomColoredCircle() {
    generateRandomFillStyle();
    const radius = generateRandomNumber(30);
    context.beginPath();
    context.arc(generateRandomNumber(150), generateRandomNumber(150), radius, Math.PI * 2, false);
    context.fill();
  }

  function drawRandomTriangle() {
    generateRandomFillStyle();
    const x = generateRandomNumber(100);
    const y = generateRandomNumber(100);
    const z = generateRandomNumber(40);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x * 2, y + z * 2);
    context.lineTo(x + z, y + z);
    context.closePath();
    context.fill();
  }

  function drawRandomColoredRect() {
    generateRandomFillStyle();
    context.fillRect(`${generateRandomNumber(200)}`, `${generateRandomNumber(200)}`, `${generateRandomNumber(200)}`, `${generateRandomNumber(200)}`);
  }

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function generateRandomFillStyle() {
    context.fillStyle = `rgba(${generateRandomNumber(255)}, ${generateRandomNumber(255)}, ${generateRandomNumber(255)}`;
  }
});


