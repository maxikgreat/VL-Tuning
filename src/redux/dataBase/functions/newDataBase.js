import DATABASE from '../../../oneMoreBD.json'
import getAllBrands from './getAllBrands'
import firebase from '../../../firebase'

export default function newDataBase(){

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

    const deleteManufacturerFromName = (name) => {
        if(name.includes("Cobra Tuning")){
            return name.replace("Cobra Tuning","")
        } else if(name.includes("ALVI")){
            return name.replace("ALVI","")
        } else if(name.includes("VT-52")){
            return name.replace("VT-52","")
        } else if (name.includes("VL-Tuning")){
            return name.replace("VL-Tuning","")
        } else if (name.includes("ANV air")){
            return name.replace("ANV air","")
        } else if(name.includes("Faber")){
            return name.replace("Faber","")
        } else if (name.includes("SIM")){
            return name.replace("SIM","")
        }
        else return name
    }


    let brands = getAllBrands()
    let brandsNames = brands.map(item => item.name)

    let newDB = {
        Chrome: {},
        Back: {},
        Main: {},
        Truck: {},
        Hood: {}
    }

    Object.keys(newDB).forEach((glbKey) => {
        brandsNames.forEach(item => {
            newDB[glbKey][item] = {
                data: {}
            }
        })
    })

    Object.keys(newDB).forEach(globalKey => {
        let i = 0;
        Object.keys(newDB[globalKey]).forEach(key => {
            newDB[globalKey][key].srcLogo = brands[i].src
            i++;
        })
    })

    // Object.keys(newDB).forEach((globalKey) => {
    //     Object.keys(newDB[globalKey]).forEach(key => {
    //         DATABASE[globalKey].forEach(item => {
    //             const lowCaseName = item.Name.toLowerCase()
    //             if(lowCaseName.includes(key.toLowerCase())){
    //                 let trimedName = item.Name.trim().replace(/\\/g, "").replace(/"/g,"").replace(" деф.окон", "") //delete backslashes " and spaces
    //                 let uniqueID = Math.random().toString(36).substr(2, 5)
    //                 firebase.database().ref(`/${globalKey}/${key}`)
    //                     .child("data").child(uniqueID).set({
    //                     Name: deleteManufacturerFromName(trimedName),
    //                     Price: Number(item.Price),
    //                     Type: globalKey,
    //                     Discount: Number(0),
    //                     Manufacturer: getManufacturer(lowCaseName),
    //                     OrderedCount: Number(0),
    //                 })
    //             }
    //         })
    //     })
    // })

}

