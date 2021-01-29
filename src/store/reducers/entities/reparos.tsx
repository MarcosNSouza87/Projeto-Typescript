const INITIAL_STATE = {
    selectedIncident:{},
    newReparo:{
        id:'',
        name_user:'',
        account_name:'',
        data_abertura:'',
        data_visita:'',
        endereco:'',
        statusSuport:'',
    },
    listIncidents:[
        {
            id:'1',
            name_user:'marcos souza',
            account_name:'marcos souza',
            data_abertura:'27/01/2021',
            data_visita:'27/01/2021',
            endereco:'rua xv, 15, apto 01',
            statusSuport:'Reparo',
        }
    ],
    columnsReparos:[
        {id:'0',label:'ID',name:'id'},
        {id:'1',label:'usuário',name:'name_user'},
        {id:'2',label:'Endereço',name:'endereco'},
        {id:'4',label:'Status',name:'statusSuport'},
        {id:'5',label:'Conta',name:'account_name'}
      ],
};


export default function reparos(state = INITIAL_STATE,action:any){

    switch(action.type){
        case 'NEW_INCIDENT':
            const newIncident = action.payload.new.entidade;
            return{
                ...state,
                listIncidents:[...state.listIncidents,newIncident]
            }
        case 'SELECT_INCIDENT':
            return{
                ...state,
                selectedIncident:action.selectedIncident
            }
        case 'UPDATE_INCIDENT':
            return{
                ...state,
                listIncidents:state.listIncidents.map((incident)=>
                incident.id === action.ocorrencia.id? incident = action.ocorrencia:incident),
            }
        case 'DELETE_INCIDENT':
            const ocorrencia = action.ocorrencia;
            return{
                ...state,
                listIncidents: state.listIncidents.filter( incident => incident !== ocorrencia)
            } 
        default:
            return state;
    }

}