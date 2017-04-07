describe("test DynamicFont", function() {
	var g = require('../lib/main.node.js');
	var mock = require("./helpers/mock");
	var skeletonRuntime = require("./helpers/skeleton");
	beforeEach(function() {
	});
	afterEach(function() {
	});
	it("初期化", function() {
		// deprecatedなコンストラクタの動作確認を行う
		var runtime = skeletonRuntime();
		runtime.game.suppressedLogLevel = g.LogLevel.Debug;

		var font = new g.DynamicFont(
			g.FontFamily.SansSerif,
			20,
			runtime.game,
			{},
			"white",
			1,
			"red",
			true
		);
		expect(font.fontFamily).toBe(g.FontFamily.SansSerif);
		expect(font.size).toBe(20);
		expect(font.fontColor).toBe("white");
		expect(font.strokeWidth).toBe(1);
		expect(font.strokeColor).toBe("red");
		expect(font.strokeOnly).toBe(true);
		runtime.game.suppressedLogLevel = undefined;
	});
	it("初期化 - ParameterObject", function() {
		var runtime = skeletonRuntime();

		var font = new g.DynamicFont({
			game: runtime.game,
			fontFamily: g.FontFamily.SansSerif,
			size: 20,
			hint: {},
			fontColor: "white",
			fontWeight: g.FontWeight.Bold,
			strokeWidth: 1,
			strokeColor: "red",
			strokeOnly: true
		});
		expect(font.fontFamily).toBe(g.FontFamily.SansSerif);
		expect(font.size).toBe(20);
		expect(font.fontColor).toBe("white");
		expect(font.fontWeight).toBe(g.FontWeight.Bold);
		expect(font.strokeWidth).toBe(1);
		expect(font.strokeColor).toBe("red");
		expect(font.strokeOnly).toBe(true);
	});
	it("初期化 - ParameterObject, 文字列配列によるフォントファミリ指定, フォールバック", function() {
		var runtime = skeletonRuntime();

		var font = new g.DynamicFont({
			game: runtime.game,
			fontFamily: ["no-such-font", "Mock明朝"],
			size: 20
		});
		expect(font.fontFamily).toBe(g.FontFamily.Other);
		expect(font.fontName).toBe("Mock明朝");
		expect(font.size).toBe(20);
	});
	it("初期化 - ParameterObject, 文字列配列によるフォントファミリ指定, フォールバックでデフォルトフォント", function() {
		var runtime = skeletonRuntime();

		var font = new g.DynamicFont({
			game: runtime.game,
			fontFamily: ["no-such-font", "ありえないフォント"],
			size: 20
		});
		expect(font.fontFamily).toBe(g.FontFamily.Other);
		expect(font.fontName).toBe(mock.defaultFontName);
		expect(font.size).toBe(20);
	});
	it("初期化 - ParameterObject, 文字列によるフォントファミリ指定", function() {
		var runtime = skeletonRuntime();

		var font = new g.DynamicFont({
			game: runtime.game,
			fontFamily: "Mock明朝",
			size: 20
		});
		expect(font.fontFamily).toBe(g.FontFamily.Other);
		expect(font.fontName).toBe("Mock明朝");
		expect(font.size).toBe(20);
	});
	it("初期化 - ParameterObject, 文字列によるフォントファミリ指定, フォールバックでデフォルトフォント", function() {
		var runtime = skeletonRuntime();

		var font = new g.DynamicFont({
			game: runtime.game,
			fontFamily: "no-such-font",
			size: 20
		});
		expect(font.fontFamily).toBe(g.FontFamily.Other);
		expect(font.fontName).toBe(mock.defaultFontName);
		expect(font.size).toBe(20);
	});
});
