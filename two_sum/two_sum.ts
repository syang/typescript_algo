export const two_sum = (target : number, nums : number[]) => {
    let booking = new Map();
    for (const [index, value] of nums.entries()) {
        // console.log(index, value);
        if (booking.has(target - value)) {
            return [booking.get(target - value), index];
        } else {
            booking.set(value, index);
        }
    }
    return [null, null];
}

