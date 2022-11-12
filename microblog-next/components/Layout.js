import Head from "next/head";

const name = "Shin code";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<img src="/images/profile.png" />
				<h1>{name}</h1>
			</header>
			{/* propsを設定することで、import先でmainの中身を各自で設定できる */}
			<main>{children}</main>
		</div>
	);
}

export default Layout;
