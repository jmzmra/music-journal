// Small wrapper around localStorage so other services stay focused on data logic.
const memoryStorage = new Map();

function getStorage() {
  if (typeof localStorage !== 'undefined') {
    return localStorage;
  }

  return {
    getItem: (key) => (memoryStorage.has(key) ? memoryStorage.get(key) : null),
    setItem: (key, value) => memoryStorage.set(key, value)
  };
}

export function getData(key, defaultValue) {
  const storage = getStorage();
  const rawValue = storage.getItem(key);

  if (!rawValue) {
    return defaultValue;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return defaultValue;
  }
}

export function setData(key, value) {
  const storage = getStorage();
  storage.setItem(key, JSON.stringify(value));
}
