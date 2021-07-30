import { getInterior, setInterior } from "./database.js"

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
                setInterior(parseInt(event.target.value))
            }
        }
)


export const Interior = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interior.map(item => {
        return `<li>
            <input type="radio" name="interior" value="${item.id}" /> ${item.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}