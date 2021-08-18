/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import run from '@rollup/plugin-run';
import execute from 'rollup-plugin-execute';
import del from 'rollup-plugin-delete';

const production = !process.env.ROLLUP_WATCH;

const onwarn = (message, warn) => {
	const ignored = {
		EVAL: ['node_modules'],
		// CIRCULAR_DEPENDENCY: [''],
	};
	const ignoredKeys = Object.keys(ignored);
	const ignoredValues = Object.values(ignored);

	for (let i = 0, l = ignoredKeys.length; i < l; ++i) {
		const ignoredKey = ignoredKeys[i];
		const ignoredValue = ignoredValues[i];

		for (const ignoredValuePart of ignoredValue) {
			if (message.code !== ignoredKey
				|| !message.toString().includes(ignoredValuePart)) {
				continue;
			}

			return;
		}
	}

	warn(message);
};

const watch = {
	clearScreen: false,
};

const plugins = [
	resolve({
		preferBuiltins: true,
	}),

	commonjs({
		ignoreDynamicRequires: true,
	}),

	production && del({ targets: 'dist/*' }),

	execute([
		// any commands to run during build
	]),

	json(),

	typescript({
		include: ['src/**/*.ts'],
		declaration: production,
		outDir: 'dist',
	}),

	!production && run(),
];

export default [{
	input: 'src/index.ts',
	output: {
		sourcemap: true,
		format: 'esm',
		dir: 'dist',
		preserveModules: true,
		preserveModulesRoot: 'src',
	},
	onwarn,
	watch,
	plugins,
}];
