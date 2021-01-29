import React from 'react'
import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'
import {Paper,Toolbar,Typography,IconButton} from '@material-ui/core'
import { Add } from '@material-ui/icons';
import TableEntity from '../../components/TableEntity'
import {useHistory,Link} from 'react-router-dom'

const ContatoPage = () => {

  const listuser = useSelector((state:RootStateOrAny) => state.users.listaUsers);
  const columnsUser = useSelector((state:RootStateOrAny)=> state.users.columnsList);

  const history = useHistory();
  const dispatch = useDispatch();

  function EditForm(id:string){

    const userSelect = listuser.filter( (user:any) =>  user.id === id? user:null )
    dispatch({type:'SELECT_USER',selectedUser:userSelect[0]});
    history.push('/admin/contato/edit')
  }

  return(
    <div>
      <Paper className="table">
        <Toolbar>
          <div className="inside">
            <Typography>Lista de Contatos</Typography>
            <IconButton color="secondary" component={Link}  to='/admin/contato/new'>
              <Add/>
            </IconButton>
          </div>
        </Toolbar>
        <TableEntity rows={listuser} columns={columnsUser} 
          titlePage={'Lista de Usuarios'} ClickFunc={EditForm}/>
      </Paper>
    </div>
    )
}

export default ContatoPage;