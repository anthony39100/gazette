
//function permettant d'afficher les messages d'erreur
export function AfficherErreur(selecteur,message){
  
    var textError=document.querySelector(selecteur);
    textError.innerText=message
    textError.classList.replace('d-none','d-block')


}

export function MasquerErreur(selecteur){
  
    var textError=document.querySelector(selecteur);
    textError.innerText=" "
    textError.classList.replace('d-none','d-block')


}