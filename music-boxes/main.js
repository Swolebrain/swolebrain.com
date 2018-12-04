$(document).ready(function(){
    var cnote = document.getElementById("c-note");
    var dnote = document.getElementById("d-note");
    var enote = document.getElementById("e-note");
    var fnote = document.getElementById("f-note");
    var gnote = document.getElementById("g-note");
    var anote = document.getElementById("a-note");
    var bnote = document.getElementById("b-note");
    $("#c").on("click mouseover keydown", playc);
    
    $("#d").on("click mouseover", playd);
    
    $("#e").on("click mouseover", playe);
    
    $("#f").on("click mouseover", playf);
    
    $("#g").on("click mouseover", playg);
    
    $("#a").on("click mouseover", playa);
    
    $("#b").on("click mouseover", playb);
    //Question 1: 
    $(document).on("keypress", function(evt){
        if (evt.keyCode === 49) playc();
        else if (evt.keyCode === 50) playd();
        else if (evt.keyCode === 51) playe();
        else if (evt.keyCode === 52) playf();
        else if (evt.keyCode === 53) playg();
        else if (evt.keyCode === 54) playa();
        else if (evt.keyCode === 55) playb();
        
    });
    function playc(){
        cnote.currentTime = 0;
        cnote.play();
    }
    function playd(){
        dnote.currentTime = 0;
        dnote.play();
    }
    function playe(){
        enote.currentTime = 0;
        enote.play();
    }
    function playf(){
        fnote.currentTime = 0;
        fnote.play();
    }
    function playg(){
        gnote.currentTime = 0;
        gnote.play();
    }
    function playa(){
        anote.currentTime = 0;
        anote.play();
    }
    function playb(){
        anote.currentTime = 0;
        anote.play();
    }
    
});
