function dateFormatter(i){


    let year = i.substring(0,4)
    let month = i.substring(5,7)
    let day = i.substring(8,10)
    return `${month}/${day}/${year}`
}
export {dateFormatter}