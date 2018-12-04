function setUpPieces() {
    //select all the divs with class 'piece'
    $(".piece").each( (i,e) => {
       i<12?$(e).addClass("light"):$(e).addClass("dark");
    });
    //add the 'light' class to half of them
    //add the 'dark' to the other half
    
}


function movePieceTo($piece,newTop,newLeft) {
    //set the css 'top' and 'left'
    //attributes of the passed piece
    //to the arguments newTop and newLeft
    $piece.css({top: newTop, left: newLeft});
}

function setUpBoard() {
    //iterate through all of the divs 
  $(".square").each( (i, e, x) => {
    lightOrDark(i)===0?$(e).addClass("light"):$(e).addClass("dark");
    
  } );
    //with class `square`
    //figure out whether each one should be
    //light or dark, and assign the proper class
    
    //heres a helper function that takes a number between
    //0 and 63 (inclusive) and returns 1 if the square should be
    //dark, and 0 if the square should be light
    function lightOrDark(index) {
        var x = index % 8;
        var y = Math.floor(index / 8);
        var oddX = x % 2;
        var oddY = y % 2;
        return (oddX ^ oddY);
    }
    


}

function toggleSelect($piece) {
    //if $piece has the class 'selected',
    //remove it
  if ($piece.hasClass("selected")) $piece.removeClass("selected");
  else{
    if ($(".selected").length === 0){
      $piece.addClass("selected");
    }
  }
    //if $piece does not have the class 'selected'
    //make sure no other divs with the class 'piece'
    //have that class, then set $piece to have the class
    
}

function incrementMoveCount() {
    //gets the html of the span with id
    //moveCount
    var count = parseInt($("#moveCount").html());
    $("#moveCount").html(++count);
    //turns it into a number
    //increments it by one
    //sets the html of the span with id moveCount
    //to the new move count
    fbMoveCount.set(count);
}

/*
  Looks at all the elements with clas piece and builds an array with
  their color, top and left coordinate.
*/
function buildPiecesArray(){
  var pieces = [];
  $(".piece").each(function(i, e){
    var yCoord = $(e).css("top");
    yCoord = yCoord.substring(0, yCoord.length-2);
    var xCoord = $(e).css("left");
    xCoord = xCoord.substring(0, xCoord.length-2);
    var coords = getCoords(yCoord, xCoord);
    //coords.color = $(e).hasClass("light")?"light":"dark";
    pieces.push(coords);
  });
  return pieces;
}

/*
  Receives an array with the same kind of structure as the one produced above
  and uses it to reposition all the game pieces.
*/
function movePiecesBasedOnArray(arr){
  console.log(arr);
  $(".piece").each( function(i,e){
    var cssTopLeft= getPixels(arr[i].x, arr[i].y);
    $(e).css(cssTopLeft);
  });
}

function resetBoard(){
  var pieces = [];
  for (var index = 0; index < 12; index++){
    //turning the index (from 0 - 11)
    //into a x,y square coordinate using math
    var yc = Math.floor(index / 4);
    var xc = (index % 4) * 2 + (1 - yc%2);
    pieces.push({ x : xc,   y : yc });
  }
  for(var index = 0; index < 12; index++){
    //turning the index (from 0 - 11)
    //into a x,y square coordinate using math
    var yc = Math.floor(index/4) + 5;
    var xc = (index % 4) * 2 + (1-yc%2);
    pieces.push( {x: xc, y: yc}  );
  }
  checkersGame.set(pieces);
  fbMoveCount.set(0);
}

function resetMoves(){
  $("#moveCount").html("0");
}
