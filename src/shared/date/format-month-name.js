const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// The following line is ignored as the month that is passed in is controlled
// The list of month names is also controlled above
// eslint-disable-next-line security/detect-object-injection
module.exports = month => months[month];
