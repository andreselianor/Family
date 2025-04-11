var fishSwitch = true;

function openRecipe(foodType) {
    if (foodType == 'fish') {
        let fishnodes = document.querySelectorAll(".tag.fish");
        fishnodes.forEach(element => {
            if (fishSwitch) {
                element.style.display = "none";
            } else {
                element.style.display = "flex";
            }
        });
        fishSwitch = !fishSwitch;
    }
}