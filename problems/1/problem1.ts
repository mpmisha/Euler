export class Problem1 {
    public sumDeviders(arr: number[], limit: number): number {
        let sum: number = 0;
        for (let i = 1; i < limit; i++) {
            arr.some((num: number) => {
                if (this.isDevider(i, num)) {
                    sum += i;
                    return true;
                }
            });
        }
        return sum;
    }

    private isDevider(num: number, devider: number): boolean {
        return num % devider === 0;
    }
}
Problem1;