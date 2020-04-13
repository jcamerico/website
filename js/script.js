/**
 * Created by jcamerico on 06/03/17.
 */

function openSection(evt, sectionId) {
    var x = document.getElementsByTagName("section");
    for (var i = 0; i < x.length; i++) {
        x[i].className = "closed";
    }
    document.getElementById(sectionId).className = "open";
    colorTargetTabButtonOnly(evt);
}

function colorTargetTabButtonOnly(evt){
    var buttons = document.getElementsByClassName("w3-bar-item");
    for (var i =0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace(" w3-red", "");
    }
    evt.currentTarget.className += " w3-red";
}