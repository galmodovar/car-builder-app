import { Paint } from "./paintcolor.js"
import { Technology } from "./technology.js"
import { Interior } from "./interior.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"
import { Type } from "./type.js"


//event listener waiting for a click that matched id of orderButton
//if target.id matches orderButton id - addCustomOrder() will run
document.addEventListener(
    "click",
    (event) => {if (event.target.id === "orderButton") {
        addCustomOrder()
    }
    }
)

export const CarBuilder = () => {
    return `
        <h1>Car Builder</h1>

        <article class="choices">
            <section class="choices__color options">
                <h2>Paint Color</h2>
                ${ Paint() }
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${ Interior()}
               
            </section>
            <section class="choices__technology options">
                <h2>Tech Option</h2>
               ${ Technology() }
            </section>
            <section class="choices__wheel options">
                <h2>Wheel Type</h2>
                ${ Wheels()}
               
            </section>
        </article>

        <article class="type">
        <h2>Type</h2>
        ${ Type() }
        </article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}