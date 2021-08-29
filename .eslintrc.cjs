module.exports = {
	extends: [
		'plugin:import/recommended',
		'plugin:import/typescript',
		'xo',
		'xo-typescript',
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-tsdoc',
	],
	overrides: [],
	rules: {
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
		'@typescript-eslint/prefer-readonly': ['off'],
		'@typescript-eslint/no-extraneous-class': ['off'],
		'@typescript-eslint/member-ordering': ['off'],
		'@typescript-eslint/array-type': ['error', { default: 'array' }],
		'@typescript-eslint/no-empty-function': ['off'],
		'operator-linebreak': ['error', 'before'],
		'capitalized-comments': ['off'],
		'accessor-pairs': ['off'],
		'no-eq-null': ['off'],
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'no-await-in-loop': ['off'],
		'arrow-parens': ['error', 'always'],
		'@typescript-eslint/no-non-null-assertion': ['off'],
		'new-cap': ['off'],
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			ignoredNodes: ['TSTypeParameterInstantiation'],
		}],
		'@typescript-eslint/no-useless-constructor': ['off'],
		'import/no-unresolved': ['off'],
		'import/extensions': [
			'error',
			'always',
			{
				ignorePackages: true,
			}
		],
		'tsdoc/syntax': 'warn'
	},
};
