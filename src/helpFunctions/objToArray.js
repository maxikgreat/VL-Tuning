
export default function objToArray(objects){

    const arr = []

    if(objects){
        Object.entries(objects).map(item => {
            item[1].id = item[0]
            arr.push(item[1])
        })
    }

    return arr

}