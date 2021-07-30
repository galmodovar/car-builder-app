import { getPaint, setPaint } from "./database.js"

const items = getPaint()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "color") {
                setPaint(parseInt(event.target.value))
                //window.alert(`User has chose color ${event.target.value}`)
            }
        }
)


export const Paint = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = items.map(item => {
        return `<li>
            <input type="radio" name="color" value="${item.id}" /> ${item.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}