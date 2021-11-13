const addInfos = infos => {
    return {
        type: 'ADD_INFOS',
        payload: infos
    }
}

const deleteInfos = () => {
    return {
        type: 'DELETE_INFOS'
    }
}



const exportDefault = {
 addInfos,
 deleteInfos
}

export default exportDefault