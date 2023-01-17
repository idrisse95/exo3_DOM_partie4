// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let exo1 = document.querySelector('h1')
exo1.classList='text-blue'

// ### 2. Au double clique du h3, rajoute la class text-error
let exo2 = document.querySelector('h3')
exo2.addEventListener('dblclick', () => {
    exo2.classList='text-error'
})


// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let exo3 = document.querySelector('p')
exo3.addEventListener('click', () => {
    exo3.classList.toggle('text-style')
})



// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique

//     exo4.forEach(element => {
//         element.addEventListener('click', () => {
//       console.log(element);
//     });
// })
// for (let i = 0; i < exo4.length; i++) {
//     exo4.addEventListener('click', () => {
//         console.log('eee');
//     })
// }

let exo4 = document.querySelectorAll('p:nth-child(4) span')
exo4.forEach(element => {
    element.addEventListener('click', () => {
        element.classList="bolder"
    } )})

// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let exo5 = document.querySelectorAll('p:nth-child(5) span')
exo5.forEach(element => {
    element.addEventListener('click', () => {
        
       if (element[0].classList="bolder-red") {
        element[1].classList.remove("bolder-red")
        element[2].classList.remove("bolder-red")
       }
        // element[0].classList.toggle("bolder-red")
       

        // element[0].classList.remove("bolder-red")
        // element[1].classList.toggle("bolder-red")
        // element[2].classList.remove("bolder-red")
    } )})


    let exo5p = document.querySelectorAll('p')[2]
    let span1 = exo5p.querySelectorAll('span')[0];
    
    
    
    
    span1.addEventListener('click', ()=>{
        span1.classList.add('bolder-red')
        span2.classList.remove('bolder-red')
        span3.classList.remove('bolder-red')
    })
    
    let span2 = exo5p.querySelectorAll('span')[1];
    span2.addEventListener('click', ()=>{
        span2.classList.add('bolder-red')
        span1.classList.remove('bolder-red')
        span3.classList.remove('bolder-red')
    })
    
    let span3 = exo5p.querySelectorAll('span')[2];
    span3.addEventListener('click', ()=>{
        span3.classList.add('bolder-red')
        span2.classList.remove('bolder-red')
        span1.classList.remove('bolder-red')
    })