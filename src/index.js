module.exports = function toReadable(number) {
    const zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return zeroNine[number];
    } else if (number < 20) {
        return tenNineteen[number - 10];
    } else {
        const arr = number.toString().split('');
        switch (arr.length) {
            case 2:
                return arr[1] == '0' ? tens[arr[0]] : `${tens[arr[0]]} ${zeroNine[arr[1]]}`;
            case 3:
                // is 100, 200, etc.
                if (arr[1] == '0' && arr[2] == '0') {
                    return `${zeroNine[arr[0]]} hundred`
                    // is 101, 102, 103, etc.
                } else if (arr[1] == '0') {
                    return `${zeroNine[arr[0]]} hundred ${zeroNine[arr[2]]}`
                    // is 110, 120, 130, etc.
                } else if (arr[2] == '0') {
                    return `${zeroNine[arr[0]]} hundred ${arr[1] == 1 ? tenNineteen[0] : tens[arr[1]]}`
                }
                else {
                    const remainder = Number(arr.join('').slice(1)); // get two digits part ...19, ...99, etc.
                    const res = remainder <= 20
                        ? tenNineteen[remainder - 10]
                        : `${tens[arr[1]]} ${zeroNine[arr[2]]}`
                    return `${zeroNine[arr[0]]} hundred ${res}`
                }
            default:
                return 'Given number should be less than 999';
        }
    }
}