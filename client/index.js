import io from 'socket.io-client';

const socket = io('http://localhost:3000');
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
  let coordinate = e.target.getAttribute('data-position');
  let mark = socket.id.substring(0, 5);

  if (!value) {
    e.target.innerHTML = socket.id.substring(0, 5);
    socket.emit('message', {
      playerId: mark,
      mark: mark,
      coordinate: coordinate});
  } 
  else return;
}

function redrawTable(coordinate, mark) {
  cells.forEach(cell => {
    let coord = cell.getAttribute('data-position');

    if (coord == coordinate) {
      cell.innerHTML = mark;
    }
  });
}

socket.on('connect', () => {
  console.log(`${socket.id.substring(0, 5)} connected to server`);
});

socket.on('message', (message) => {
  let {playerId, mark, coordinate} = message;

  redrawTable(coordinate, playerId);
})

