# Filmo Patterns

## Constructor Pattern
Nouveau JSON : *new-movie-data*, l'ancien devient (old-movie-data).   
Création du **dossier models** avec les fichiers *Movie.js* et *OldMovie.js*

Dans *OldMovie.js*, on crée la **class OldMovie**  
Puis on ajoute les **geters**

Dans *App.js*, on remplace movies par **moviesData** dans async main()  
Puis on ajoute un **.map()**

Enfin, on va dans le *template MovieCards.js* pour modifier le chemin de l'image et ne garder que **${this._movie.picture}**
