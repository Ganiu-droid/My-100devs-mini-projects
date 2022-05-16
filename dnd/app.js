//D & D
document.querySelector('button').addEventListener('click', getSpell)

function getSpell(){
    const spellName = document.querySelector('#spellName').value
    const url = `https://www.dnd5eapi.co/api/spells/${spellName}`


    fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data =>{

        data.subclasses.forEach(obj => {
            console.log(obj.name)
            //Create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.name

            //append the li to the ul
            document.querySelector('ul').appendChild(li)
        })
        // document.querySelector('iframe').src = data.classes[0].url
        document.querySelector('#spellDesc').innerText = data.desc[0]
        document.querySelector('#spellName').innerText = data.name
        // document.querySelector('#spellClass').innerText = data.classes[0]
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

}
