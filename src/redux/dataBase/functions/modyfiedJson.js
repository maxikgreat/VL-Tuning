import DATABASE from '../../../initialBd.json'
import getAllBrands from './getAllBrands'

export default function modyfiedJson(){

    const getManufacturer = (name) => {
        if(name.includes("cobra tuning")){
            return "Cobra Tuning"
        } else if(name.includes("alvi")){
            return "ALVI"
        } else if(name.includes("vt-52")){
            return "VT-52"
        } else if (name.includes("vl-tuning")){
            return "VL-Tuning"
        } else if (name.includes("anv air")){
            return "ANV air"
        } else if(name.includes("faber")){
            return "Faber"
        } else if (name.includes("sim")){
            return "SIM"
        }
        else return "Unknown"
    }

    let brands = getAllBrands()
    let brandsNames = brands.map(item => item.name)

    let exampleBD = {
        Chrome: {},
        Back: {},
        Main: {},
        Truck: {},
        Hood: {}
    }

    Object.keys(exampleBD).forEach((glbKey) => {
        brandsNames.forEach(item => {
            exampleBD[glbKey][item] = null
        })
    })

    Object.keys(exampleBD).forEach((globalKey) => {
        Object.keys(exampleBD[globalKey]).forEach(key => {
            const arr = []
            DATABASE[globalKey].forEach(item => {
                const lowCaseName = item.Name.toLowerCase()
                if(lowCaseName.includes(key.toLowerCase())){
                    let trimedName = item.Name.trim().replace(/\\/g, "").replace(/"/g,"") //delete backslashes " and spaces
                    let uniqueID = Math.random().toString(36).substr(2, 5)
                    arr.push({
                        ID: uniqueID,
                        Name: trimedName,
                        Price: Number(item.Price),
                        Discount: Number(0),
                        Manufacturer: getManufacturer(lowCaseName),
                        PurchaseCount: Number(0),
                        AvailableCount: Number(0)
                    })
                }
            })
            exampleBD[globalKey][key] = {
                srcLogo: null,
                data: arr
            }
        })
    })
    Object.keys(exampleBD).forEach(globalKey => {
        let i = 0;
        Object.keys(exampleBD[globalKey]).forEach(key => {
            exampleBD[globalKey][key].srcLogo = brands[i].src
            i++;
        })
    })

    
    return exampleBD
}
