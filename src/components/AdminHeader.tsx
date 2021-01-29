import React from 'react'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

const AdminHeader = () => {
    return(
        <header>
            <Button component={Link}  to='/admin' color='secondary'>Home</Button>
            <Button component={Link}  to='/admin/contato' color='secondary' >Contatos</Button>
            <Button component={Link}  to='/admin/plano' color='secondary'>Planos</Button>
            <Button component={Link}  to='/admin/account' color='secondary'>Usuários</Button>
            <Button component={Link}  to='/admin/support' color='secondary'>Suporte</Button>
            <Button component={Link}  to='/admin/lead' color='secondary'>Vendas</Button>
            
        </header>
    )
}

export default AdminHeader;