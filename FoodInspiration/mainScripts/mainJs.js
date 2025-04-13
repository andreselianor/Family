var meatSwitch = true;
var fishSwitch = true;
var legumesSwitch = true;
var stewSwitch = true;
var pastaSwitch = true;
var dessertSwitch = true;

function openRecipe(foodType) {
    if (foodType == 'meat') {
        let meatnodes = document.querySelectorAll(".tag.meat");
        meatnodes.forEach(element => {
            if (meatSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.meat").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.meat").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        meatSwitch = !meatSwitch;
    }
    if (foodType == 'fish') {
        let fishnodes = document.querySelectorAll(".tag.fish");
        fishnodes.forEach(element => {
            if (fishSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.fish").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.fish").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        fishSwitch = !fishSwitch;
    }
    if (foodType == 'legumes') {
        let legumesnodes = document.querySelectorAll(".tag.legumes");
        legumesnodes.forEach(element => {
            if (legumesSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.legumes").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.legumes").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        legumesSwitch = !legumesSwitch;
    }
    if (foodType == 'stew') {
        let stewnodes = document.querySelectorAll(".tag.stew");
        stewnodes.forEach(element => {
            if (stewSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.stew").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.stew").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        stewSwitch = !stewSwitch;
    }
    if (foodType == 'pasta') {
        let pastanodes = document.querySelectorAll(".tag.pasta");
        pastanodes.forEach(element => {
            if (pastaSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.pasta").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.pasta").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        pastaSwitch = !pastaSwitch;
    }
    if (foodType == 'dessert') {
        let dessertnodes = document.querySelectorAll(".tag.dessert");
        dessertnodes.forEach(element => {
            alert("dessertnodes")
            if (dessertSwitch) {
                element.style.display = "none";
                document.querySelector(".nav.dessert").style.backgroundColor = "orange";
            } else {
                element.style.display = "flex";
                document.querySelector(".nav.dessert").style.backgroundColor = "lightgoldenrodyellow";
            }
        });
        dessertSwitch = !dessertSwitch;
    }
}

function openFavorites() {

}

function openAll() {
    meatSwitch = false;
    fishSwitch = false;
    legumesSwitch = false;
    stewSwitch = false;
    pastaSwitch = false;
    dessertSwitch = false;
    fishSwitch = false;
    openRecipe('meat');
    openRecipe('fish');
    openRecipe('stew');
    openRecipe('legumes');
    openRecipe('pasta');
    openRecipe('dessert');
}

function closeAll() {
    meatSwitch = true;
    fishSwitch = true;
    legumesSwitch = true;
    stewSwitch = true;
    pastaSwitch = true;
    dessertSwitch = true;
    fishSwitch = true;
    openRecipe('meat');
    openRecipe('fish');
    openRecipe('stew');
    openRecipe('legumes');
    openRecipe('pasta');
    openRecipe('dessert');
}

closeAll();