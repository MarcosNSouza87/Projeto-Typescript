import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'
import PrivateRoute from './privateRoute'

import ContatoPage from '../pages/Contato/ContatoPage'
import NewContatoPage from '../pages/Contato/NewContatoPage'
import EditContatoPage from '../pages/Contato/EditContatoPage'

import PlanosPage from '../pages/Planos/PlanosPage'
import NewPlanoPage from '../pages/Planos/NewPlanoPage'
import EditPlanoPage from '../pages/Planos/EditPlanoPage'

import AccountPage from '../pages/Account/AccountPage'
import NewAccountPage from '../pages/Account/NewAccountPage'
import EditAccountPage from '../pages/Account/EditAccountPage'

import SuportePage from '../pages/Suporte/SuportePage'
import NewSuportePage from '../pages/Suporte/NewIncidentPage'
import EditSuportePage from '../pages/Suporte/EditIncidentPage'

import VendasPage from '../pages/Vendas/LeadPage'
import NewLeadPage from '../pages/Vendas/NewLeadPage'
import EditLeadPage from '../pages/Vendas/EditLeadPage'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <PrivateRoute path='/admin' exact component={Dashboard} isSignedIn={true} />
          <PrivateRoute path='/admin/contato' exact component={ContatoPage} isSignedIn={true} />
          <PrivateRoute path='/admin/contato/new' component={NewContatoPage} isSignedIn={true} />
          <PrivateRoute path='/admin/contato/edit' component={EditContatoPage} isSignedIn={true} />
          <PrivateRoute path='/admin/plano' exact component={PlanosPage} isSignedIn={true}/>   
          <PrivateRoute path='/admin/plano/new' component={NewPlanoPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/plano/edit' component={EditPlanoPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/account' exact component={AccountPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/account/new'  component={NewAccountPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/account/edit'  component={EditAccountPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/support' exact component={SuportePage} isSignedIn={true}/>
          <PrivateRoute path='/admin/support/new'  component={NewSuportePage} isSignedIn={true}/>
          <PrivateRoute path='/admin/support/edit'  component={EditSuportePage} isSignedIn={true}/>
          
          
          <PrivateRoute path='/admin/lead' exact component={VendasPage} isSignedIn={true}/>
          <PrivateRoute path='/admin/lead/new'  component={NewLeadPage} isSignedIn={true}/>   
          <PrivateRoute path='/admin/lead/edit'  component={EditLeadPage} isSignedIn={true}/>

        </Switch>
      </BrowserRouter>
    )
}
