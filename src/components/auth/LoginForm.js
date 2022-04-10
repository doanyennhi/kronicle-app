import Layout from "../../components/Layout";
import style from "./RegisterForm.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
    }

    return (
        <Layout className={style["register-container"]} header footer>
            <div className={style["container"]}>
            <form className={style["form"]} onSubmit={handleSubmit}>
                <h1 className={style["h1"]}>Login</h1>
                <img
                    src={"../../media/icons/logo.png"}
                    className={style["logo"]}
                    alt={"Kronicle logo"}
                />
                <p className={style["p"]}>Not a member? <Link to="/register" className={style["a"]}>Register.</Link></p>
                <label className={style["label"]}>Email or Phone number</label>
                <input
                    type="text"
                    value={emailOrPhoneNumber}
                    onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                    className={style["input"]}
                />
                <label className={style["label"]}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={style["input"]}
                />
            </form>
            <div className={style["button-wrapper"]}>
              <Link to="/">
                <button className={style["register-btn"]}>SIGN IN</button>
              </Link>
            </div>
            </div>
        </Layout>
    );
};

export default LoginForm;