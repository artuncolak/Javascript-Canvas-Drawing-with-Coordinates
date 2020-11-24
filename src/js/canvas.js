const DOT_OPTIONS = { small: 2, normal: 4, large: 6 };
const LINE_OPTIONS = { thin: 1, normal: 3, thick: 5 };

function draw() {
  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");
  let coordinates = document.getElementsByClassName("coordinate");

  switch (document.getElementById("typeSelect").value) {
    case "Nokta":
      let point = coordinates[0].value.split(",");
      let size;
      switch (document.getElementById("dotOptions").value) {
        case "Küçük":
          size = DOT_OPTIONS.small;
          break;
        case "Orta":
          size = DOT_OPTIONS.normal;
          break;
        case "Büyük":
          size = DOT_OPTIONS.large;
          break;
      }
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(point[0], point[1], size, 0, 2 * Math.PI, false);
      ctx.fill();
      break;
    case "Çizgi":
      let startPoint = coordinates[0].value.split(",");
      ctx.beginPath();
      ctx.moveTo(startPoint[0], startPoint[1]);
      switch (document.getElementById("lineOptions").value) {
        case "İnce":
          ctx.lineWidth = LINE_OPTIONS.thin;
          break;
        case "Normal":
          ctx.lineWidth = LINE_OPTIONS.normal;
          break;
        case "Kalın":
          ctx.lineWidth = LINE_OPTIONS.thick;
          break;
      }
      for (let i = 1; i < coordinates.length; i++) {
        let point = coordinates[i].value.split(",");
        ctx.lineTo(point[0], point[1]);
      }
      ctx.stroke();
      break;
    case "Poligon":
      let polyStartPoint = coordinates[0].value.split(",");

      ctx.beginPath();
      ctx.moveTo(polyStartPoint[0], polyStartPoint[1]);
      for (let i = 1; i < coordinates.length; i++) {
        let point = coordinates[i].value.split(",");
        ctx.lineTo(point[0], point[1]);
      }
      ctx.closePath();

      switch (document.getElementById("polyOptions").value) {
        case "Dolu":
          ctx.fillStyle = "#1f4287";
          ctx.fill();
          break;
        case "Taralı":
          var p = document.createElement("canvas");

          p.width = 32;
          p.height = 16;
          var pctx = p.getContext("2d");

          var x0 = 36;
          var x1 = -4;
          var y0 = -2;
          var y1 = 18;
          var offset = 32;

          pctx.strokeStyle = "#1f4287";
          pctx.lineWidth = 2;
          pctx.beginPath();
          pctx.moveTo(x0, y0);
          pctx.lineTo(x1, y1);
          pctx.moveTo(x0 - offset, y0);
          pctx.lineTo(x1 - offset, y1);
          pctx.moveTo(x0 + offset, y0);
          pctx.lineTo(x1 + offset, y1);
          pctx.stroke();

          ctx.fillStyle = ctx.createPattern(p, "repeat");
          ctx.fill();
          break;
      }
      ctx.stroke();
      break;
  }
}
