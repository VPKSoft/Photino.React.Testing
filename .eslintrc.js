module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
        "plugin:unicorn/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ["eslint-plugin-jsdoc", "eslint-plugin-unicorn", "react", "@typescript-eslint", "prettier", "react-hooks"],
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    // Fine tune rules
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        eqeqeq: "error",
        "no-console": "warn",
        "no-undef": "off",
        "no-unused-vars": "off",
        "prettier/prettier": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/filename-case": [
            "error",
            {
                case: "pascalCase",
                ignore: ["^\\.js$"],
            },
        ],
    },
};
