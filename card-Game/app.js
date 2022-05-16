let deck_id = ''
document.querySelector('button').addEventListener('click', drawTwo)

//Draw a deck of cards
fetch(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        deck_id = data.deck_id

    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

//Draw two cards 
function drawTwo(){

    const url =`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2` 
    fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data =>{
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)

        if(player1Val > player2Val){
            document.querySelector('#result').innerText = 'Player 1 wins'
        } else if(player1Val < player2Val){
            document.querySelector('#result').innerText = 'Player 2 wins'
        }
        else{
            document.querySelector('result').innerText = 'Time for war'
    }
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

}
// An helper function to Convert all card values to numbers where necessary
function convertToNum(val){
    if (val === 'KING'){
        return 14
    }
    else if (val === 'QUEEN'){
        return 13
    }
    else if (val === 'JACK'){
        return 12
    }
    else if (val === 'ACE'){
        return 11
    }
    else {
        return val
    }
}

