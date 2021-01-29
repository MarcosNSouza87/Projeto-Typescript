const INITIAL_STATE = {
    selectedPlan:{},
    listaPlanos:[
        {
            id:'1',
            name:'10 Mgs',
            velocidade:'10.00 Mbps',
            price:'10',
            status:'Ativo',
        },
        {
            id:'2',
            name:'20 Mgs',
            velocidade:'10.00 Mbps',
            price:'10',
            status:'Ativo',
        },
    ],
    columnsPlanos:[
        {id:'0',label:'Nome',name:'name'},
        {id:'2',label:'Velocidade',name:'velocidade'},
        {id:'3',label:'Preço',name:'price'},
        {id:'4',label:'Status',name:'status'},
      ],
};


export default function plans(state = INITIAL_STATE,action:any){

    switch(action.type){
        case 'NEW_PLAN':
            const newPlano= action.payload.new.entidade;
            return{
                ...state,
                listaPlanos:[...state.listaPlanos,newPlano]
            }
        case 'SELECT_PLAN':
            return{
                ...state,
                selectedPlan:action.selectedPlan
            }
        case 'UPDATE_PLAN':
            return{
                ...state,
                listaPlanos:state.listaPlanos.map((plan) => 
                plan.id === action.plano.id ? plan = action.plano:plan) 
            }
        case 'DELETE_PLAN':
            const plano = action.plano;
            return{
                ...state,
                listaPlanos: state.listaPlanos.filter( plan => plan !== plano)
            }       
        default:
            return state;
    }

}