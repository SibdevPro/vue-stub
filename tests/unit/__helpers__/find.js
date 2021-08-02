/**
 * @example
 * const findAllByTestId = (id) => findAllByTestIdWithWrapper(wrapper, id);
 * @param {import("@vue/test-utils").Wrapper} wrapper
 * @param {string} id
 * @returns {import("@vue/test-utils").WrapperArray | undefined}
 */
export function findAllByTestIdWithWrapper(wrapper, id) {
  return wrapper.findAll(`[data-testid=${id}]`);
}

/**
 * @example
 * const findByTestId = (id) => findByTestIdWithWrapper(wrapper, id);
 * @param {import("@vue/test-utils").Wrapper} wrapper
 * @param {string} id
 * @returns {import("@vue/test-utils").Wrapper | undefined}
 */
export function findByTestIdWithWrapper(wrapper, id) {
  return wrapper.find(`[data-testid=${id}]`);
}

/**
 * @example
 * const findButtonByText = (text) => findButtonByTextWithWrapper(wrapper, text);
 * @param {import("@vue/test-utils").Wrapper} wrapper
 * @param {string} text
 * @returns {import("@vue/test-utils").Wrapper | undefined}
 */
export function findButtonByTextWithWrapper(wrapper, text) {
  return wrapper.findAll('button').wrappers.find(w => w.text() === text);
}
