export default function Login(){
    return (
        <div>
        <form action="submit">
            <h2>Login</h2>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required/>
        </div>

        <div>
        <label htmlFor="user_id">User Name</label>
        <input type="text" id="user_id" name="user_id" required/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" required/>
            <label htmlFor="re-password">Password</label>
            <input type="text" id="re-password" name="re-password" required/>
        </div>
        </form>
        </div>
    )
}