import React from 'react'
import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'
import {Paper,Toolbar,Typography,IconButton} from '@material-ui/core'
import { Add } from '@material-ui/icons';
import TableEntity from '../../components/TableEntity'
import {useHistory,Link} from 'react-router-dom'

const PlanosPage = () => {

  const listPlano = useSelector((state:RootStateOrAny) => state.plans.listaPlanos);
  const columnsPlanos = useSelector((state:RootStateOrAny)=> state.plans.columnsPlanos);

  const history = useHistory();
  const dispatch = useDispatch();

  function EditForm(id:string){
    const planoSelect = listPlano.filter( (user:any) =>  user.id === id? user:null )
    console.log(id);
    console.log(planoSelect);
    dispatch({type:'SELECT_PLAN',selectedPlan:planoSelect[0]});
    history.push('/admin/plano/edit')
  }


    return(
        <div>
                  <Paper className="table">
        <Toolbar>
          <div className="inside">
            <Typography>Lista Planos</Typography>
            <IconButton color="secondary" component={Link}  to='/admin/plano/new'>
              <Add/>
            </IconButton>
          </div>
        </Toolbar>
        <TableEntity rows={listPlano} columns={columnsPlanos} 
          titlePage={'Lista de Usuarios'} ClickFunc={EditForm}/>
      </Paper>
        </div>
    )
}
export default PlanosPage;