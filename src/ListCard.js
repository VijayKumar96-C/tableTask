import React from "react";
import { useSelector } from "react-redux";

const ListCard = ({}) => {
    const { data, loading, error } = useSelector((state) => state.data);
    console.log("listcard data",data)
    return (
        <div>
            <ul>
                {Object.keys(data[0]).map((ele, i) => {
                    return (
                        <li key={i} ><input type="checkbox" ></input>{ele}</li>)
                })}
            </ul>
        </div>
    )
}

export default ListCard