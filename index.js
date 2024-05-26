let containerDiv = document.querySelector(".grid")


function createSquares(widthSegments , heightSegments) {
  
  console.log(widthSegments, heightSegments);
  for(i = 0; i < widthSegments * heightSegments; i++) {
    let divCreate = document.createElement("div");
    divCreate.classList.add("blocks");
    if(widthSegments == 16 && heightSegments == 16) {
      divCreate.setAttribute("style", "border-style: solid; border-width: 0.5px; width: 20px; height: 20px;")
    } else if (widthSegments == 32 && heightSegments == 32) {
      divCreate.setAttribute("style", "border-style: solid; border-width: 0.5px; width: 15px; height: 15px;")
    } else {
      divCreate.setAttribute("style", "border-style: solid; border-width: 0.5px; width: 10px; height: 10px;")
    }
    
    containerDiv.appendChild(divCreate);
  }
}

const btn1 = document.querySelector("#_16x16");
const btn2 = document.querySelector("#_32x32");
const btn3 = document.querySelector("#_64x64");
const btnReset = document.querySelector("#reset");
const theGrid = document.querySelector(".grid");

console.log(btn1, btn2, btn3);

btn1.addEventListener("click", () => {
  containerDiv.replaceChildren();
  widthSegments = 16;
  heightSegments = 16;
  createSquares(widthSegments, heightSegments);
  theGrid.setAttribute("style", "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16), 1fr;")
})

btn2.addEventListener("click", () => {
  containerDiv.replaceChildren();
  widthSegments = 32;
  heightSegments = 32;
  createSquares(widthSegments, heightSegments);
  theGrid.setAttribute("style", "grid-template-columns: repeat(32, 1fr); grid-template-rows: repeat(32), 1fr;")
})

btn3.addEventListener("click", () => {
  containerDiv.replaceChildren();
  widthSegments = 64;
  heightSegments = 64;
  createSquares(widthSegments, heightSegments);
  theGrid.setAttribute("style", "grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64), 1fr;")
})

btnReset.addEventListener("click", () => {
  containerDiv.replaceChildren();
})


