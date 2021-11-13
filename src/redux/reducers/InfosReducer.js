
const InfosReducer = (state={allInfos:[]}, action) => {
    switch(action.type) {
        case 'ADD_INFOS':
            return {
                ...state,
                allInfos: action.payload
            }
        case 'DELETE_INFOS':
            return {
                ...state,
                allInfos:[]
            }
        default:
            return state
    }
}

export default InfosReducer