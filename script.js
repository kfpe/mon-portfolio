
let DarkMode = false; // Déplace la déclaration ici

function ChangeDarkMode() {
    if (DarkMode) {
        // Mode clair
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "white");
        document.getElementById("dark-light").innerHTML = "Dark mode";
    } else {
        // Mode sombre
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.getElementById("dark-light").innerHTML = "Light mode";
    }
    DarkMode = !DarkMode; // Inverse l'état
}



function toggleMenu() {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const competencesElement = document.getElementById("competences");
    const competences = ["Html/Css", "Php", "JavaScript", "Java", "Visual Basic"];
    let index = 0;
    let charIndex = 0;
    let typing = true;

    function afficherCompétence() {
        if (typing) {
            if (charIndex < competences[index].length) {
                competencesElement.textContent += competences[index].charAt(charIndex);
                charIndex++;
                setTimeout(afficherCompétence, 100);  // Temps entre chaque lettre
            } else {
                typing = false;
                setTimeout(afficherCompétence, 2000);  // Temps d'attente avant de commencer l'effacement
            }
        } else {
            if (charIndex > 0) {
                competencesElement.textContent = competences[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(afficherCompétence, 100);  // Temps entre chaque lettre effacée
            } else {
                typing = true;
                index = (index + 1) % competences.length;  // Passer au langage suivant
                setTimeout(afficherCompétence, 500);  // Petit délai avant de commencer à écrire le langage suivant
            }
        }
    }

    afficherCompétence();
});