var splitArray = function(a, k) {

    const countPartitions = (a, maxSum) => {
        let partitions = 1;
        let subArraySum = 0;

        for (let i = 0; i < a.length; i++) {
            let num = a[i];

            if (subArraySum + num <= maxSum) {
                subArraySum += num;
            } else {
                partitions++;
                subArraySum = num;
            }
        }

        return partitions;
    };

    let low = Math.max(...a);
    let high = a.reduce((acc, val) => acc + val, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let partitions = countPartitions(a, mid);

        if (partitions > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
};