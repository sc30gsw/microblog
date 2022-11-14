import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import style from "../styles/Home.module.css";
import getPostsData from "../lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
	const allPostsData = getPostsData();
	console.log(allPostsData);

	return {
		props: {
			allPostsData,
		},
	};
}

// SSRの場合
// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			// コンポーネントに渡すための情報
// 		},
// 	};
// }

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p className={utilStyle.headingMd}>
					私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
				</p>
			</section>

			<section>
				<h2 className={style.blogTitle}>📝エンジニアのブログ</h2>
				<div className={style.grid}>
					{allPostsData.map((post) => (
						<article key={post.id}>
							<Link href={`/posts/${post.id}`}>
								<img
									src={post.thumbnail}
									alt=""
									className={style.thumbnailImage}
								/>
							</Link>
							<Link legacyBehavior href={`/posts/${post.id}`}>
								<a className={utilStyle.boldText}>{post.title}</a>
							</Link>
							<br />
							<small className={utilStyle.lightText}>{post.date}</small>
						</article>
					))}
				</div>
			</section>
		</Layout>
	);
}
