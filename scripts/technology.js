import { getTechnology, setTechnology } from "./database.js"

const tech = getTechnology()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "technology") {
                setTechnology(parseInt(event.target.value))
                //window.alert(`User has chose package ${event.target.value}`)
            }
        }
)


export const Technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = tech.map(item => {
        return `<li>
            <input type="radio" name="technology" value="${item.id}" /> ${item.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}