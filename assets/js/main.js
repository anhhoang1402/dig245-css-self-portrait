
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
const matches = document.querySelectorAll("div");
const number = matches.length;
console.log(number);


document.addEventListener('mousemove', (event) => {
  var x = event.clientX;
  var y = event.clientY;
  var coordinates = "X: " + x + " Y: " + y;
  document.getElementById("display").innerHTML = coordinates;
});
