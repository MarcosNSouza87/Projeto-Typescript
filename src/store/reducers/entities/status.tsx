const INITIAL_STATE = {
    listStatus:[
        {
            id:'1',
            name:'Ativo',
        },
        {
            id:'2',
            name:'Desativado',
        },
    ],
    columnsStatus:[
        {id:'0',label:'id',name:'id'},
        {id:'1',label:'Nome',name:'name'},
      ],
};


export default function status(state = INITIAL_STATE,action:any){
    switch(action.type){
        case 'NEW_STATUS':
            const newStatus = action.payload.new.entidade;
            return{
                ...state,
                listStatus:[...state.listStatus,newStatus]
            }       
        default:
            return state;
    }

}