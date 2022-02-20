import TableHeader from "../TableHeader/TableHeader"
import TableEntry from "../TableEntry/TableEntry"
import { useEffect, useState } from "react"

export default function Table() {
    const [data,setData] = useState(null);

    useEffect(() => {
        const apiURL = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=73ceadae3d50a7818a4695289692bd0711180c3bc331c3425fdb8aa1094b66c1"
 
        fetch(apiURL)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    return(
        <table>
            <p>{data}</p>
        </table>            

    )
  // Fetch data from external API
 

  // Pass data to the page via props
  return { props: { data } }
}
