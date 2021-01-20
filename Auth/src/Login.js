import React  , {useState,useEffect} from  "react"

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const Login = ({email, password,setPassword,setEmail,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passwordError}) =>{

    const [backgroundColor,setBackgroundColor] = useState("#4285F4")

    const analyze = (event) =>{
        if(strongRegex.test(event.target.value)) {
            
            setBackgroundColor( "#0F9D58" );
            setPassword(event.target.value)
        } else if(mediumRegex.test(event.target.value)) {
            
            setBackgroundColor("#F4B400" );
            setPassword(event.target.value)
        } else {
           
            setBackgroundColor("#DB4437" );
            setPassword(event.target.value)
        }

    }

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <div style={{ backgroundColor: "#4285F4" }}>
                <input type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}>
                </input>
                </div>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <div style={{ backgroundColor: backgroundColor }}>
                <input 
                type="password"
                required
                value={password}
                // onChange={(e)=>setPassword(e.target.value)}
                onChange={(e)=>analyze(e)}
                />
                </div>

                <p className="errorMsg">
                    {passwordError}
                </p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}> Sign in</button>
                        <p>Dont have an account  ? <span onClick={()=>{
                            setHasAccount(!hasAccount)
                        }}>Sign Up</span></p>
                        </>

                    ): (
                        <>
                        <button onClick={handleSignUp}>Sign up</button>
                        <p>have an account  ? <span onClick={()=>{
                            setHasAccount(!hasAccount)
                        }}>Sign in</span></p>
                        </>
                    ) 
                        

                    }
                </div>
            </div>

        </section>
    )

}
export default Login;