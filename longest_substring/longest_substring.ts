export const longestSubString = (inputString: string): number => {
    const subStringChars = new Set();
    let subStringLength: number = 0;
    let counter: number = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (!subStringChars.has(inputString.charAt(i))) {
            subStringChars.add(inputString.charAt(i));
            counter++;
        } else {
            // record the longest substring length seen so far
            if (subStringLength < counter) {
                subStringLength = counter;
            }
            subStringChars.clear();
            subStringChars.add(inputString.charAt(i));
            counter = 1;
        }
    }
    return subStringLength;
};
