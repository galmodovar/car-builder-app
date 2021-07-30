import { getType, setType } from "./database.js"

const items = getType()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "type") {
                setType(parseInt(event.target.value))
                //window.alert(`User has chose color ${event.target.value}`)
            }
        }
)


export const Type = () => {
    let html = ""

    // Use .map() for converting objects to <li> elements
    const listItems = items.map(item => {
        return `
            <input type="radio" name="type" value="${item.id}" /> ${item.type}
        `
    })

    html += listItems.join("")
    html += ""

    return html
}