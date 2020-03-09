import fromEnToRu from "./fromEnToRu";

export default function readyDataToSend(items, total, quantity, values) {

    items.forEach((item) => {
        item.Type = fromEnToRu(item.Type)
    })

    const ready = {
        orderId: Math.random().toString(36).substr(2, 6),
        items: items,
        total: total,
        quantity: quantity,
        client:{
            name: values.name,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            city: values.city
        }
    }
    return ready
}