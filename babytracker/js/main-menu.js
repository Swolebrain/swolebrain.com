$("#left-boob").click(function(){
  $("#reports").fadeOut();
  $("#stopwatch").fadeIn();
  $("#stopwatch").attr("eventname", "leftboob");
});

$("#right-boob").click(function(){
  $("#reports").fadeOut();
  $("#stopwatch").fadeIn();
  $("#stopwatch").attr("eventname", "rightboob");
});

$("#pee, #poo").click(function(){
  $("#reports").fadeOut();
  $("#opts12").show();
  saveEvent($("#opts-feedback"), {
    name: $(this).attr("id").slice(-3),
    time: new Date().getTime()
  })
});

$("#begin-feed").click(beginFeed);

$("#view-reports").click(reportsHandler);
function reportsHandler(){
  var feedings = [];
  var events = [];
  var midnight = new Date();
  midnight.setHours(0); midnight.setMinutes(0); midnight.setSeconds(0); midnight.setMilliseconds(0);
  currentUser.child("feedings").orderByValue().startAt(midnight.getTime())
    .once("value", function(snapshot){
      snapshot.forEach(function(data){ //use data.key() and data.val()
        feedings.push({startTime:data.val()});
      });
      //get breast started and total mins - NEEDS FIXING
      currentUser.child("events").orderByChild("time").startAt(midnight.getTime())
      .once("value", function(snapshot){
        snapshot.forEach( function(data){ events.push(data.val()); });
        createAndAppendFeedings(events, feedings);
      });
  });
}

function createAndAppendFeedings(events, feedings){
  console.log(events);
  console.log(feedings);
  $("#spa-panel>div").hide();
  $("#reports").fadeIn();
  $("#reports").find("tbody").html("");
  var numpees = 0, numpoos = 0, lastBreast;
  //console.log(feedings);
  feedings = feedings.map(function(e, i, arr){
    e.duration = 0;
    for (var x in events){
      //console.log(events[x]);
      if (!events[x]) continue;
      if ( (events[x].name === "leftboob" || events[x].name === "rightboob") &&
         ( i === arr.length-1 || arr[i+1].startTime > events[x].time)){
        if (!e.hasOwnProperty("breast"))
          e.breast = events[x].name.substring(0, events[x].name.length-4);
        lastBreast = events[x].name.substring(0, events[x].name.length-4);
        e.duration += events[x].duration;
        delete events[x];
      }
      else if (events[x].name === "pee") numpees++;
      else if (events[x].name === "poo") numpoos++;
    }
    return e;
  });
  //console.log("feedings:"); 
  feedings.forEach(function(e,idx){
    //console.log(e);
    var d = new Date(e.startTime).toLocaleTimeString();
    var mins = Math.round(e.duration/6000)/10;
    $("#reports").find("tbody").append(`
      <tr>
        <td>${d}</td>
        <td>${mins}</td>
        <td>${e.breast}</td>
      </tr>`);  
  });
  $("#pees-today").html(numpees);
  $("#poos-today").html(numpoos);
  $("#lastboob").html(lastBreast);
}
