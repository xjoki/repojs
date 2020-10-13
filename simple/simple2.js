function simpleFunc() {
    let selectElement = document.getElementById('auswahl');
    let options = ['Sehr gut','Gut','Befriedigend', 'Ausreichend','Mangelhaft','Ungenügend'];
    for(let i=0; i<options.length; i++) {
        let optionElement = document.createElement('option');
        let optionText = document.createTextNode(options[i]);
        optionElement.appendChild(optionText);
        selectElement.appendChild(optionElement);
    }
}