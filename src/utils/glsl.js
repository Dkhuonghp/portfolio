/**
 * Template Literal identity function. Behaves the same as
 * normal template literal backticks, just is a functional
 * form for eas of use within simple tagged template literals
 *
 * https://esdiscuss.org/topic/string-identity-template-tag
 */
export function templateLiteral(strs, ...args) {
  return strs
    .reduce((accum, str, i) => accum.concat([str, args[i]]), [])
    .join("");
}

/**
 * We're just using this to gain syntax highlighting. You should probably
 * use glslify on an full fledged project. Adds es style imports to your
 * shaders! :tada:
 *
 * https://github.com/glslify/glslify
 */
export const glsl = templateLiteral;
