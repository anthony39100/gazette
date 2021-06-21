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

username.addEventListener('change',function(){
    let regex=/^[a-z]+$/i;
    var textError=document.querySelector('.error');
    let trouve=username.value.match(regex)
    if(trouve){
        textError.innerText=" ";
    }else{
        textError.innerText="les caractères spéciaux ( ! * ? $ ...) sont interdits.";
    }
})
//verfication du nom d'utilisateur





var email=document.querySelector('#registration_form_email');
//je selectionne l'element username du formulaire 
email.addEventListener('change',function(){
    //je creer un ecouteur d'evenement au changement de l'entree du formulaire
    let Formdata=new FormData();
    //je creer un formulaire 
    Formdata.append(email.name,email.value);
 
    //je creer ma requete sur la route form-ajax
    var myHeaders = new Headers();

    var myInit = { method: 'POST',
                   headers: myHeaders,
                   body:Formdata,
                  
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request("/email-ajax",myInit);
    
    fetch(myRequest,myInit)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        var textError=document.querySelector('.error-email');
        if(response.statut==1){
           
            textError.innerText="email déjà utilisé"

        }else{
            textError.innerText=" "
        }
    });
})
//verification de l'email


//conditions général d'utilisation


var btn_cgu=document.querySelector('.btn-cgu');
btn_cgu.addEventListener('click',function(){
    var cgu=document.querySelector('#registration_form_cgu');
    cgu.checked=true

})
//verification de la taille du mot de passe
let password=document.querySelector('#registration_form_plainPassword');
password.addEventListener('change',function(){
    var textError=document.querySelector('.error-password');
    if(password.value.length<6){
        textError.innerText="votre mot de passe doit comporter minimun 6 caractères"
   
    }else{
        textError.innerText=" "
    }
})