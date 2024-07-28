const IPReset = require('./src');
const ipr = new IPReset('platform-tools\\adb.exe', 1000);

(async () => {
    try {
        await ipr.reset();
        console.log('Your IP Address has been changed!');
    } catch (error) {
        console.error('Failed to change IP address:', error);
    }
})();
