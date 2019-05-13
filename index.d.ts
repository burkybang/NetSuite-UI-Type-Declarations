// Type definitions for NetSuite UI
// Project: http://www.netsuite.com
// Definitions by: Adam Smith <https://github.com/burkybang>
// Definitions: https://github.com/burkybang/NetSuite-UI

/**
 * Create native NetSuite modal window with HTML
 * Only available in browser context
 *
 * @param {string} windowId - Added as a class to the modal window
 * @param {number} width - Width of the modal window
 * @param {number} height - Height of the modal window
 * @param {undefined} unknown1
 * @param {undefined} unknown2
 * @param {string} windowTitle - Displays in the top bar of the modal window
 * @param {undefined} unknown3
 * @param {string} html - HTML to display in the body of the modal window
 * @return {void}
 *
 * Usage
 * nlExtOpenDivWindow('my-test-window', 500, 400, undefined, undefined, 'My Test Window', undefined, '<strong>This is a test body</strong>');
 */
declare function nlExtOpenDivWindow(windowId: string, width: number, height: number, unknown1: undefined, unknown2: undefined, windowTitle: string, unknown3: undefined, html: string): void;

/**
 * Create native NetSuite modal window with URL
 * Only available in browser context
 *
 * @param {string} url - Value for src of the iframe in the body of the modal window - It's best to always add ifrmcntnr=T as a parameter if using a NetSuite URL
 * @param {string} windowId - Added as a class to the modal window
 * @param {number} width - Width of the modal window
 * @param {number} height - Height of the modal window
 * @param {undefined} unknown1
 * @param {undefined} unknown2
 * @param {string} windowTitle - Displays in the top bar of the modal window
 * @return {void}
 *
 * Usage
 * nlExtOpenWindow('https://netsuite.com', 'my-test-window', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function nlExtOpenWindow(url: string, windowId: string, width: number, height: number, unknown1: undefined, unknown2: undefined, windowTitle: string): void;