function hello(username) {
    const morning = [5, 6, 7, 8, 9, 10, 11];
    const afternoon = [12, 13, 14, 15, 16, 17];
    const evening = [18, 19, 20, 21, 22];
    const night = [23, 0, 1, 2, 3, 4];
    const hours = new Date().getHours();
    let daytime = '';

    if (morning.includes(hours)) {
        daytime = 'morning';
    } else if (afternoon.includes(hours)) {
        daytime = 'afternoon';
    } else if (evening.includes(hours)) {
        daytime = 'evening';
    } else if (night.includes(hours)) {
        daytime = 'night';
    } else {
        daytime = 'day';
    }

    return `Good ${daytime}, ${username}!`;
}

export {hello}