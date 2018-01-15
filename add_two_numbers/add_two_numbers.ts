export const addTwoNumbers =
    (pointer1: number[], pointer2: number[]): number[] => {
    const steps = Math.min(pointer1.length, pointer2.length);
    const result: number[] = [];
    let extra: number = 0;
    for (let i = 0; i < steps; i++) {
        const sum = pointer1[i] + pointer2[i] + extra;
        if (sum < 10) {
            result[i] = sum;
            extra = 0;
        } else {
            result[i] = sum - 10;
            extra = 1;
        }
    }
    // make sure the extra digits get taken care of;
    let longerPointer: number[];
    if (pointer1.length > pointer2.length) {
        longerPointer = pointer1;
    } else {
        longerPointer = pointer2;
    }
    for (let i = steps; i < longerPointer.length; i++) {
        // console.log("longerPointer[i]= ", i);
        result[i] = extra + longerPointer[i];
        extra = 0;
    }
    if (extra === 1) {
        result [result.length] = 1;
    }
    return result;
};
