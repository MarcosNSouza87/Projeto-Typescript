import React from 'react'
import AdminHeader from '../components/AdminHeader'


const AdminLayout = ({children}:any) => {
    return(
        <div>
            <AdminHeader/>
            <div className='body'>
            {children}
            </div>
        </div>
    )
}

export default AdminLayout;