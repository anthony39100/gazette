var username=document.querySelector('#registration_form_username');
//je selectionne l'element username du formulaire 
username.addEventListener('change',function(){
    //je creer un ecouteur d'evenement au changement de l'entree du formulaire
    let Formdata=new FormData();
    //je creer un formulaire 
    Formdata.append(username.name,username.value)
 
    //je creer ma requete sur la route form-ajax
    var myHeaders = new Headers();

    var myInit = { method: 'POST',
                   headers: myHeaders,
                   body:Formdata,
                  
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request("/form-ajax",myInit);
    
    fetch(myRequest,myInit)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        var textError=document.querySelector('.error');
        if(response.statut==1){
           
            textError.innerText="nom d'utilisateur déjà utilisé"

        }else{
            textError.innerText=" "
        }
    });
})