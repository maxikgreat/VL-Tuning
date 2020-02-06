export default function filter(filterArray, valueNotSmall, parentNode){
    
    let inputValue = valueNotSmall.toLowerCase();

    if (inputValue.length > 0) {
        for (let j = 0; j < filterArray.length; j++) {
            if (!(inputValue.substring(0, inputValue.length) === filterArray[j].substring(0, inputValue.length).toLowerCase())) {
                parentNode.children[j].classList.add('closed');
            } else {
                parentNode.children[j].classList.remove('closed');
            }
        }
    } else {
        for (let i = 0; i < parentNode.children.length; i++) {
            parentNode.children[i].classList.remove('closed');
        }
    }
}