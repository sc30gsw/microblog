import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyle from "../../styles/utils.module.css";

export async function getStaticPaths() {
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// paramsに動的URL（ここではid）に紐づくデータが格納されているため、
	// getPostData()の引数に「params.id」を渡すことでidに紐づく、
	// HTML解析がされたデータを呼び出し、取得することができる
	// 呼び出している関数が非同期（async）のためawaitとし、非同期で呼び出している
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyle.headingX1}>{postData.title}</h1>
				<div className={utilStyle.lightText}>{postData.date}</div>
				{/* 文字列をHTMLに変換するReactのプロパティ(dangerouslySetInnerHTML) */}
				{/* ただし、このプロパティを使用する際は、sanitize処理が必要である（scriptも読み込むため、それらを読み込ませないようにする処理が必要） */}
				<div
					dangerouslySetInnerHTML={{
						__html: postData.blogContentHTML,
					}}
				/>
			</article>
		</Layout>
	);
}
