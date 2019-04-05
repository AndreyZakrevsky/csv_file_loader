export const setWorkers = (workers)=>{
    return{
        type: 'SET_WORKERS',
        payload : workers
    }
}

export const countAdd = (item)=>{
    return{
        type: 'ADD_COUNT',
        payload : item
    }
}