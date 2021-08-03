const storage = localStorage;

export function loadStorageItem(key) {
  return storage.getItem(key);
}

export function saveStorageItem(key, value) {
  storage.setItem(key, value);
  return value;
}

export function removeStorageItem(key) {
  storage.removeItem(key);
  return null;
}
