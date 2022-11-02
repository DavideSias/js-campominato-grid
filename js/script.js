/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const elePlay = document.querySelector('.btn-play');

elePlay.addEventListener('click', function(){

    const eleGrid = document.querySelector('.grid');
    eleGrid.replaceChildren();
    const eleDifficulty = document.querySelector('#difficulty').value;
    
    
    if (eleDifficulty === 'easy'){
        for (let i = 1; i < 101; i++) {
            eleCell = document.createElement('div');
            eleCell.classList.toggle('cell-100');
            eleGrid.append(eleCell);
            eleCell.innerHTML = [i];   

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }    
    } else if (eleDifficulty === 'medium'){
        for (let i = 1; i < 82; i++) {
        
            eleCell = document.createElement('div');
            eleCell.classList.add('cell-81');
            eleGrid.append(eleCell);
            eleCell.innerHTML = [i];
        
            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }
    } else if (eleDifficulty === 'hard'){
        for (let i = 1; i < 50; i++) {
          
            eleCell = document.createElement('div');
            eleCell.classList.add('cell-49');
            eleGrid.append(eleCell);
            eleCell.innerHTML = [i];
        
            eleCell.addEventListener('click', function() {
                this.classList.toggle('active');
                console.log([i]);
            });                
        }
    }
})