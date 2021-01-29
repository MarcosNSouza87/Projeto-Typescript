import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,FormControl,Grid,InputLabel,Select,MenuItem} from '@material-ui/core'
import {useHistory,Link} from 'react-router-dom'

import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'


interface User{ id:string, name:string,  email:string,   endereco:string, plan:string,
    status:string,}


const NewContatoPage = () => {

    const newEntityUser = useState(useSelector((state:RootStateOrAny) => state.users.newUser));
    const [entityUser,setEntityUser] = useState<User>(newEntityUser[0]);

    const listPlans = useSelector((state:RootStateOrAny) => state.plans.listaPlanos);
    const listStatus = useSelector((state:RootStateOrAny) => state.status.listStatus);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewUser = (entidade:User) =>{
      entidade.id = Math.floor(Math.random() * 1100).toString();
      dispatch({type:'NEW_USER',payload:{new:{entidade}}});
      history.push('/admin/contato')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntityUser({...entityUser,[name]:value});
      //console.log(entityUser);
    }

    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        setEntityUser({...entityUser,[name]:value});
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
                    <TextField id="01" name='name' defaultValue={entityUser?.name} onChange={handleInputChange} 
                    label="Nome Completo" variant="outlined" />
                    <TextField id="02" name='email' defaultValue={entityUser?.email} onChange={handleInputChange} label="Email" variant="outlined" />
                    <TextField id="03" name='endereco' defaultValue={entityUser?.endereco} onChange={handleInputChange} label="Endereço" variant="outlined" />
                    
                    
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
                        <InputLabel id="demo-simple-select-outlined-label">Plano</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entityUser.plan ? entityUser.plan: " "}
                        onChange={(e:any) => {handleChangeSelect(e)}}
                        label="Plano"
                        name='plan'
                        >
                            <MenuItem value="null"><em>Escolha um Plano</em></MenuItem>
                            {
                                listPlans.map((plano:any) => (
                                    <MenuItem key={plano.id} value={plano.name}>{plano.name}</MenuItem>
                                    ))
                                }
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entityUser.status ?? " "}
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
                            onClick={()=>{handleNewUser(entityUser)}}
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