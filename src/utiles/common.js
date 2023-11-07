export const addComma = (value) => {
    if (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    else {
        return value;
    }
}

export const addZero = (value, cnt) => {
    if (value) {
        return String(value).padStart(cnt, '0')
    }
    else {
        return value;
    }
}

export const capitalize = (word) => {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
}

export const makeRandomNumber = (num) => {
    const characters ='0123456789';

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const utilSetListSearch = (pathType) => {
    let search = window.location.search;
    let searchArr;

    if (search.substring(0, 1) === '?') {
        search = search.slice(1)
    }

    searchArr = search.split('&');
    search = [...new Set(searchArr)].join('&')

    window.localStorage.setItem('listSearch', JSON.stringify({pathType: pathType, search: search}))
}

export const utilGetListSearch = (pathType) => {
    let objSearch = JSON.parse(window.localStorage.getItem('listSearch'));

    if (objSearch?.pathType === pathType) {
        return objSearch.search;
    }
    else {
        return '';
    }
}

export const utilClearListSearch = () => {
    window.localStorage.setItem('listSearch', JSON.stringify({}))
}
