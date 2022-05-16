document.querySelector('button').addEventListener('click', getBook)
document.querySelector('#bookTitle').innerText = localStorage.getItem('books')


function getBook(){
    const isbnNum = document.querySelector('input').value //9780140328721
    const url = `https://openlibrary.org/isbn/${isbnNum}.json`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data.title)
        // document.querySelector('#coverPage').src = data.cover
        if (!localStorage.getItem('books')) {
            document.querySelector('#bookTitle').innerText = data.title
        }else {
            let books = localStorage.getItem('books') + " ; " + data.title
            localStorage.setItem('books', books)
            document.querySelector('#bookTitle').innerText = localStorage.getItem('books')
        }
        //put title into the localStorage

        
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

}

