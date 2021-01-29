import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,FormControl,Grid,InputLabel,Select,MenuItem} from '@material-ui/core'
import {useHistory,Link} from 'react-router-dom'

import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'


interface Account{ 
    id:string, 
    name:string,  
    email:string,
    cpf:string,   
    celular:string,
    type_account:string,
    birthdate:string,
    endereco:string, 
    status:string,
}


const NewContatoPage = () => {

    const newEntityAccount = useState(useSelector((state:RootStateOrAny) => state.account.newAccount));
    const [entity,setEntity] = useState<Account>(newEntityAccount[0]);

    const listStatus = useSelector((state:RootStateOrAny) => state.status.listStatus);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewUser = (entidade:Account) =>{
      entidade.id = Math.floor(Math.random() * 1100).toString();
      dispatch({type:'NEW_ACCOUNT',payload:{new:{entidade}}});
      history.push('/admin/account')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntity({...entity,[name]:value});
      //console.log(entityUser);
    }

    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        setEntity({...entity,[name]:value});
    };
    
    return(
        <div>
            <Paper className="table form-paper add-form">
              <Grid xs={12} container
                direction="column"
                justify="center"
                alignItems="stretch">
                    
                <form noValidate autoComplete="off" >
                <Typography color="textPrimary" variant="h6">Add Usuário</Typography>
                    <TextField id="01" name='name' defaultValue={entity?.name} onChange={handleInputChange} label="Nome Completo" variant="outlined" />
                    <TextField id="02" name='email' defaultValue={entity?.email} onChange={handleInputChange} label="Email" variant="outlined" />
                    <TextField id="03" name='cpf' defaultValue={entity?.cpf} onChange={handleInputChange} label="CPF" variant="outlined" />
                    <TextField id="04" name='celular' defaultValue={entity?.celular} onChange={handleInputChange} label="Celular" variant="outlined" />
                    <TextField id="05" name='endereco' defaultValue={entity?.endereco} onChange={handleInputChange} label="Endereço" variant="outlined" />
                    
                    
                    <TextField
                        id="birthday"
                        label="Data Nascimento"
                        type="date"
                        defaultValue="2017-05-24"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />

                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Tipo de Conta</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entity.type_account ?? " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Tipo de Conta"
                        name='type_account'
                        >
                            <MenuItem value="null"><em>Tipo de Conta</em></MenuItem>
                            <MenuItem value="Administrador"><em>Administrador</em></MenuItem>
                            <MenuItem value="Funcionario"><em>Funcionario</em></MenuItem>
                            <MenuItem value="Instalador"><em>Instalador</em></MenuItem>

                        </Select>
                    </FormControl>
                   

                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entity.status ?? " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Status"
                        name='status'
                        >
                            {
                                listStatus.map((status:any) => (
                                    <MenuItem key={status.id} value={status.name}>{status.name}</MenuItem>
                                    ))
                                }
                        </Select>
                    </FormControl>


                    <Grid container direction="row" spacing={2}>
                        <Grid item >
                            <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={()=>{handleNewUser(entity)}}
                            >
                                Salvar
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button 
                            variant="outlined"
                            color="secondary" 
                            component={Link} to='/admin/contato'>
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
              </Grid>
            </Paper>
            
        </div>
    )
}
export default NewContatoPage;