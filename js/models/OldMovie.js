class OldMovie {
    constructor(data) {
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }

    // on ajoute les geters pour accéder aux propriétés de l'objet
    get title() {
        return this._title
    }

    get picture() {
        return `/assets/${this._picture}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }

    get duration() {
        return this._duration
    }

    get duration() {
        return this._duration
    }

    get released_in() {
        return this._released_in
    }
}