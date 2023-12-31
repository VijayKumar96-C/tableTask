import React, { useState } from "react";
import { List, ListItem, Checkbox, Button, Card, CardContent, Typography } from "@mui/material";


const ListCard = ({ data, dataFromList}) => {
    const [selectedValue, setSelectedValue] = useState([])

    const handleChange = (e) => {
        setSelectedValue([...selectedValue, e.target.id])
    }

    const handlApplyButton = () => {
        dataFromList(selectedValue)
        console.log("selectedValue", selectedValue)
    }

    return (
        <div>
            <Card sx={{ m: 20, minWidth: 275 }} >
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} variant="h5" component="div" align="middle">
                        Please select the columns to display
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
                        {data[0] && Object.keys(data[0]).map((ele, i) => {
                            return (
                                <ListItem key={i} ><Checkbox id={ele} onChange={handleChange} />{ele}</ListItem>)
                        })}
                    </List>
                    <Button onClick={handlApplyButton} variant="contained" sx={{ mx: 4, my: 2 }} >Apply</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ListCard