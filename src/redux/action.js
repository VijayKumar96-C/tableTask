import axios from "axios";

export const fetchData = () => ({
    type:'FETCH_DATA',
})

export const fetchSuccess = (data) => ({
    test:'FETCH_SUCCESS' ,
    payload:data
})

export const fetchFailure = (error) => ({
    type:'FETCH_FAILURE',
    payload:error
})


export const fetchDataRqst = () => {
    return (dispatch) => {
        dispatch(fetchData())
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((res)=>{
            dispatch(fetchSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchFailure(err.message))
        })
    }
}