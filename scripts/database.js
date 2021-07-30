

const database = {
    customOrders: [],

    orderBuilder: {},

    paint: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 550}
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 405 },
        { id: 2, type: "Charcoal Fabric", price: 782 },
        { id: 3, type: "White Leather", price: 1470 },
        { id: 4, type: "Black Leather", price: 1997 },
    ],
    technology: [
        { id: 1, package: "Basic Package", price: 12.42 },
        { id: 2, package: "Navigation Package", price: 736.4 },
        { id: 3, package: "Visibility Package", price: 1258.9 },
        { id: 4, package: "Ultra Package", price: 1795.45 },
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 12.42 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 736.4 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 1258.9 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 1795.45 },
    ],
    type: [
        { id: 1, type: "Car" },
        { id: 2, type: "SUV" },
        { id: 3, type: "Truck" }
    ]
}

// Functions make a copy of our data to be used in other modules

export const getPaint = () => {
    return database.paint.map(item => ({...item}))
}

export const getInterior = () => {
    return database.interior.map(item => ({...item}))
}
export const getTechnology = () => {
    return database.technology.map(item => ({...item}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getType = () => {
    return database.type.map(item => ({...item}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
//Functions responsible for setting State when a click event takes place

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}


//function will take the temporary choices being stored in 
//the orderBuilder state object and make them permanent.

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    let lastIndex = null
    if (database.customOrders.length === 0) {
        lastIndex = 0;
        newOrder.id = lastIndex + 1
    } else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1

    }

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}