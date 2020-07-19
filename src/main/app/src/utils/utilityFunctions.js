export function countItems(items) {
    let counts = {};
    items.forEach((item) => {
        counts[item.name] = (counts[item.name] || 0) + 1;
    });
    return counts;
}
