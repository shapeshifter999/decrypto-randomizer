export default class SequenceGenerator {
    static generateAllSequences(availableItems, maxLevel, results, level = 1, selectedItems = []) {
        for (let i = 0; i<availableItems.length; i++) {
            const value = availableItems[i];

            if (level === maxLevel) {
                results.push([...selectedItems, value]);
            } else {
                const clonedAvailableItems = availableItems.slice();
                clonedAvailableItems.splice(i, 1);

                this.generateAllSequences(clonedAvailableItems, maxLevel, results, level + 1, [...selectedItems, value]);
            }
        }
    }
}
