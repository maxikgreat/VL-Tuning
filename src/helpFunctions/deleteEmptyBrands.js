export default function deleteEmptyBrands(brands, withData){
    let filteredBrands = {}
            if(brands !== undefined){
                filteredBrands = {...brands}
                Object.keys(brands).map(item => {
                    if(brands[item].data.length === 0){
                        delete filteredBrands[item]
                    }
                    return item
                })

                if(filteredBrands.length === 0){
                    return ["No data found"]
                } 
                if(withData){
                    return filteredBrands //return objects
                } else {
                    return [...Object.keys(filteredBrands)] //return keys of objects (only names)
                }
                
            }
}