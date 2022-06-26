import React from 'react'
import resp from '../../Response.json'
import './Table.css'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Table = (props) => {
    const { event } = props;
    const arr = Object.getOwnPropertyNames(resp[0]);
    arr.shift();    
    return (
        <section className="Table_section">
            <div className="table_main">
                <h1>Responses</h1>
                <div className="table_container">   
                    <table id='Response_table'>
                        <tr>
                            {arr.map((a) => <th>{a}</th>)}
                        </tr>
                        {resp.map((item)=>
                            <tr>
                                {arr.map((x)=> <td>{item[`${x}`]}</td> )}
                            </tr>
                        )}
                    </table>

                </div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="Response_table"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                {/* <button type='button' onClick = {tableToCSV()} >Download Table</button> */}
            </div>
        </section>
    )
}

export default Table