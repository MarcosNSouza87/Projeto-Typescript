import React from 'react'
import {RootStateOrAny, useSelector,useDispatch } from 'react-redux'
import {Paper,Toolbar,Typography,IconButton} from '@material-ui/core'
import { Add } from '@material-ui/icons';
import TableEntity from '../../components/TableEntity'
import {useHistory,Link} from 'react-router-dom'

const AccountPage = () => {

  const listAccounts = useSelector((state:RootStateOrAny) => state.account.listAccounts);
  const columnsList = useSelector((state:RootStateOrAny)=> state.account.columnsList);

  const history = useHistory();
  const dispatch = useDispatch();

  function EditForm(id:string){

    const contaSelect = listAccounts.filter( (conta:any) =>  conta.id === id? conta:null )
    dispatch({type:'SELECT_ACCOUNT',selectedAccount:contaSelect[0]});
    history.push('/admin/account/edit')
  }

  return(
    <div>
      <Paper className="table">
        <Toolbar>
          <div className="inside">
            <Typography>Lista de Contas do Sistema</Typography>
            <IconButton color="secondary" component={Link}  to='/admin/account/new'>
              <Add/>
            </IconButton>
          </div>
        </Toolbar>
        <TableEntity rows={listAccounts} columns={columnsList} 
          titlePage={'Lista de Usuarios'} ClickFunc={EditForm}/>
      </Paper>
    </div>
    )
}

export default AccountPage;