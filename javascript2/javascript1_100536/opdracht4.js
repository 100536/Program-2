 // Maak een loop om 10 divs aan te maken
        for (let i = 1; i <= 10; i++) {
            // Maak een nieuw div-element aan
            let div = document.createElement('div');

            // Geef elk div-element een unieke ID
            div.setAttribute("id", "div" + i);

    

            // Voeg een unieke tekst toe aan elk div-element
            div.innerText = "Dit is div " + i;

            // Voeg het div-element toe aan de body van het document
            document.body.appendChild(div);
        }