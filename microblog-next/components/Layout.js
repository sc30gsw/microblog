import Head from "next/head";
import style from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";

const name = "Shin code";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
	return (
		<div className={style.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={style.header}>
				<img src="/images/profile.png" className={utilStyle.borderCircle} />
				<h1 className={utilStyle.heading2Xl}>{name}</h1>
			</header>
			{/* propsを設定することで、import先でmainの中身を各自で設定できる */}
			<main>{children}</main>
		</div>
	);
}

export default Layout;
