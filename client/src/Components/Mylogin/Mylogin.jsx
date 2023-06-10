import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import '../../App.css'
const Mylogin = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const login = async (e) => {
        e.preventDefault()
        localStorage.setItem("email", data.email)
        console.log(data.email);
        window.open("/childDashboard")
		
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn} onClick={login}>
							Log In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					{/* <Link to="/signup"> */}
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					{/* </Link> */}
				</div>
			</div>
		</div>
		
	);
};

export default Mylogin;