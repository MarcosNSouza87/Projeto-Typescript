import React from 'react'
import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'
import {Paper,Toolbar,Typography,IconButton} from '@material-ui/core'
import { Add } from '@material-ui/icons';
import TableEntity from '../../components/TableEntity'
import {useHistory,Link} from 'react-router-dom'

const LeadPage = () => {

  const listEntity = useSelector((state:RootStateOrAny) => state.lead.listLeads);
  const columnsEntity = useSelector((state:RootStateOrAny)=> state.lead.columnsList);

  const history = useHistory();
  const dispatch = useDispatch();

  function EditForm(id:string){
    const selectedEntity = listEntity.filter( (user:any) =>  user.id === id? user:null )

    dispatch({type:'SELECT_LEAD',selectedLead:selectedEntity[0]});
    history.push('/admin/lead/edit')
  }


    return(
        <div>
            <Paper className="table">
                <Toolbar>
                <div className="inside">
                    <Typography>Lista de possiveis Clientes</Typography>
                    <IconButton color="secondary" component={Link}  to='/admin/lead/new'>
                    <Add/>
                    </IconButton>
                </div>
                </Toolbar>
                <TableEntity rows={listEntity} columns={columnsEntity} 
                titlePage={'Lista de Usuarios'} ClickFunc={EditForm}/>
            </Paper>
        </div>
    )
}
export default LeadPage;