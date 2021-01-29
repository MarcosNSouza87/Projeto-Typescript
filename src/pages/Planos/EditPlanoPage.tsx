import React,{useState,ChangeEvent} from 'react'
import {Paper,Typography,TextField,Button,Grid,FormControl,MenuItem,InputLabel,Select} from '@material-ui/core'
import {useHistory,Link} from 'react-router-dom'

import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'


interface Plan{ id:string, name:string,  velocidade:string,   price:string, status:string}


const EditContatoPage = () => {
    const selectedPlan = useState(useSelector((state:RootStateOrAny) => state.plans.selectedPlan)); 

    const [entityPlan,setEntityPlan] = useState(selectedPlan[0]);
    const listStatus = useSelector((state:RootStateOrAny) => state.status.listStatus);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleEditUser = (entidade:Plan) => {
        dispatch({type:'UPDATE_PLAN',plano:entidade});
        history.push('/admin/plano')
    }
    const handleDeleteEntity = (entidade:Plan) => {
        dispatch({type:'DELETE_PLAN',plano:entidade})
        history.push('/admin/plano');
    }
    
    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const{name,value} = event.target;
        setEntityPlan({...entityPlan,[name]:value});
    };

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
      const{name,value} = event.target;
      setEntityPlan({...entityPlan,[name]:value});
      //console.log(entityPlan);
    }
    return(
        <div>
            <Paper className="table form-paper add-form">
            <Grid item xs={12} container
            direction="column"
            justify="center"
            alignItems="stretch">
            <form noValidate autoComplete="off" >
            <Typography color="textPrimary" variant="h6">Editar Plano</Typography>
            <TextField id="01" name='name' defaultValue={entityPlan?.name} onChange={handleInputChange} label="Nome do Plano" variant="outlined" />
            <TextField id="02" name='velocidade' defaultValue={entityPlan?.velocidade} onChange={handleInputChange} label="Velocidade" variant="outlined" />
            <TextField id="03" name='price' defaultValue={entityPlan?.price} onChange={handleInputChange} label="Preço" variant="outlined" />


            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                defaultValue={entityPlan?.status}
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
                            onClick={()=>{handleEditUser(entityPlan)}}
                            >
                                Salvar
                            </Button>
                        </Grid>
                        <Grid >
                            <Button 
                            variant="outlined"
                            color="secondary" 
                            component={Link} to='/admin/contato'>
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid >
                            <Button 
                            variant="outlined"
                            onClick={()=>{handleDeleteEntity(entityPlan)}}>
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