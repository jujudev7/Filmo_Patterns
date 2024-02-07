# Filmo Patterns

## Constructor Pattern
Nouveau JSON : *new-movie-data*, l'ancien devient (old-movie-data).   
Création du **dossier models** avec les fichiers *Movie.js* et *OldMovie.js*

Dans *OldMovie.js*, on crée la **class OldMovie** sous le format :

```
class Movie {
    constructor(data) {
        this._title = data.title
        ...
```

Puis on ajoute les **geters**, exemple :
 ```
 get title() {
        return this._title
    }

    get picture() {
        return `/assets/${this._picture}`
    }
```

Dans *App.js*, on remplace movies par **moviesData** dans async main()  
Puis on ajoute un **.map()** :
```
.map(movie => new OldMovie(movie))
```

Enfin, on va dans le *template MovieCards.js* pour modifier le chemin de l'image et ne garder que **${this._movie.picture}**

On procède de la même manière avec *Movie.js*, on crée la **class Movie**, on crée le constructor, puis les geters avec 2 spécificités pour title et duration :
```
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
```

On importe le script dans index.html : 
```
<script src="/js/models/Movie.js"></script>
```
Et on remplace OldMovie ici et dans App.js :
```
this.moviesApi = new MovieApi('/data/new-movie-data.json')
    ...
.map(movie => new Movie(movie))
```