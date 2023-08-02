import React from "react";



const Table = ({ data }) => {
   
    return (
        <div>
            <table>
                <tr>
                    {Object.keys(data[0]).map((ele)=>{
                        return(
                            <th>{ele}</th>
                        )
                    })}
                </tr>
                {
                    data.map((ele)=>{
                        return (
                            <tr>
                                {Object.values(ele).map((item)=>{
                                    return (
                                        <td>{item}</td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
                
            </table>
        </div>
    )
}

export default Table