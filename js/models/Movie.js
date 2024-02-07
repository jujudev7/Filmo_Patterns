class Movie {
    constructor(data) {
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    // on ajoute les geters pour accéder aux propriétés de l'objet
    get synopsis() {
        return this._synopsis
    }
    
    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }
    
    // on crée une ternaire pour choisir le titre français s'il existe, sinon on affiche le titre anglais 
    get title() {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['en']
    }

    // on convertit le nombre de minutes total au format XX h XX
    get duration() {
        const hours = Math.floor(this._duration / 60)
        const minutes = this._duration % 60
        return `${hours}h${minutes}`
    }

    get released_in() {
        return this._released_in
    }
}