import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

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
			{postData.title}
			<br />
			{postData.date}
			<br />
			{postData.blogContentHTML}
		</Layout>
	);
}
