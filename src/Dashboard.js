import React, { useState, useEffect } from "react";
import axios from "axios";
import ListCard from "./ListCard";
import Table from "./Table";

const Dashboard = () => {
    const [data, setData] = useState([
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            postId: 1,
            id: 2,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            postId: 1,
            id: 3,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            postId: 1,
            id: 4,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            postId: 1,
            id: 5,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
       
      ])
    const [selectedData, setSelectedData] = useState([])
    const [showTable, setShowTable] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    //             .then((res) => {
    //                 setData(res.data)
    //             } )
    //             console.log("data",res.data)
    //         } catch (err) {
    //             console.log(err.message)
    //         }
    //     }
    //     getData()

    // },[])

    const dataFromList = (list) => {
        console.log("list from dashboard",list)
        const filterObject =data.map((ele)=>{
            return (
                Object.keys(ele).reduce((acc,key) => {
                    if (list.includes(key)) {
                        acc[key] = ele[key]
                    }
                    return acc
                }, {} )
            )
        }) 
        console.log("filtered object",filterObject)
        setSelectedData(filterObject)
        setShowTable(true)
    } 
    return (
        <div>
            <ListCard data={data} dataFromList={dataFromList} />
            { showTable && <Table data={selectedData} />}
        </div>
    )
}

export default Dashboard