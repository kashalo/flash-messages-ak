import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es';
export default {
	input: './src/index.js', // Path relative to package.json
	output: {
		name: 'flashMessageAk',
		exports: 'named',
	},
	plugins: [
		buble(), // Transpile to ES5
		commonjs(),
		uglify()
	],
};