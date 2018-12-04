$(function(){
  var turn = "blue";
  var gameOver = false;
  var blueEdges = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  };
  var redEdges = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  };
  $('.edges').click(function(){
    if (gameOver || $(this).css("background-color") != "rgb(0, 0, 0)") return;
    $(this).css("background-color", turn);
    addEdge(turn, $(this).attr("id"));
    incrementTurn();
  });
  function incrementTurn(){
    if (turn === "blue") turn = "red";
    else turn = "blue";
  }
  function addEdge(color, id){
    var graph = redEdges;
    if (color === "blue") graph = blueEdges;
    var v1 = id.split("-")[0][1];
    var v2 = id.split("-")[1];
    graph[v1].push(v2);
    graph[v2].push(v1);
    checkWinner(color, graph, v1, v2);
  }
  function checkWinner(color, graph, v1, v2){
    for (var i = 0; i < graph[v1].length; i++){
      if (graph[v2].indexOf(graph[v1][i]) > -1){
        setTimeout(displayLoser, 0, color);
      }
    }
  }
  function displayLoser(color){
    gameOver = true;
    $("#feedback").html(color+" loses!")
  }
})
