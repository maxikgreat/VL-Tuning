export default function readyDataToSend(items, total, quantity) {
    const ready = {
        orderId: Math.random().toString(36).substr(2, 6),
        items: items,
        total: total,
        quantity: quantity
    }
    return ready
}