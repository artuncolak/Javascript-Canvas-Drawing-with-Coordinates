function createCanvas() {
  let canvas = document.createElement("canvas");
  canvas.id = "drawingCanvas";
  canvas.height = $("#height").val();
  canvas.width = $("#width").val();

  $("#containerCanvas").html(canvas);
  $("#addButton").prop("disabled", false);
}

function addCoordinateInput() {
  let input = document.createElement("input");
  input.type = "text";
  input.id = "coordinate";
  input.placeholder = "x,y";
  input.className = "form-control text-center mt-3 coordinate";
  input.required = true;
  $("#coordinates").append(input);
}

function typeOnChange() {
  let type = $("#typeSelect").val();
  $("#coordinates").html("");
  addCoordinateInput();
  let select = $("<select></select>").addClass("form-control", "mb-2");

  switch (type) {
    case "Nokta":
      $("#addCoordinateButton").css({ display: "none" });
      select.prop("id", "dotOptions");
      select.append("<option>Küçük</option>");
      select.append("<option>Orta</option>");
      select.append("<option>Büyük</option>");
      break;
    case "Çizgi":
      $("#addCoordinateButton").css({ display: "block" });
      select.prop("id", "lineOptions");
      select.append("<option>İnce</option>");
      select.append("<option>Normal</option>");
      select.append("<option>Kalın</option>");
      addCoordinateInput();
      break;
    case "Poligon":
      $("#addCoordinateButton").css({ display: "block" });
      select.prop("id", "polyOptions");
      select.append("<option>Boş</option>");
      select.append("<option>Dolu</option>");
      select.append("<option>Taralı</option>");
      addCoordinateInput();
      break;
  }

  $("#options").html(select);
}
