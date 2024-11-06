import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from 'eslint-config-dicodingacademy';
 
exportdefault [
  daStyle,
  // other config style
];


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
];