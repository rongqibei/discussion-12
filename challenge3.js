document.querySelector('#ch3form').addEventListener('submit', function(element){
    const standingSelected = document.querySelector('input[name="standing"]:checked');
    const dateSelected = document.querySelector('input[name="gradDate"]:checked');

    if (!standingSelected || !dateSelected) {
        alert("Please select an option for both class standing and anticipated graduation date.");
        element.preventDefault();
        return false; 
    }

    return true; 
})