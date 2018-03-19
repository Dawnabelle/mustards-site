$(document).ready(function() {

jQuery("h1").click(function() {
  alert("That's a good boy!");
});

jQuery("p").click(function() {
  alert("Mustard, SIT!");
});

jQuery("img").click(function() {
  prompt ("Do you think Mustard is cute?")
});
jQuery("h2").click(function() {
  var sentence = prompt("Enter a sentence about Mustard.")
  var stringLength = sentence.length;
  var firstLast = sentence.charAt(0) + sentence.charAt(stringLength - 1);
  firstLast.toUpperCase();
  alert(sentence);
  var lastFirst = firstLast.charAt(0) + firstLast.charAt(1);
  alert(lastFirst.toUpperCase());
  var lastFirst = firstLast.charAt(1) + firstLast.charAt(0);
  alert(lastFirst.toUpperCase());
});

});
