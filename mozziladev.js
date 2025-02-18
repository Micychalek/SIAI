<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Guzik Kolor</title>
    <style>
      button {
        margin: 10px;
        font-size: 300%;
        padding: 30px;
      };
    </style>
  </head>
  <body>
    <button>zmien Kolor guzika</button>
    <script>
      const btn = document.querySelector('button');

      function random(number) {
        return Math.floor(Math.random() * (number+1));
      }

      function bgChange(e) {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        e.target.style.backgroundColor = rndCol;
        console.log(e);
      }

      btn.addEventListener('click', bgChange);
    </script>

    <input id="textBox" type="text" />
    <div id="output"></div>
    <script>
    const textBox = document.querySelector("#textBox");
    const output = document.querySelector("#output");
    textBox.addEventListener("keydown", (event) => {
    output.textContent = `nacisnales "${event.key}".`;
    });

    </script>

  </body>
</html>