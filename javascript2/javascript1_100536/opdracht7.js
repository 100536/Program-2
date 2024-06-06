const program =Array ("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg");

let mijnDiv = document.getElementById("uitvoer");

let aantal = program.length;

mijnDiv.innerHTML = "Aantal elementen: " + aantal + "<br/>";

for(let nr=0; nr < aantal; nr++)
{
    let plaatje = document.createElement('img');
    plaatje.src = 'img/'+program[nr];
    plaatje.className = "afbeelding";
    mijnDiv.append(plaatje);
}