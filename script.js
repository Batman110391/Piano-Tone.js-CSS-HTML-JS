var synth = new Tone.Synth({
  oscillator: {
    type: "triangle",
  },
}).toMaster();
var data = ["C", "D", "E", "F", "G", "A", "B"];
var notes = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
var html = "";

for (var octave = 0; octave < 2; octave++) {
  for (var i = 0; i < data.length; i++) {
    var note = data[i];
    var hasSharp = ["E", "B"].indexOf(note) == -1;

    html += `<div class='whitenote' onmousedown='noteDown(this, false)' onmouseup='noteUp(this,false)' onmouseleave='noteUp(this,false)' data-note='${
      note + (octave + 4)
    }'> <label>${notes[i]}</label> </div>`;

    if (hasSharp) {
      html += "<div class='linee'>";
      html += `<div class='blacknote' onmousedown='noteDown(this, true)' onmouseup='noteUp(this, true)' onmouseleave='noteUp(this,true)' data-note='${
        note + "#" + (octave + 4)
      }'><label class='blackNotes'>${notes[i] + "<br>#"}</label></div></div>`;
    }
  }
}

document.getElementById("container").innerHTML = html;

function noteUp(elem, isSharp) {
  elem.style.background = isSharp ? "#777" : "";
}

function noteDown(elem, isSharp) {
  var note = elem.dataset.note;

  elem.style.background = isSharp ? "black" : "#ccc";
  synth.triggerAttackRelease(note, "16n");
}
