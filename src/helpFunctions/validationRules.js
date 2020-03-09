export default function validationRules(values) {
    let errors = {};

    //mail
    if (!values.email) {
        errors.email = 'Обязательное поле!';
    } else if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail адрес введен некорректно!';
    }
    //name
    if (!values.name) {
        errors.name = 'Обязательное поле!';
    }
    //surname
    if (!values.surname){
        errors.surname = "Обязательное поле!"
    }
    //phone
    if (!values.phone){
        errors.phone = "Обязательное поле!"
    } else if (/\D/.test(values.phone)){
        errors.phone = "Допустимы только цифры!"
    }
    //city
    if (!values.city){
        errors.city = "Обязательное поле!"
    }
    return errors;
};