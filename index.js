const reload=document.getElementById('resetBtn');
const range=document.getElementById('length');
const rangeValue=document.getElementById('lengthValue')
const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscules = "abcdefghijklmnopqrstuvwxyz";
const chiffres = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const upper=document.getElementById('uppercase')
const lower=document.getElementById('lowercase')
const numbers=document.getElementById('numbers')
const symbol=document.getElementById('symbols')
const affPass=document.getElementById('password')
const copybtn=document.getElementById('copyBtn');
// changement de la valeur du range automatiquement 
range.addEventListener('input',()=>{
    lengthValue.textContent = range.value;
})
// verifier les checkbox
const VerifyCheck=()=>{
    
    let pattern='';
    if(upper.checked){
        pattern+=majuscules;
    }
    if(lower.checked){
        pattern+=minuscules;
    }
    if(numbers.checked){
        pattern+=chiffres;
    }
    if(symbol.checked){
        pattern+=symbols;
    }
    return(pattern)
}


const genererPassword=()=>{
    const patterns = VerifyCheck();
    if (!patterns) { 
        alert("Veuillez sélectionner au moins un type de caractère !");
        return;
    }
    let length = range.value;
    let pass='';
    for(let i=0;i<length;i++){
        const index=Math.floor(Math.random()*patterns.length)
        pass+=patterns[index];
    }
    affPass.value=pass
}

copybtn.addEventListener('click', () => {
    // Vérifier que l'input n'est pas vide
    if (affPass.value === '') {
        alert("Aucun mot de passe à copier !");
        return;
    }

    // Copier le texte de l'input dans le presse-papier
    navigator.clipboard.writeText(affPass.value)
        .then(() => {
            alert("Mot de passe copié !");
        })
        .catch(() => {
            alert("Erreur lors de la copie.");
        });
});

reload.addEventListener('click',genererPassword)
   
