// Variable de l'écran
let écran = document.getElementById("écran");
console.log(`écran == ${écran}.`);

// Variable des boutons
let boutons = document.getElementsByTagName("button");

// Boucle d'affichage des boutons
for(let b = 0; b < boutons.length; b++)
{
    console.log(`Bouton N°${b} == ${boutons[b].innerText}.`);
}

// Fonction pour ajouter un chiffre à l'écran
function Chiffre(b)
{
    écran.value += boutons[b].innerText; 
    console.log(`écran.value == ${écran.value}.`);
}

// Fonction pour ajouter un opérateur à l'écran
function Opérateur(txt)
{
    écran.value += txt; 
    console.log(`écran.value == ${écran.value}.`);
}

// Fonction pour calculer le montant affiché à l'écran
function Calcul()
{
    let total = eval(écran.value);
    console.log(`total == ${total}.`);
    écran.value = total;
}

// Fonction pour supprimer le dernier caractère
function SupprDernierCaractère()
{
    let txtÉcran = écran.value;
    let txtÉcranSuppr = txtÉcran.substring(0, txtÉcran.length-1);
    écran.value = txtÉcranSuppr;
}

// Fonction pour remettre l'écran à zéro
function Cancel()
{
    écran.value = "";
}

// Fonction pour calculer le carré de la valeur affichée à l'écran
function Carré()
{
    let carré = eval(écran.value * écran.value);
    écran.value = carré;
}

// Fonction pour calculer la racine carrée de la valeur affichée à l'écran
function RacineCarré()
{
    let racineCarré = eval(Math.sqrt(écran.value));
    écran.value = racineCarré;
}