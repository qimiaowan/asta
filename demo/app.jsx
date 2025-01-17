import { addCount } from '~action/count.js'

export const loader = async (req) => {
	const count = req.query.count || 0
	const comments = [
		{
			name: '阿呆',
			avatar:
				'https://img3.tapimg.com/default_avatars/755e9ca449be08245191a743a128a8df.jpg?imageMogr2/auto-orient/strip/thumbnail/!300x300r/gravity/Center/crop/300x300/format/jpg/interlace/1/quality/80',
			content: 'bdbnxjcjcjj',
		},
		{
			name: '迪卢克',
			avatar:
				'https://img3.tapimg.com/default_avatars/7d713c00e515de52a63c0f51c8697c84.jpg?imageMogr2/auto-orient/strip/thumbnail/!300x300r/gravity/Center/crop/300x300/format/jpg/interlace/1/quality/80',
			content: 'Vbjjnnn😂',
		},
	]

	const imgs = [
		'https://img.tapimg.com/market/images/de62537f7b8aad4f6b8b53cb968901f0.png?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img.tapimg.com/market/images/123ec01bb9b5c42de4fa214303cf1383.png?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img.tapimg.com/market/images/286c9889acad05a6e3ae2f07b5035760.png?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1',
		'https://img.tapimg.com/market/images/ea16c10e162a5b9b2e2fe6746a1de6f3.png?imageView2/2/h/560/w/9999/q/80/format/jpg/interlace/1/ignore-error/1',
	]
	return {
		rate: '8.4',
		count,
		comments,
		imgs,
	}
}

export default ({ count, comments, rate, imgs }) => {
	return (
		<div>
			<header>
				<img src="https://img.tapimg.com/market/icons/9e99c190fdb4f28136921fcc74a7467f_360.png?imageMogr2/auto-orient/strip" alt=""></img>
				<h1>Can You Escape VintageBungalow 封测国际服</h1>
				<div class="rate">{rate}</div>
			</header>
			<main>
				<button $onclick={addCount}>下载TapTap客户端</button>
			</main>
			<div class="screenshot">
				<h3>截图</h3>
				<ul>
					{imgs.map((i) => {
						return (
							<li>
								<img src={i}></img>
							</li>
						)
					})}
				</ul>
			</div>

			<div class="screenshot">
				<h3>简介</h3>
				<p>
					Can You Escape VintageBungalow is new android escape game developed by KnfGame.In this game your locked inside a Vintage Bungalow
					House, the only way to escape from bungalow is to find the hidden key. For that you have click on the useful objects around the
					house and solve some interesting puzzles to find the hidden key. Good Luck and have fun playing Knf escape games and free online
					point and click escape games.
				</p>
			</div>

			<div class="comments">
				<h3>评价</h3>
				<ul>
					{comments.map(({avatar, name, content}) => {
						return (
							<li>
								<div class="bio">
									<img class="avatar" src={avatar}></img>
									<b class="name">{name}</b>
								</div>
								<p>{content}</p>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
