export default function formatDate(date:Date):String{ 

    let temp = date.toString().split(" ");
    const month = temp[1]
    const day = temp[2];
    const time = temp[4];

    return `${day} ${month} ${time}`
}