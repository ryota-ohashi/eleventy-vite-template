const config = require("./config");

module.exports = (eleventyConfig) => {
	// 静的ファイルのコピー
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

	// 開発環境の設定
	if (process.env.ELEVENTY_ENV !== 'production') {
		eleventyConfig.setBrowserSyncConfig({
			server: "public",
			files: [
				'public/**/*',
				'src/site/**/*.njk',
				'src/styles/**/*.scss',
				'src/scripts/**/*.js'
			],

			port: 8080,
			ui: false,
			ghostMode: false,
			open: true,
			notify: false,
			middleware: [
				function(req, res, next) {
					res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
					next();
				}
			]
		});

		eleventyConfig.addWatchTarget('./src/site/');
		eleventyConfig.addWatchTarget('./src/styles/');
		eleventyConfig.addWatchTarget('./src/scripts/');
	}

	return {
		dir: {
			input: "src/site/pages",
			includes: "../includes",
			layouts: "../includes/layouts",
			data: "../data",
			output: "public"
		},
		templateFormats: ["njk", "md"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		pathPrefix: config.pathPrefix
	};
};
