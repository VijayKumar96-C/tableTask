import React from "react";
import { Table as muiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Card } from "@mui/material";



const Table = ({ data, setShowTable }) => {

    const handleAddButton = () => {
        setShowTable(false)
    }
    return (
        <div>
            <Card sx={{ minWidth: 300, m: 20, minWidth: 275 }}  >
                <TableContainer component={Paper}  >
                    <muiTable sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {Object.keys(data[0]).map((ele) => {
                                    return (
                                        <TableCell>{ele}</TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((ele) => {
                                    return (
                                        <TableRow>
                                            {Object.values(ele).map((item) => {
                                                return (
                                                    <TableCell>{item}</TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </muiTable>
                </TableContainer>
                <Button onClick={handleAddButton} variant="contained" sx={{ mx: 12, my: 2 }} >Add column</Button>
            </Card>
        </div>
    )
}

export default Table