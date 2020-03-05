

export default function KeyboardFix() {

    const inputs = document.querySelectorAll("input")

    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            window.scroll(0,0);
        })
    })

}