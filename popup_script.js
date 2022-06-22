window.onload = function () {
  document.getElementById("submitButton").onclick = save;
  document.getElementById("clearButton").onclick = clear;
};

var placeholder_link = "www.youtube.com";

// Checks if key exists

if (localStorage.getItem("website_names") !== null) {

  var x = localStorage.getItem("website_names");
  
  var formatted = x.toString().slice(1, -1).replace(/['"]+/g, "");

  // splitted = local storage array
  var splitted = formatted.toString().split(",");


  if (splitted[0] === "") {
    document.getElementById("textbox").placeholder = placeholder_link;
  }
  else {
    document.getElementById("textbox").value = splitted[0];
  }

  if (splitted[1] === "") {
    document.getElementById("textbox2").placeholder = placeholder_link;
  }
  else {
    document.getElementById("textbox2").value = splitted[1];
  }

  if (splitted[2] === "") {
    document.getElementById("textbox3").placeholder = placeholder_link;
  }
  else {
    document.getElementById("textbox3").value = splitted[2];
  }

  if (splitted[3] === "") {
    document.getElementById("textbox4").placeholder = placeholder_link;
  }
  else {
    document.getElementById("textbox4").value = splitted[3];
  }
  
  if (splitted[4] === "") {
    document.getElementById("textbox5").placeholder = placeholder_link;
  }
  else {
    document.getElementById("textbox5").value = splitted[4];
  }

}
else {
  document.getElementById("textbox").placeholder = placeholder_link;
  document.getElementById("textbox2").placeholder = placeholder_link;
  document.getElementById("textbox3").placeholder = placeholder_link;
  document.getElementById("textbox4").placeholder = placeholder_link;
  document.getElementById("textbox5").placeholder = placeholder_link;
}


function save() {
  var name = document.getElementById("textbox").value;
  var name2 = document.getElementById("textbox2").value;
  var name3 = document.getElementById("textbox3").value;
  var name4 = document.getElementById("textbox4").value;
  var name5 = document.getElementById("textbox5").value;

  var names_formatted =
    '["' + name + "," + name2 + "," + name3 + "," + name4 + "," + name5 + '"]';


  document.getElementById("textbox").value = name;

  if (localStorage.getItem("website_names") == null) {
    localStorage.setItem("website_names", "[]");
  }

  localStorage.setItem("website_names", names_formatted);
}

function clear() {
  localStorage.clear();
  document.getElementById("textbox").value = "";
  document.getElementById("textbox2").value = "";
  document.getElementById("textbox3").value = "";
  document.getElementById("textbox4").value = "";
  document.getElementById("textbox5").value = "";
}
