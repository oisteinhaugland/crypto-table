import {ICryptoEntry} from "../../shared/interfaces"
import formatDate from "../../utils/formatDate";
import Styles from "./TableEntry.module.scss"
interface Props {
    data: ICryptoEntry
}

export default function TableEntry({data}: Props) {    
    const date = new Date(data.time);;
    const formatedDate = formatDate(date);
    
    return(
        <tr className={Styles.row}>
            <td>{formatedDate}</td>
            <td>{data.open}</td>
            <td>{data.close}</td>
            <td>{data.low}</td>
            <td>{data.high}</td>
        </tr>
    )
}