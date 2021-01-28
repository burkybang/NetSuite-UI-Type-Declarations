// Type definitions for NetSuite UI
// Project: http://www.netsuite.com
// Definitions by: Adam Smith <https://github.com/burkybang> <https://twitter.com/burkybang>
// Definitions: https://github.com/burkybang/NetSuite-UI-Types

/**
 * Create native NetSuite modal window with HTML
 * Only available in browser context
 *
 * @param {string} windowId - Added as a class to the modal window
 * @param {number} width - Width of the modal window
 * @param {number} height - Height of the modal window
 * @param {*} unknown1
 * @param {*} unknown2
 * @param {string} windowTitle - Displays in the top bar of the modal window
 * @param {undefined} unknown3
 * @param {string} html - HTML to display in the body of the modal window
 * @return {void}
 *
 * @example
 * nlExtOpenDivWindow('my-test-window', 500, 400, undefined, undefined, 'My Test Window', undefined, '<strong>This is a test body</strong>');
 */
declare function nlExtOpenDivWindow(windowId: string, width: number, height: number, unknown1: any, unknown2: any, windowTitle: string, unknown3: any, html: string): void;

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
 * @example
 * nlExtOpenWindow('https://netsuite.com', 'my-test-window', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function nlExtOpenWindow(url: string, windowId: string, width: number, height: number, unknown1: any, unknown2: any, windowTitle: string): void;

/**
 * Create native NetSuite alert banner
 * Only available in browser context
 *
 * @param {string} id - Banner element id
 * @param {string} title - Title of the banner
 * @param {string} body - Body of the banner
 * @param {number} type - Type of banner
 * @return {void}
 *
 * @example
 * showAlertBox('upload-status', 'Upload Complete', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function showAlertBox(id: string, title: string, body: string, type: number): void;

/**
 * Create native NetSuite alert banner
 * Only available in browser context
 *
 * @param {string} id - Banner element id
 * @return {void}
 *
 * @example
 * hideAlertBox('upload-status');
 */
declare function hideAlertBox(id: string): void;

/**
 * Create native NetSuite alert message box
 * Only available in browser context
 *
 * @param {string} body - Body of the message box
 * @param {string} title - Title of the message box
 * @param {number} type - Type of message box
 * @return {void}
 *
 * @example
 * nlShowMessage('This is a test message', 'Test Title');
 */
declare function nlShowMessage(body: string, title: string, type: number): void;

declare namespace NLAlertDialog {
  export const CONFIRMATION = 0;
  export const INFORMATION = 1;
  export const WARNING = 2;
  export const ERROR = 3;
  export const imageNames: ['confirmation', 'info', 'warning', 'error'];
}

declare namespace NS {
  export namespace UI {
    export namespace Constants {
      
    }
    export namespace Helpers {
      
    }
    export namespace Menu {
      export namespace menus {
        export interface roles {
          refreshItem(item: any);
          
          rootElement: Element
        }
      }
    }
    export namespace Messaging {
      export namespace Alert {
        
      }
    }
  }
  
  export namespace form {
  }
  
  export namespace form {
    function isInited(): boolean
    
    function setInited(isInited: boolean): void
    
    function isChanged(): boolean
    
    function setChanged(isChanged: boolean): void
    
    function isValid(): boolean
    
    function setValid(isValid: boolean): void
    
    function isEditMode(): boolean
    
    function isViewMode(): boolean
    
    function isNewMode(): boolean
  }
  
  export namespace sessionStatusUI {
    function refreshHandler(): void
  }
}

declare function closePopup(): void

declare namespace Ext {
  
  export class Window {
    close(): void
  }
  
  export namespace WindowMgr {
    function getActive(): Ext.Window
  }
}

declare var dropdowns: { [key: string]: NLDropdown };
declare var multidropdowns: { [key: string]: NLMultiDropdown };

declare function getDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLDropdown

declare function getDropdownFromNameC(name: string, window: Window): NLDropdown

declare function getTextWidthDiv(): HTMLDivElement

declare function getMultiDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLMultiDropdown

declare function getMultiDropdownFromNameC(name: string, window: Window): NLMultiDropdown

declare interface NLDropdown {
  constructor(name: string, nameC: string, values: any[], defaultIndex: number, e: any, flags: number, h: any, minimumWidth?, k?: any): NLDropdown
  
  // this.setWidth(h, minimumWidth, k);
  
  renderDocument: Document
  name: string
  nameC: string
  textArray: string[]
  valueArray: string[]
  valueToIndexMap: { [key: number]: number }
  defaultIndex: number
  indexAtRenderTime: number
  isOpen: boolean
  divWidthHasBeenSet: boolean
  disabled: boolean
  div: HTMLDivElement
  currentCell: HTMLTableCellElement
  searchString: string
  typeAhead: boolean
  cancelEventOnEnterKey: boolean
  width: number
  minimumWidth: number
  flags: number
  sMandatoryBgColor: string
  bRequired: boolean
  inpt: HTMLInputElement
  ddbtn: HTMLInputElement
  hddn: HTMLInputElement
  indx: HTMLInputElement
  span: HTMLSpanElement
  elementsAreInitialized: boolean
  bInitialize: boolean
  inptText: string
  inptWidth: number
  
  addOption(value: string, text: string, index: number): void
  
  adjustDivForScrollbar(div: HTMLDivElement): void
  
  becomeCurrent(): void
  
  buildDiv(): void
  
  cloneDropdownValues(dropdown: NLDropdown): void
  
  close(): void
  
  createDiv(): HTMLDivElement
  
  deleteAllOptions(): void
  
  deleteOneOption(lookupValue: string | number, setWidth?: boolean): void
  
  getContainer(): HTMLSpanElement
  
  getForm(): HTMLFormElement
  
  getHiddenInput(): HTMLInputElement
  
  getIndex(): number
  
  getIndexForText(lookupText: string): number
  
  getIndexForValue(lookupValue: number | string): number
  
  getInput(): HTMLInputElement
  
  getRequired(): boolean
  
  getText(index: number): string
  
  getTextAtIndex(index: number): string
  
  getTextForValue(lookupValue: string | number): string
  
  getTexts(): string[]
  
  getValue(): string
  
  getValueAtIndex(index: number): string
  
  getValues(): string[]
  
  gotoDefault(): void
  
  gotoNext(a: boolean): void
  
  handleKeydown(event: Event): void
  
  handleKeypress(event: Event): void
  
  handleMouseDown(event: Event): void
  
  handleMouseMove(event: Event): void
  
  handleOnBlur(event: Event): void
  
  handleOnFocus(event: Event): void
  
  hasAttribute(attribute: string): boolean
  
  initializeElements(extWindow: Ext.Window): void
  
  isSelectable(): boolean
  
  open(): void
  
  overrideArrowImage(image: string): void
  
  positionDiv(a: Element, b: any): void
  
  positionRelativeDiv(): void
  
  resetDropDown(): void
  
  respondToArrow(scrollAmount: number): void
  
  restoreToOriginalValue(): void
  
  scheduleSetWidth(): void
  
  setAndClose(index: number): void
  
  setArrowImage(image: string): void
  
  setBackgroundColor(color: string): void
  
  setCurrentCellInMenu(cell: HTMLTableCellElement): void
  
  setDefaultIndex(index: number): void
  
  setDefaultOrNotRequired(bool: boolean): void
  
  setDisabled(disabled: boolean): void
  
  setFocus(): void
  
  setHidden(hidden: boolean): void
  
  setIndex(index: number, focus: boolean): void
  
  setMandatoryBackgroundColor(color: string): void
  
  setOptionText(lookupValue: string | number, newText: string): void
  
  setRequired(required: boolean): void
  
  setText(text: string, focus?: boolean): void
  
  setValue(value: number, focus?: boolean): void
  
  setWidth(width: number, minimumWidth: number, c: any): void
  
  setWidthDirect(width: number): void
  
  sizeDiv(): void
}

declare interface NLMultiDropdown {
  constructor(name: string, nameC: string, values: any[], defaultValues: any[], e: any, f: any, h: any, g: any)
  
  renderDocument: Document
  name: string
  nameC: string
  textArray: string[]
  valueArray: string[]
  valueToIndexMap: { [key: number]: number }
  defaultValues: string
  selectedVals: string[]
  sMandatoryBgColor: string
  defaultBorderColor: string
  bRequired: boolean
  staticWidth: number
  numRows: number
  disabled: boolean
  hiddenField: HTMLInputElement
  span: HTMLSpanElement
  parentSpan: HTMLSpanElement
  table: HTMLTableElement
  width: number
  flags: number
  currendIdx: number
  previousIds: number
  onMouseMoveIdx: number
  
  add(a, b): void
  
  addIndex(a): void
  
  addOption(a, b, c, d): void
  
  becomeCurrent(): void
  
  buildSpan(): void
  
  contains(a): boolean
  
  deleteAllOptions(): void
  
  deleteOneOption(lookupValue: string | number): void
  
  getCell(index: number): HTMLTableCellElement
  
  getContainer(): HTMLSpanElement
  
  getForm(): HTMLFormElement
  
  getIndexForValue(lookupValue: number | string): number
  
  getParentSpan(): HTMLSpanElement
  
  getRequired(): boolean
  
  getSelectedText(a)
  
  getSelectedTextFromValues(a, b)
  
  getSelectedValues()
  
  getText(index: number): string
  
  getTextForValue(lookupValue: string | number): string
  
  getValue(a)
  
  getValues()
  
  handleKeydown(event: Event): void
  
  handleKeypress(event: Event): void
  
  handleMouseDown(event: Event): void
  
  handleMouseMove(event: Event): void
  
  handleMouseUp(event: Event): void
  
  handleMoveSelection(a, b): void
  
  handleScrolling(event: Event): void
  
  handleShiftKey(a, b): void
  
  handleTypeAhead(event: Event): void
  
  hasAttribute(attribute: string): boolean
  
  highLightBorder(a): void
  
  positionHelperIconsForNonIE(): void
  
  remove(a, b): void
  
  removeAll(): void
  
  resetDropDown(): void
  
  setBackgroundColor(color: string): void
  
  setDisabled(disabled: boolean): void
  
  setFocus(): void
  
  setHidden(hidden: boolean): void
  
  setHiddenField(a): void
  
  setIndex(index: number, focus: boolean): void
  
  setMandatoryBackgroundColor(color: string): void
  
  setRequired(required: boolean): void
  
  setValue(a): void
  
  setValues(a, b): void
  
  setWidth(): void
}

declare function refreshmachine(machine: string): void;

declare function resetDivSizes(): void;

declare function l_sort(a: number, b: string, c: boolean, d: any, e: string, f: string, g: any, h: number): void;

declare function setWindowChanged(window: Window, changed: boolean): void;

declare function addParamToURL(url: string, param: string, value: string, replace?: boolean): string;

declare function appendFormDataToURL(url: string): string;

declare function setTarget(a: string, b: string, c: boolean): void;

declare function NLPopupSelect_close(a?: string): void;

declare function globalSearch(string: string): void;