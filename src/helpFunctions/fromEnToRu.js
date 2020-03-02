export default function fromEnToRu(localStuff){
    switch(localStuff){
        case "Visors":
            return "Ветровики"
        case "Chrome":
            return "Ветр. хром"
            break
        case "Hood":
            return "Мухобойки"
            break
        case "Back":
            return "Спойлера заднего стекла"
            break
        default:
            return localStuff
    }
}