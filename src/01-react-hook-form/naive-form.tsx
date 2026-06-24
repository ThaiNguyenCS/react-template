import { useState } from 'react'

export default function NaiveForm() {
    console.log('NaiveForm render')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({ email: "", password: "" })
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                value={password}
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            <button>
                Submit
            </button>
        </form>
    </>
}