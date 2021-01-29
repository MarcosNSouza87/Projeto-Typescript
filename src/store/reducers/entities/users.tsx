const INITIAL_STATE = {
    selectedUser:{},
    newUser:{
        id:'', name:'', email:'', birthdate:'',
         plan:'', endereco:'',status:'',
    },
    listaUsers:[
        {
            id:'1',
            name:'marcos souza',
            email:'tsx',
            birthdate:'01/01/2000',
            plan:'10 Mgs',
            endereco:'rua xv, 15, apto 01',
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


export default function users(state = INITIAL_STATE,action:any){
   // console.log(action);
    switch(action.type){
        case 'NEW_USER':
            const newAccount = action.payload.new.entidade;
            return{
                ...state,
                listaUsers:[...state.listaUsers,newAccount]
            }
        case 'SELECT_USER':
            return{
                ...state,
                selectedUser:action.selectedUser
            }
        case 'UPDATE_CONTACT':
            return{
                ...state,
                listaUsers:state.listaUsers.map((contact) => 
                contact.id === action.contato.id ? contact = action.contato:contact),      
            }
        case 'DELETE_CONTACT':
            const contact = action.contato;
            return{
                ...state,
                listaUsers: state.listaUsers.filter( conta => conta !== contact)
            }
        default:
            return state;
    }

}