
const INIT={
    CurrElem:'Home'
}

const SideBarReducer=(state = INIT ,action )=>{
    switch(action.type){
        case 'CurrElement':
            return{
                ...state,
                CurrElem: action.data
            }
        default:
            return state
    }
}
export default SideBarReducer