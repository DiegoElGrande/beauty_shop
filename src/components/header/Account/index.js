import './account.scss'
import { useState, useEffect } from 'react'

export default function Account({ closeButton }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(false)

    async function authentication() {
        try {
            const res = await fetch(`https://67cdb91a125cd5af7578970e.mockapi.io/beauty_shop/users`)
            if (res.ok) {
                const response = await res.json()
                const auth = response.filter((i) => i.userName === userName && i.password === password)
                auth.length ? setAuth(true) : alert('User not found')
            } else {
                throw new Error(res.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (auth) {
            alert('You are logged in!')
            closeButton()
        }
    }, [auth])


    return (
        <div className="overwrap">
            <div className="menu_account">
                <img src="/image/icons/close.svg" alt="close" onClick={closeButton} />
                <div className="login">
                    <h2>Log in</h2>
                    <p>Please enter your e-mail and password</p>
                    <input type="text" name="e-mail" id="userName" placeholder='Email' onChange={text => setUserName(text.target.value)} value={userName} />
                    <input type="password" name="password" id="password" placeholder='Password' onChange={text => setPassword(text.target.value)} value={password} />
                    <button onClick={() => authentication()}>Log in</button>
                    <p id='or'>or</p>
                    <button className="google" >Continue with Google</button>
                    <p>Forgot your password? <a>Recover password</a></p>
                    <p>New to Bloom Beauty? <a>Create an account</a></p>
                </div>
            </div>
        </div>
    )
}