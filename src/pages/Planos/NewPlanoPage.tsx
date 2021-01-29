import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,FormControl,Grid,InputLabel,Select,MenuItem} from '@material-ui/core'
import {useHistory,Link} from 'react-router-dom'

import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'


interface Plan{ id:string, name:string,  velocidade:string,   price:string, status:string}


const NewContatoPage = () => {

    const newEntityPlan = useState(useSelector((state:RootStateOrAny) => state.users.newUser));
    const [entityPlan,setEntityPlan] = useState<Plan>(newEntityPlan[0]);

    const listPlans = useSelector((state:RootStateOrAny) => state.plans.listaPlanos);
    const listStatus = useSelector((state:RootStateOrAny) => state.status.listStatus);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewUser = (entidade:Plan) =>{
      entidade.id = Math.floor(Math.random() * 1100).toString();
      dispatch({type:'NEW_PLAN',payload:{new:{entidade}}});
      history.push('/admin/plano')
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntityPlan({...entityPlan,[name]:value});
      //console.log(entityPlan);
    }

    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        setEntityPlan({...entityPlan,[name]:value});
    };
    
    return(
        <div>
            <Paper className="table form-paper add-form">
              <Grid xs={12} container
                direction="column"
                justify="center"
                alignItems="stretch">
                    
                <form noValidate autoComplete="off" >
                <Typography color="textPrimary" variant="h6">Add Novo Plano</Typography>
                    <TextField id="01" name='name' defaultValue={entityPlan?.name} onChange={handleInputChange} label="Nome do Plano" variant="outlined" />
                    <TextField id="02" name='velocidade' defaultValue={entityPlan?.velocidade} onChange={handleInputChange} label="Velocidade" variant="outlined" />
                    <TextField id="03" name='price' defaultValue={entityPlan?.price} onChange={handleInputChange} label="Preço" variant="outlined" />

                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={entityPlan.status ?? " "}
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
                            onClick={()=>{handleNewUser(entityPlan)}}
                            >
                                Salvar
                            </Button>
                        </Grid>
                        <Grid item >
                            <Button 
                            variant="outlined"
                            color="secondary" 
                            component={Link} to='/admin/plano'>
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