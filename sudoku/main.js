var URL = 'http://fvi-grad.com:4004/sudoku';
console.log($("td"));
function handleResize(){
  var w = $("td").width();
  $("td").css("height", w+"px");
}
window.onresize = handleResize;
$.ajax({
  url: URL,
  success: function(res, txt, xhr){
    for (var row = 0; row < res.length; row++){
      var $newRow = $(`<tr id='row${row}'></tr>`);
      for (var col = 0; col < res[row].length; col++){
        if (res[row][col].length != 0)
          $newRow.append(`<td id='r${row}c${col}'>${res[row][col]}</td>`)
        else {
          $newRow.append(`
            <td id='r${row}c${col}'>
              <input type='text' />
            </td>
            `);
        }
      }
      $("tbody").append($newRow);
    }
    handleResize();
  }
});

function getData(){
  var cells = document.querySelectorAll("td");
  var result = new Array(9).fill(0).map(e => new Array(9).fill(0));
  for (var i = 0; i < cells.length; i++){
    if ( cells[i].innerHTML.length > 1 ){
      result[parseInt(i/9)][i%9] = cells[i].children[0].value;
    }
    else{
      result[parseInt(i/9)][i%9] = cells[i].innerHTML;
    }
  }
  return result;
}

function checkSolution(){
  $.ajax({
    url: URL,
    method: 'POST',
    data: {board: getData()},
    success: function(res, txt, xhr){
      alert("Validation result: "+res);
    }
  })
}

$("#validate").on("click", checkSolution);
