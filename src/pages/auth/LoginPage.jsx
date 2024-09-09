import React from "react";
import LoginComponent from "../../components/auth/LoginComponent";
import useAuth from "../../hooks/auth/useAuth";

function LoginPage() {
    const {
        handleChange,
        iniciarSesion,
        loading,
    } = useAuth();
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <LoginComponent
                handleChange={handleChange}
                iniciarSesion={iniciarSesion}
                loading={loading}
            />
        </div>
    )
}

export default LoginPage;
