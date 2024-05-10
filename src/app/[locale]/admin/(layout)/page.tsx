'use client'
import {BaseButton} from "@/shared";
// import {redirect} from "next/navigation";
import {useLocale} from "next-intl";

const AdminPage = () => {
    const locale = useLocale()
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        window.location.replace(`/${locale + '/admin/dashboard'}`)
    }
    return (
        <form onSubmit={handleLogin}>
            <h1>LOGIN</h1>
            <input placeholder={'Username'} type="text"/>
            <input placeholder={'Password'} type="password"/>
            <button type={'submit'}><BaseButton active={true} text={'Login'}/></button>
        </form>
    );
};

export default AdminPage;