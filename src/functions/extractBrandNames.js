export default function extractBrandNames(items){
    let names = []
    items.forEach((item) => {
        let name = item.split("/").pop().replace(/\.[^/.]+$/, "")
        let nameSplited = name.replace("_", " ")
        let nameCapitalized = nameSplited.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        
        names.push(nameCapitalized.length === 2 ? nameCapitalized.toUpperCase() : nameCapitalized)
    })
    console.log(names)
    return names
}