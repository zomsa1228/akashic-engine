namespace g {
	/**
	 * `ScriptAsset` の実行時、`g` 以下に加えられる値を定めたinterface。
	 * `g` の実際の値は、本来の `g` のすべてのプロパティに加えて以下を持つ必要がある。
	 *
	 * 通常のゲーム開発者がこのクラスを直接利用する必要はない。
	 * `ScriptAsset` を実行する場合は、暗黙にこのクラスを利用する `require()` を用いるべきである。
	 */
	export interface ScriptAssetExecuteEnvironment {
		/**
		 * `ScriptAsset` にひも付けられた `Game` 。
		 */
		game: g.Game;

		/**
		 * この `ScriptAsset` が公開する値のプレースホルダ。
		 * エンジンはここに代入された値を `module.exports` に代入されたものとみなす。
		 */
		exports: any;

		/**
		 * この `ScriptAsset` のファイルパスのうち、ディレクトリ部分。
		 */
		dirname: string;
		/**
		 * この `ScriptAsset` のファイルパス。
		 */
		filename: string;

		/**
		 * この `ScriptAsset` に対応するモジュール。
		 */
		module: Module;
	}
}
