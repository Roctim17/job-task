
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './Login.css'
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";



    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        if (!password) {
            setError(' Password did not match');
            return;
        }
        if (!email) {
            setError(' Email did not match');
            return;
        }
    }

    // User for Google sign in
    const [userGoogle, setUserGoogle] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUserGoogle(user);

            })
            .catch(error => {
                console.log('error', error)
            })
    }





    //
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('email send');
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <div className='login'>
            <h1>Sign In</h1>
            <div className="row">
                <div className="col-md-7 col-sm-12">
                </div>
                <div className="col-md-4 col-sm-12 form p-5">


                    <Form onSubmit={handleUserSignin} className='w-100 m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />

                            <Form.Text className="text-muted">
                                We'll never share your Password with anyone else.
                            </Form.Text>
                            <p className='text-danger'>{error}</p>
                            <p >
                                Forgot Password?  <Link onClick={handleForgetPassword} to='#'>Reset Password </Link>
                            </p>


                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-100'>
                            Sign In
                        </Button>

                        <div className="p-3 or">or</div>
                        <Button onClick={handleGoogleSignIn} variant="light" type="submit" className='w-100'>
                            <img src="/image/google.png" alt="" width={'25px'} />
                            Sign In With Google
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;