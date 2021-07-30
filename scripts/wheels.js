import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
                setWheels((parseInt(event.target.value)))
               //window.alert(`User has chose wheel ${event.target.value}`)
            }
        }
)


export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(item => {
        return `<li>
            <input type="radio" name="wheels" value="${item.id}" /> ${item.wheelType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}