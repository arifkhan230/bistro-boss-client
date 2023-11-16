import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from= location.state?.from?.pathname || "/" 

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // sign in user with email pass 
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                
                Swal.fire({
                    title: "Good job!",
                    text: "You have logged in successfully!",
                    icon: "success"
                  });
                  navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
            Swal.fire({
                title: "Good job!",
                text: "validation successful",
                icon: "success"
              });
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleValidateCaptcha}
                                    type="text"
                                    name="captcha"
                                    ref={captchaRef}
                                    placeholder="type the captcha above"
                                    className="input input-bordered"
                                    required />
                                <button
                                    
                                    className="btn btn-outline btn-accent btn-xs mt-2"
                                >Validate
                                </button>

                            </div>
                            <div className="form-control mt-6">
                                <input
                                    disabled={disabled}
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small>New Here?  <Link
                                to="/signUp"
                                className='text-green-600'
                            >Create an account
                            </Link> </small></p>

                            <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;