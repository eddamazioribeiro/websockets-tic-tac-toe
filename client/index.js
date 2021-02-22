const form = document.getElementById('game-area');

const table = document.getElementById('map');
var cells = table.querySelectorAll('td');

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = (e) => {
    handleCellClick(e);
  };
}

function handleCellClick(e) {
  let value = e.target.innerHTML;
  console.log(value);
}