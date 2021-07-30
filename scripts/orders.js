import { getInterior, getOrders, getPaint, getTechnology, getType, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const paint = getPaint()
    const interior = getInterior()
    const tech = getTechnology()
    const wheels = getWheels()
    const type = getType()

// Remember that the function you pass to find() must return true/false
    const foundPaint = paint.find(
        (item) => {
            return item.id === order.paintId
            }
        )
    const foundInterior = interior.find(
        (object) => {
            return object.id === order.interiorId
            }
        )
    const foundTechnology = tech.find(
        (item) => {
            return item.id === order.techId
            }
        )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
            }
        )
    const foundType = type.find(
        (carType) => {
            return carType.id === order.typeId
            }
        )
    
    const totalCost = () => {
        
        let defaultCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price

        if(foundType === undefined) {
            return defaultCost
        } else if (foundType.id === 2) {
            return defaultCost * 1.5
        } else if (foundType.id === 3) {
            return defaultCost * 2.25
        } else {
            return defaultCost
        }
    }
                
        const costString = totalCost().toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        
        return `<li>
            Order #${order.id} was placed on ${order.timestamp}
            and it costs ${costString}
        </li>`
        
    }


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



