import React from 'react'
import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'
import {Paper,Toolbar,Typography,IconButton} from '@material-ui/core'
import { Add } from '@material-ui/icons';
import TableEntity from '../../components/TableEntity'
import {useHistory,Link} from 'react-router-dom'

const SuportePage = () => {

  const listaReparos = useSelector((state:RootStateOrAny) => state.reparos.listIncidents);
  const columnsList = useSelector((state:RootStateOrAny)=> state.reparos.columnsReparos);

  const history = useHistory();
  const dispatch = useDispatch();

  function EditForm(id:string){
    const selected = listaReparos.filter( (entity:any) =>  entity.id === id? entity:null )
    dispatch({type:'SELECT_INCIDENT',selectedIncident:selected[0]});
    history.push('/admin/support/edit')
  }

  return(
    <div>
      <Paper className="table">
        <Toolbar>
          <div className="inside">
            <Typography>Lista de Reparos</Typography>
            <IconButton color="secondary" component={Link}  to='/admin/support/new'>
              <Add/>
            </IconButton>
          </div>
        </Toolbar>
        <TableEntity rows={listaReparos} columns={columnsList}  titlePage={'Lista de Reparos'} ClickFunc={EditForm}/>
      </Paper>
    </div>
  )
}
export default SuportePage;