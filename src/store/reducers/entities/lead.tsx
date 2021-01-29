const INITIAL_STATE = {
    selectedLead:{},
    newLead:{
        id:'', name:'', email:'', birthdate:'',
         plan:'', endereco:'',status:'',
    },
    listLeads:[
        {
            id:'1',
            name:'Marisa P.Lopes',
            email:'m@bol.com',
            birthdate:'01/01/2000',
            plan:'10 Mgs',
            endereco:'rua col.candido, 18, apto 12',
            statusLead:'Aguardando Instalação',
            status:'Ativo',
        }
    ],
    columnsList:[
        {id:'0',label:'Nome Completo',name:'name'},
        {id:'1',label:'Email',name:'email'},
        {id:'2',label:'Endereço',name:'endereco'},
        {id:'3',label:'Plano',name:'plan'},
        {id:'4',label:'Status',name:'status'},
      ]
};

export default function lead(state = INITIAL_STATE,action:any){
    // console.log(action);
     switch(action.type){
         case 'NEW_LEAD':
             const newAccount = action.payload.new.entidade;
             return{
                 ...state,
                 listLeads:[...state.listLeads,newAccount]
             }
         case 'SELECT_LEAD':
             return{
                 ...state,
                 selectedLead:action.selectedLead
             }
         case 'UPDATE_LEAD':
             return{
                 ...state,
                 listLeads:state.listLeads.map((contact) => 
                 contact.id === action.contato.id ? contact = action.contato:contact),      
             }
         case 'DELETE_LEAD':
             const contact = action.contato;
             return{
                 ...state,
                 listLeads: state.listLeads.filter( conta => conta !== contact)
             }
         default:
             return state;
     }
 
 }