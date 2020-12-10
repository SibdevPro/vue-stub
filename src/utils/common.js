import _isPlainObject from 'is-plain-object'
import _isEqual from 'lodash.isequal'

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isPlainObject(value) {
  return _isPlainObject(value)
}

export function isEqual(value, other) {
  return _isEqual(value, other)
}
