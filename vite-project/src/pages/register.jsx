import AuthLayout from '../components/Layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';


const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
           
        </AuthLayout>
    )
}

export default RegisterPage;

//2. Memanggil AuthLayout punya children yaitu FormRegister