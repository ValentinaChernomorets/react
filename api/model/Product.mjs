class Product {
    constructor (id, name, image, price) {
        this.id = id,
        this.name = name
        this.image = image
        this.price = price
    }

    // HW*: encapsulate 'name' property
    //    : don't allow empty product name (set/get)
    //    : if name is empty - throw an error with message "Invalid product name"

}

export {Product}