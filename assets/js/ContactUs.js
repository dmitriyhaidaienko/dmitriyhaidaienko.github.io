const inputs = document.querySelectorAll(".input");

function focusFunch() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.add("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunch);
});