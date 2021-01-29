import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,Grid,FormControl,MenuItem,InputLabel,Select} from '@material-ui/core'
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


const EditContatoPage = () => {
    const selectedUser = useState(useSelector((state:RootStateOrAny) => state.account.selectedAccount));
    console.log(selectedUser);
    const [entity,setEntity] = useState(selectedUser[0]);

    const listStatus = useSelector((state:RootStateOrAny) => state.status.listStatus);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleEditUser = (entidade:Account) => {
        dispatch({type:'UPDATE_ACCOUNT',conta:entidade});
        history.push('/admin/account')
    }
    const handleDeleteUser = (entidade:Account) => {
        dispatch({type:'DELETE_ACCOUNT',conta:entidade})
        history.push('/admin/account');
    }
    
    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        setEntity({...entity,[name]:value});
    };

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntity({...entity,[name]:value});
      //console.log(entity);
    }
    return(
        <div>
            <Paper className="table form-paper add-form">
            <Grid item xs={12} container
            direction="column"
            justify="center"
            alignItems="stretch">
            <form noValidate autoComplete="off" >
            <Typography color="textPrimary" variant="h6">Editar Conta</Typography>
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
            }}/>
            
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
                <Grid container direction="row" spacing={1}>    
                    <Grid >
                        <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={()=>{handleEditUser(entity)}}
                        >
                            Salvar
                        </Button>
                    </Grid>
                    <Grid >
                        <Button 
                        variant="outlined"
                        color="secondary" 
                        component={Link} to='/admin/account'>
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid >
                            <Button 
                            variant="outlined"
                            onClick={()=>{handleDeleteUser(entity)}}>
                                Excluir
                            </Button>
                            </Grid>
                        </Grid>
                </form>
                </Grid>
                </Paper>
                </div>
                )
            }
            export default EditContatoPage;