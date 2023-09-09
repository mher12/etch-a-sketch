const divContainer = document.getElementById('div-container');
let gridCount= 1;

while (gridCount < 257){
 const gridDivs = document.createElement('div');
 gridDivs.classList.add('grid-items')
 gridDivs.textContent = gridCount;
 divContainer.appendChild(gridDivs);
 gridCount++
 console.log(gridCount)
};
