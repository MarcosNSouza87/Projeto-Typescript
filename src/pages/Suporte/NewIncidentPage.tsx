import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,FormControl,Grid,InputLabel,Select,MenuItem} from '@material-ui/core'
import {useHistory,Link} from 'react-router-dom'

import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'


interface Incident{ 
    id:string,
    name_user:string,
    account_name:string,
    data_abertura:string,
    data_visita:string,
    endereco:string,
    statusSuport:string,
}


const NewContatoPage = () => {

    const newEntity = useState(useSelector((state:RootStateOrAny) => state.reparos.newReparo));
    const [entity,setEntity] = useState<Incident>(newEntity[0]);


    const listContact = useSelector((state:RootStateOrAny) => state.users.listaUsers);
    const listAccounts = useSelector((state:RootStateOrAny) => state.account.listAccounts)

    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewUser = (entidade:Incident) =>{
      entidade.id = Math.floor(Math.random() * 1100).toString();
      dispatch({type:'NEW_INCIDENT',payload:{new:{entidade}}});
      history.push('/admin/support')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntity({...entity,[name]:value});
      //console.log(entityUser);
    }

    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        if(name === 'name_user')
        {
            const addr = listContact.map((conta:any) => conta.name === value? conta.endereco:null);

            entity.endereco = addr[0];
 
        }
        setEntity({...entity,[name]:value});
    };
    
    return(
        <div>
            <Paper className="table form-paper add-form">
              <Grid xs={12}              container    direction="column"
                    justify="center"    alignItems="stretch">
                    
                <form noValidate autoComplete="off" >
                <Typography color="textPrimary" variant="h6">Nova Ocorrência</Typography>
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Tipo de Ocorrencia</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entity.statusSuport ?? " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Tipo de Conta"
                        name='statusSuport'
                        >
                            <MenuItem value="null"><em>Tipo de Suporte</em></MenuItem>
                            <MenuItem value="Reparo"><em>Reparo</em></MenuItem>
                            <MenuItem value="Alteracao"><em>Alteração de Endereço</em></MenuItem>
                            <MenuItem value="Ajuste"><em>Ajuste</em></MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Nome do Contato</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entity.name_user ? entity.name_user: " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Nome do Contato"
                        name='name_user'
                        >
                            <MenuItem value="null"><em>Escolha um Cliente</em></MenuItem>
                            {
                                listContact.map((conta:any) => (
                                    <MenuItem key={conta.id} value={conta.name}>{conta.name}</MenuItem>
                                    ))
                                }
                        </Select>
                    </FormControl>
                    <TextField id="03" name='endereco' defaultValue={entity?.endereco} 
                               onChange={handleInputChange} label="Endereço" variant="outlined" />
                    
                    <TextField
                        id="data_abertura"    type="date"
                        label="Data Abertura"
                        defaultValue="2017-05-24"
                        variant="outlined"
                        onChange={handleInputChange} 
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="data_visita"    type="date"
                        label="Data da Visita"
                        defaultValue="2017-05-24"
                        variant="outlined"
                        onChange={handleInputChange} 
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Nome do Usuario</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entity.account_name ? entity.account_name: " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Nome do Usuario"
                        name='account_name'
                        >
                            <MenuItem value="null"><em>Escolha um Cliente</em></MenuItem>
                            {
                                listAccounts.map((conta:any) => (
                                    <MenuItem key={conta.id} value={conta.name}>{conta.name}</MenuItem>
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
                            component={Link} to='/admin/support'>
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