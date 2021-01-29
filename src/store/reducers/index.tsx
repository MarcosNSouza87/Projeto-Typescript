import {combineReducers } from 'redux';

import users from './entities/users'
import plans from './entities/plans'
import reparos from './entities/reparos'
import status from './entities/status'
import account from './entities/account'
import lead from './entities/lead'

export default combineReducers({
    users,plans,reparos,status,account,lead
})