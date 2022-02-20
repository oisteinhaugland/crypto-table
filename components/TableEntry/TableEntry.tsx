import {ICryptoEntry} from "../../shared/interfaces"

interface Props {
    data: ICryptoEntry
}

export default function TableEntry({data}: Props) {
    return(
        <tr>
            <td>{data.date}</td>
            <td>{data.open}</td>
            <td>{data.close}</td>
            <td>{data.low}</td>
            <td>{data.high}</td>
        </tr>
    )
}