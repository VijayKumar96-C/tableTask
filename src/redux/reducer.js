const intialState = {
    data:[],
    loading: false,
    error:null
}

const dataReducer = (state= intialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                loading:true
            }
        case 'FETCH_SUCCESS' :
            return {
                ...state,
                loading:false,
                data: action.payload,
                error: null
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading:false,
                data:[],
                error:action.payload,
            }
        default:
            return state
    }
}

export default dataReducer