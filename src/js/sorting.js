export default function sorting(obj, arr) {
  const result = [];
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    result.push({ key, value });
  }

  return result.sort((a, b) => {
    if (arr.includes(a.key) && !arr.includes(b.key)) {
      return -1;
    }
    if (arr.includes(b.key) && !arr.includes(a.key)) {
      return 1;
    }
    if (arr.includes(a.key) && arr.includes(b.key)) {
      return arr.indexOf(a.key) - arr.indexOf(b.key);
    }
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
}
