module.exports = {
  rules: {
    // Ref: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    //
    // Airbnb:
    // 'import/prefer-default-export': 'error'
    //
    // Allow `export const` without a export default from a module
    // The reason we chose this to be allowed is because we'd like some modules to
    // export only certain functions. Enforcing a `export default` will likely cause
    // more issues and boilerplate code.
    'import/prefer-default-export': 'off',
  },
};
