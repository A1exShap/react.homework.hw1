import { Component } from "react";

export class LoginForm extends Component {
    render() {

        return (
            <>
                <div>
                    <label>Логин:</label>
                    <input type="text" placeholder="ЛОГИН"  id="loginInput"/>
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" placeholder="ПАРОЛЬ"  id="passwordInput"/>
                </div>
                <button type="submit" onClick={this.handleLogin}>Войти</button>
            </>
        );
    }

    handleLogin = () => {
        const loginInput = document.getElementById('loginInput') as HTMLInputElement;
        const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;

        const login = loginInput.value;
        const password = passwordInput.value;

        fetch("/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, password })
        })
        .then(response => {
            if (response.ok) {
                console.log("SUCCESS");
            } else {
                throw new Error("ERROR");
            }
        })
        .catch(error => {
            console.error(error);
        });
    }
}