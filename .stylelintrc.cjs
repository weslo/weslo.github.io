module.exports = {
    customSyntax: "postcss-scss",                 // <— required for .scss in v16+
    extends: [
        "stylelint-config-standard-scss",
    ],
    plugins: ["@stylistic/stylelint-plugin"],
    rules: {
        "@stylistic/indentation": 4,
        "@stylistic/max-empty-lines": 1,
        "no-descending-specificity": null,
        "font-family-name-quotes": "always-unless-keyword",
        "no-invalid-position-declaration": null
    },
    ignoreFiles: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/.git/**",
        "**/style/plugins/**"
    ]
};