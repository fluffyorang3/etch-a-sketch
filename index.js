let containerDiv = document.querySelector(".grid")

function createSquares(widthSegments = 16, heightSegments = 16) {
  for(i = 0; i < widthSegments * heightSegments; i++) {
    let divCreate = document.createElement("div");
    divCreate.classList.add("blocks");
    divCreate.setAttribute("style", "border-style: solid; width: 20px; height: 20px;")
    containerDiv.appendChild(divCreate);
  }
}

createSquares();