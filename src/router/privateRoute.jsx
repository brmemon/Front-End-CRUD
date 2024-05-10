import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let uid = sessionStorage.getItem('id');
    return (
        uid ? <Outlet /> : <Navigate to="/auth/login" />
    )
}

export default PrivateRoutes