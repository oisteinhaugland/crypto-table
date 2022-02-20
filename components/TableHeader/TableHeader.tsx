import Styles from "./TableHeader.module.scss"

export default function TableHeader(){
    return(
        <thead className={Styles.theader}>
            <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Close</th>
                <th>Low</th>
                <th>High</th>
            </tr>
        </thead>
    )
}