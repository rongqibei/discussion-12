document.getElementById('sameAddress').addEventListener('click', function(){
    let billingAddress = document.getElementById('bill');
    let homeAddress = document.getElementById('home');
    if(this.checked){
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
    }
    else {
        homeAddress.value = '';
        homeAddress.disabled = false;
    }
})