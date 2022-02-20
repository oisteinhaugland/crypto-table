import TableHeader from "../TableHeader/TableHeader"
import TableEntry from "../TableEntry/TableEntry"
import { ICryptoEntry } from "../../shared/interfaces"
import { useState, useEffect } from "react";
import Styles from "./Table.module.scss"

interface Props {
    entries: [ICryptoEntry],
    pageLimit: number
}


export default function Table({entries, pageLimit}: Props) {
    const [index,setIndex] = useState(0);
    
    let pages = []
    for (let index = 0; index < entries.length; index+=pageLimit) {
        pages.push(entries.slice(index,index+pageLimit));
    }
    
    const pageCount = pages.length;
    
    function incrementIndex(){
        if (index == pages.length-1) {
            resetIndex();
        } else  setIndex(index+1)

    }

    function decrementIndex(){
        if (index == 0){ 
            maxIndex();
        } else setIndex(index-1)
    }

    function resetIndex(){
        setIndex(0)
    }

    function maxIndex(){
        setIndex(pages.length-1)
    }

    return(
        <div className={Styles.container}> 
            <div className={Styles.controls}>
                <button onClick={() => resetIndex()}>First</button>    
                <button onClick={() => decrementIndex()}>Previous</button>
                <span>Page {index+1} of {pageCount}</span>
                <button onClick={() => incrementIndex()}>Next</button>    
                <button onClick={() => maxIndex()}>Last</button>        
            </div>    
            
            <table className={Styles.table}>
                <caption>Showing max {pageLimit} results per page</caption>
                <TableHeader/>
                <tbody>
                {pages[index].map((entry) => (
                    <TableEntry key={entry.time} data={entry}/>    
                    ))
                }     
                </tbody>
                <tfoot>
                </tfoot>
            </table>     
            </div>       
    )
}