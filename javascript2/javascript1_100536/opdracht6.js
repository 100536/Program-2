const landenPerWerelddeel = {
    afrika: ['Nigeria', 'Egypte', 'Zuid-Afrika', 'Kenia'],
    azië: ['China', 'India', 'Japan', 'Zuid-Korea'],
    europa: ['Duitsland', 'Frankrijk', 'Spanje', 'Italië'],
    'noord-amerika': ['Verenigde Staten', 'Canada', 'Mexico', 'Cuba'],
    oceanie: ['Australië', 'Nieuw-Zeeland', 'Fiji', 'Papoea-Nieuw-Guinea'],
    'zuid-amerika': ['Brazilië', 'Argentinië', 'Colombia', 'Peru']
};
for (const werelddeel in landenPerWerelddeel) {
    if (landenPerWerelddeel.hasOwnProperty(werelddeel)) {
        const landen = landenPerWerelddeel[werelddeel];
        const werelddeelDiv = document.getElementById(werelddeel);

        landen.forEach(land => {
            const landElement = document.createElement('p');
            landElement.textContent = land;
            werelddeelDiv.appendChild(landElement);
        });
    }
}