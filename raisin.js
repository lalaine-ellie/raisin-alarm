const raisinAlarm = function (cookies) {
    
    if (cookies.includes("🍇")) {
        return "Raisin alert!";
    }
    return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// stretch function to handle an array of cookie arrays
const raisinAlarmArray = function (cookies) {
    return cookies.map(raisinAlarm);
};
  
console.log(
    raisinAlarmArray([
        ["🍫", "🍫", "🍇", "🍫"],
        ["🍫", "🍇", "🍫", "🍫", "🍇"],
        ["🍫", "🍫", "🍫"],
    ])
);