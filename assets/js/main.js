
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
let matches = document.querySelectorAll("div");
console.log(`Total number of HTML elements: ${matches.length} `);


document.addEventListener('mousemove', (event) => {
  var x = event.clientX;
  var y = event.clientY;
  var coordinates = "X: " + x + ", Y: " + y;
  document.getElementById("display").innerHTML = coordinates;
});
