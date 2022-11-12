import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Shin code";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<img src="/images/profile.png" className={utilStyles.borderCircle} />
				<h1 className={utilStyles.heading2Xl}>{name}</h1>
			</header>
			{/* propsを設定することで、import先でmainの中身を各自で設定できる */}
			<main>{children}</main>
		</div>
	);
}

export default Layout;
