export const twoSum = (target: number, nums: number[]) => {
    const booking = new Map();
    // this is a good way
    for (const [index, value] of nums.entries()) {
        // console.log(index, value);
        if (booking.has(target - value)) {
            return [booking.get(target - value), index];
        } else {
            booking.set(value, index);
        }
    }
    return [null, null];
};
