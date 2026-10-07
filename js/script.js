function ControlloEta() {
    let eta;
  do {
        eta = prompt("Inserisce eta: ");
        
    } while (eta == "" || isNaN(eta) || eta < 0);
    
    if(eta!=null){
    if (eta <= 5) {
        console.log(eta + " - gratis");
        alert(eta+ " - gratis");

    } else if (eta >= 18 && eta <= 25) {
        console.log(eta + " - paghi 3.5€"); 
        alert(eta + " - paghi 3.5€");           

    } else if (eta >= 50 && eta <= 55) {
        console.log(eta + " - paghi 5€");
        alert(eta + " - paghi 5€");

    } else {
        console.log(eta + " - paghi 8€");
        alert(eta + " - paghi 8€");

        }
}

}