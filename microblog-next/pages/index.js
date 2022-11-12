import Link from "next/link";
import Layout from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import style from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout>
			<section>
				<p className={utilStyle.headingMd}>
					私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
				</p>
			</section>

			<section>
				<h2 className={style.blogTitle}>📝エンジニアのブログ</h2>
				<div className={style.grid}>
					<article>
						<Link href="/">
							<img
								src="/images/thumbnail01.jpg"
								alt=""
								className={style.thumbnailImage}
							/>
						</Link>
						<Link legacyBehavior href="/">
							<a className={utilStyle.boldText}>
								SSGとSSRの使い分けの場面はいつなのか？
							</a>
						</Link>
						<br />
						<small className={utilStyle.lightText}>Feburary 23, 2022</small>
					</article>
					<article>
						<Link href="/">
							<img
								src="/images/thumbnail01.jpg"
								alt=""
								className={style.thumbnailImage}
							/>
						</Link>
						<Link legacyBehavior href="/">
							<a className={utilStyle.boldText}>
								SSGとSSRの使い分けの場面はいつなのか？
							</a>
						</Link>
						<br />
						<small className={utilStyle.lightText}>Feburary 23, 2022</small>
					</article>
					<article>
						<Link href="/">
							<img
								src="/images/thumbnail01.jpg"
								alt=""
								className={style.thumbnailImage}
							/>
						</Link>
						<Link legacyBehavior href="/">
							<a className={utilStyle.boldText}>
								SSGとSSRの使い分けの場面はいつなのか？
							</a>
						</Link>
						<br />
						<small className={utilStyle.lightText}>Feburary 23, 2022</small>
					</article>
					<article>
						<Link href="/">
							<img
								src="/images/thumbnail01.jpg"
								alt=""
								className={style.thumbnailImage}
							/>
						</Link>
						<Link legacyBehavior href="/">
							<a className={utilStyle.boldText}>
								SSGとSSRの使い分けの場面はいつなのか？
							</a>
						</Link>
						<br />
						<small className={utilStyle.lightText}>Feburary 23, 2022</small>
					</article>
				</div>
			</section>
		</Layout>
	);
}
