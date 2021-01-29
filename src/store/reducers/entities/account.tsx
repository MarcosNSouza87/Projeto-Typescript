const INITIAL_STATE = {
    selectedAccount:{},
    newAccount:{
        id:'', name:'', email:'', birthdate:'',
        type_account:'', endereco:'',status:'',
    },
    listAccounts:[
        {
            id:'1',
            name:'marcos souza',
            email:'tsx',
            cpf:'366548',
            celular:'139911',
            birthdate:'01/01/2000',
            type_account:'Funcionario',
            endereco:'rua xv, 15, apto 12',
            status:'Ativo',
        }
    ],
    columnsList:[
        {id:'0',label:'Nome Completo',name:'name'},
        {id:'1',label:'Email',name:'email'},
        {id:'2',label:'Endereço',name:'endereco'},
        {id:'3',label:'Tipo de Usuário',name:'type_account'},
        {id:'4',label:'Status',name:'status'},
      ]
};


export default function account(state = INITIAL_STATE,action:any){
    console.log(action);
    switch(action.type){
        case 'NEW_ACCOUNT':
            const newAccount = action.payload.new.entidade;
            return{
                ...state,
                listAccounts:[...state.listAccounts,newAccount]
            }
        case 'SELECT_ACCOUNT':
            return{
                ...state,
                selectedAccount:action.selectedAccount
            }
        case 'UPDATE_ACCOUNT':
            return{
                ...state,
                listAccounts:state.listAccounts.map((account) => 
                account.id === action.conta.id ? account = action.conta:account),      
            }
        case 'DELETE_ACCOUNT':
            const conta = action.conta;
            return{
                ...state,
                listAccounts: state.listAccounts.filter( account => account !== conta)
            }
        default:
            return state;
    }

}