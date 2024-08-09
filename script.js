function filterItems(arr1, arr2) {
  const readyArr1 = arr1.filter((item) => item > 0);
  const readyAer2 = arr2.filter((item) => item > 0);

  return [...readyArr1, ...readyAer2];
}

// przykładowy input:
console.log(filterItems([1, -2, 3], [1, 0]));
console.log(filterItems([10, -10], [1, 2, 3]));
