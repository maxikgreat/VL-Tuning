export default function getAllBrands(){

    const brands = [];

    const filesSrc = require.context('../../../assets/images/logos', false,  /\.(png|jpe?g|svg)$/);
    filesSrc.keys().map(filesSrc).forEach((item) => {

        let src = item;

        let name = item.split("/").pop().replace(/\.[^/.]+$/, "")
            .replace("_", " ")
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

        if(name.length === 2){
            name.toUpperCase()
        }
        brands.push({name, src})
    })
    return brands
}