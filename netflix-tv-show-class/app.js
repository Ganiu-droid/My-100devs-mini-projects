//Create a Netflix TV show class with constructor that makes Netflix TV shows with 4 properties and 3 methods
class MakeNetflixTvShows {
    constructor(id, title, description, genre, rating){
        this.id = id
        this.title = title
        this.description = description
        this.genre = genre
        this.rating = rating

    }
    play = () => {
        console.log(`${this.title} is playing. Yeeeehhhh!!!`)
    }

    showTrailer = () => {
        console.log(`${this.title} trailer is now showing`)
    }

    saveToList(){
        console.log(`Save ${this.title} to my list`)
    }
}

let bridgerton = new MakeNetflixTvShows(1, 'bridgerton', 'asofiasdfeawfweaea', 'Action', '7')