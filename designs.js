$(document).ready(function() {

  //Select size input
  let rows, cols;
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    rows = $('#inputHeight').val();
    cols = $('#inputWeight').val();
    makeGrid(); //When form is submitted by the user, call makeGrid()
  });

  //makeGrid()
  grid = $('#pixelCanvas');
  function makeGrid() {
    grid.empty();
    let cells = '';

    for (let i = 0; i < cols; i++)
    {
      cells += '<td></td>'; //Adding cells
    }

    cells = '<tr>' + cells + '</tr>'; //Creating a row

    for (let i = 0; i < rows; i++)
    {
      grid.append(cells); //Adding a row to grid
    }

  }

  //When user clicks on a cell
  $('body').on('click', 'td', function (event) {
     let cell = $(event.target).css('background-color');
     color = $('#colorPicker').val(); //Select color input
     if (cell === 'rgba(0, 0, 0, 0)') //If no color
     {
       $(event.target).css('background-color', color); //Fills cell
     }
     else
     {
       $(event.target).css('background-color', 'rgba(0, 0, 0, 0)'); //Erases cell
     }
  });

});
