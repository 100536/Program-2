 // Haal het canvas element op
    var canvas = document.getElementById("myCanvas");
    
    // Stel de breedte van het canvas in
    canvas.setAttribute('width', 10000);

    // Haal de context op
    var ctx = canvas.getContext("2d");

    // Loop om 10 cirkels te tekenen
    for (var i = 1; i <= 10; i++) {
        // Bepaal de positie en grootte van elke cirkel
        var x = i * 90; // Pas de x-positie aan op basis van de iteratie
        var y = 100;     // Vaste y-positie
        var radius = i * 4; // Maak de cirkel steeds groter

        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        ctx.strokeStyle = randomColor;
   ctx.fillStyle = randomColor;
        // Teken de cirkel
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }