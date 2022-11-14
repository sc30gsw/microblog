import Head from "next/head";
import style from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin code";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
	return (
		<div className={style.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={style.header}>
				{/* Layoutの呼び出しがHomeである場合 */}
				{home ? (
					<>
						<img
							src="/images/profile.png"
							className={`${utilStyle.borderCircle} ${style.headerHomeImage}`}
						/>
						<h1 className={utilStyle.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<img src="/images/profile.png" className={utilStyle.borderCircle} />
						<h1 className={utilStyle.heading2Xl}>{name}</h1>
					</>
				)}
			</header>
			{/* propsを設定することで、import先でmainの中身を各自で設定できる */}
			<main>{children}</main>
			{/* Layoutの呼び出しがHomeでない場合 */}
			{!home && (
				<div>
					<Link href="/">ホームへ戻る</Link>
				</div>
			)}
		</div>
	);
}

export default Layout;
