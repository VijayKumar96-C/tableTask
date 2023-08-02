import React, { useState } from "react";
import { List,ListItem,ListItemButton,ListItemIcon,ListItemText,Checkbox,IconButton } from "@mui/material";
// import CommentIcon from '@mui/icons-material/Comment';

const ListCard = ({data,dataFromList}) => {
    const [selectedValue, setSelectedValue] = useState([])

    const handleChange = (e) => {
        console.log("targetId",e.target.id)
        setSelectedValue([...selectedValue,e.target.id])
    }

    const handlApplyButton = () => {
        dataFromList(selectedValue)
        console.log("selectedValue",selectedValue)
    }

    return (
        <div>
            Please select the columns to display
            <ul>
                {Object.keys(data[0]).map((ele, i) => {
                    return (
                        <li key={i} ><input type="checkbox" id={ele} onChange={handleChange}  ></input>{ele}</li>)
                })}
            </ul>
            <button onClick={handlApplyButton} >Apply</button>
        </div>
    )
}

export default ListCard