import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取得
export default function getPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// 「.md」という拡張子を取り除く
		const id = fileName.replace(/\.md$/, "");

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// マークダウンファイルのメタ情報を取得
		const matterResult = matter(fileContents);
		// idとデータを返却
		return {
			id,
			...matterResult.data,
		};
	});
	return allPostsData;
}

// getStaticPathでreturn文で使用するpathを取得する
export function getAllpostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}
