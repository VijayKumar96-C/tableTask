import React, { useState, useEffect } from "react";
import axios from "axios";
import ListCard from "./ListCard";

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
                .then((res) => {
                    setData(res.data)
                } )
                console.log("data",res.data)
            } catch (err) {
                console.log(err.message)
            }
        }
        getData()

    },[])

    return (
        <div>
            <ListCard data={data} />
        </div>
    )
}

export default Dashboard