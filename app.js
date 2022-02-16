// let btn = document.getElementById('btn');
// btn.addEventListener("click", display );
// let select = false;
// function display () {  
//     let onglet = document.querySelector('.onglet');
//     if(onglet.style.display === 'none') {             
//         onglet.style.display = 'flex'; 
//     } else {             
//         onglet.style.display = 'none'; 
//     }
// }


/* supprimer un article */
let del = document.getElementsByClassName('del');
for(let i = 0; i < del.length;i++) {
    let sup = del[i];
    sup.addEventListener("click", function () {
        let prod = sup.parentElement.parentElement.parentElement;
        prod.style.display = 'none';  
    });
}

/* calculer le total */
let total = document.querySelector('#total');
let sousT = document.querySelectorAll('.sousT');
let nbr = 0 ;
for(let i = 0; i < sousT.length;i++) {
    nbr += parseInt(sousT[i].innerText,10);
}
total.innerText = nbr;

/* ajuster en fonction de la quantité  */
let qte = document.querySelectorAll('.qte');
let prix = document.querySelectorAll('.pu');
for(let i = 0; i < qte.length;i++) {
    let moins = qte[i].previousElementSibling;
    let plus = qte[i].nextElementSibling;
    let pu = prix[i].innerText;
    moins.addEventListener("click", function (){
        let val = qte[i].innerText;
        val--;
        if(val<0){
            val=0;
        }
        qte[i].innerText = val;
        let som = val*pu;
        sousT[i].innerText = som;
        total.innerText = parseInt(total.innerText,10)- parseInt(pu,10);
    });
    plus.addEventListener("click", function (){
        let valA = qte[i].innerText;
        valA++;
        qte[i].innerText = valA;
        let som = valA*pu;
        sousT[i].innerText = som;
        total.innerText = parseInt(total.innerText,10) + parseInt(pu,10) ;
    });
}







