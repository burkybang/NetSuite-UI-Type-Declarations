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
 * @param {undefined} fld
 * @param {boolean} scrollbars - Auto scroll?
 * @param {string} windowTitle - Displays in the top bar of the modal window
 * @return {void}
 *
 * @example
 * nlExtOpenWindow('https://netsuite.com', 'my-test-window', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function nlExtOpenWindow(url: string, windowId: string, width: number, height: number, fld: any, scrollbars: boolean, windowTitle: string): void;

interface AlertBox {
  
}

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
 * Only available in browser context
 *
 * @param {string} id - Banner element id
 * @return {void}
 *
 * @example
 * getAlertBox('upload-status');
 */
declare function getAlertBox(id: string): AlertBox;

/**
 * Only available in browser context
 *
 * @param {AlertBox} olderAlertBox
 * @param {AlertBox} newAlertBox
 * @return {void}
 *
 * @example
 * replaceAlertBox(getAlertBox('upload-status1'), getAlertBox('upload-status1'));
 */
declare function replaceAlertBox(olderAlertBox: AlertBox, newAlertBox: AlertBox): void;

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

interface Window {
  nlExtOpenDivWindow: typeof nlExtOpenDivWindow;
  nlExtOpenWindow: typeof nlExtOpenWindow;
  showAlertBox: typeof showAlertBox;
  getAlertBox: typeof getAlertBox;
  replaceAlertBox: typeof replaceAlertBox;
  hideAlertBox: typeof hideAlertBox;
  nlShowMessage: typeof nlShowMessage;
}

declare namespace NLAlertDialog {
  const CONFIRMATION = 0;
  const INFORMATION = 1;
  const WARNING = 2;
  const ERROR = 3;
  const imageNames: ['confirmation', 'info', 'warning', 'error'];
}

declare interface NS {
  // @ts-ignore
  jQuery: jQuery;
}

declare namespace NS {
  namespace UI {
    namespace Constants {
      let GLOBALSEARCH_MAX_ITEMS: number;
      let MENU_ITEM_HEIGHT: number;
    }
    namespace Helpers {
      function preventDefault(event: MouseEvent): void;
    }
    namespace Menu {
      export namespace menus {
        export interface roles {
          refreshItem(item: any);
          
          rootElement: Element;
        }
      }
    }
    namespace Messaging {
      namespace Alert {
        
      }
    }
  }
  
  export namespace Dashboard {
    function getInstance(): NSDashboard;
  }
  
  namespace form {
  }
  
  namespace form {
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
  
  namespace sessionStatusUI {
    function refreshHandler(): void
  }
}

type NSPortletAction = 'minimize' | 'refresh' | 'close' | 'maximize' | 'editCustomize' | 'reset' | 'setup';
type NSDashboardAction = 'changeColumnLayout' | 'toggleContentManager';

declare interface NSDashboard {
  type: string;
  allowDragAndDrop: boolean;
  identity: {
    dashboardId: number,
  };
  portlets: { [p: string]: NSPortlet };
  
  addPortlet(b?: unknown, c?: unknown, a?: unknown): void;
  
  addPortletLoadingPlaceholder(b?: unknown, c?: unknown, a?: unknown): void;
  
  alignColumnHeight(): void;
  
  bindActions(): void;
  
  cancelColumnHeightAlignment(): void;
  
  createPortletOriginPlaceholder(b?: unknown): void;
  
  dropPortletOnContentManager(b?: unknown): void;
  
  getBackend(): { [p: string]: unknown };
  
  getId(): number;
  
  getIdentity(): {
    dashboardId: number,
  };
  
  getPortlet(id: string): NSPortlet;
  
  getPortletIds(): string[];
  
  getPortletOriginPlaceholder(): unknown;
  
  getPortletsCount(): number;
  
  getType(): string;
  
  handleEvent(b?: unknown): void;
  
  handleNewPlaceholderPosition(b?: unknown): void;
  
  initialize(b?: unknown): void;
  
  initializeSortablePlugin(): void;
  
  insertPortlet(b?: unknown, c?: unknown, a?: unknown, k?: unknown, f?: unknown, e?: unknown): void;
  
  layoutUpdate(b?: unknown, c?: unknown, a?: unknown): void;
  
  logEvent(b?: unknown): void;
  
  makeHeaderOverSelectTooltips(): void;
  
  mapPlugins(): void;
  
  mapPortlets(): void;
  
  portletQuery(b?: unknown, c?: unknown, a?: unknown): unknown;
  
  portletUpdate(b?: unknown, c?: unknown, a?: unknown): void;
  
  receiveContentManagerItem(b?: unknown, c?: unknown): void;
  
  registerActionHandler(b?: unknown, c?: unknown, a?: unknown): void;
  
  restartPortlet(b?: unknown, c?: unknown): void;
  
  startPortletDragging(b?: unknown, c?: unknown): void;
  
  stopPortletDragging(b?: unknown, c?: unknown): void;
  
  triggerAction(action: NSDashboardAction, args?: string): void;
  
  triggerActionOnAllPortlets(action: NSPortletAction, args?: string[], logMessage?: string): void;
  
  unbindActions(): void;
  
  updateMaximized(b?: unknown, c?: unknown, a?: unknown): void;
  
  updateMinimized(b?: unknown, c?: unknown, a?: unknown): void;
  
  updatePortletPlacement(b?: unknown, c?: unknown): void;
}

declare interface NSPortlet {
  superClassName: string;
  className: string;
  id: string;
  origColumnType: string;
  portletTitleLabel: string;
  previousWrapperLayoutClass: string;
  searchTypePrefix: string;
  dashboardType: string;
  dashboardIdentity: {
    dashboardId: number,
  };
  actions: Record<NSPortletAction, string | { name: string, args: string[] }>;
  
  callClassMethod(a?: unknown, b?: unknown): void;
  
  close(): void;
  
  columnChanged(a?: unknown): void;
  
  finalize(): void;
  
  getBackend(): { [p: string]: unknown };
  
  getCurrentWrapperLayoutClass(a?: unknown): unknown;
  
  getId(): string;
  
  getInstanceInfo(): {
    label: string,
    tooltipText: string,
  };
  
  getSettings(): unknown;
  
  getTitle(): string;
  
  highlight(toggle?: boolean): void;
  
  indicateSetupUpdate(a?: unknown): void;
  
  initialize(): void;
  
  isDeferred(): boolean;
  
  isLoading(): boolean;
  
  isMaximized(): boolean;
  
  isMinimized(): boolean;
  
  load(): void;
  
  maximize(): void;
  
  maximizeResizeHandler(): void;
  
  minimize(): void;
  
  openPopup(a?: unknown, b?: unknown, c?: unknown, d?: unknown, e?: unknown, f?: unknown, h?: unknown): void;
  
  openWindow(a?: unknown, b?: unknown, c?: unknown, d?: unknown): void;
  
  reload(a?: unknown, c?: unknown): void;
  
  renderContent(): void;
  
  renderLoadedContent(): void;
  
  replacePortlet(a?: unknown): void;
  
  requestContent(a?: unknown, b?: unknown): void;
  
  setContent(a?: unknown): void;
  
  setSetting(a?: unknown, b?: unknown): void;
  
  setSettings(a?: unknown): void;
  
  setTitle(title: string): void;
  
  setup(a?: unknown, b?: unknown, c?: unknown, d?: unknown, e?: unknown): void;
  
  supportsAction(action: NSPortletAction): boolean;
  
  switchContentLoaderOff(): void;
  
  switchContentLoaderOn(): void;
  
  switchWrapperLayoutClasses(a?: unknown): void;
  
  toString(): string;
  
  toggleMaximalizeBackground(): void;
  
  triggerAction(action: NSPortletAction, args?: string[]): void;
  
  triggerActionOnAllPortlets(action: NSPortletAction, args?: string[], logMessage?: string): void;
  
  triggerEvent(a?: unknown, b?: unknown): void;
  
  triggerUpdate(a?: unknown, b?: unknown): void;
  
  updateLoaderMessage(): void;
  
  updatePortlet(a?: unknown): void;
}

declare function closePopup(): void

// https://docs.sencha.com/extjs/7.3.1/classic/Ext.Component.html
declare namespace Ext {
  export class Window {
    x: number;
    y: number;
    
    close(): void
    
    setWidth(width: number): this
    
    getWidth(): number
    
    setHeight(height: number): this
    
    getHeight(): number
    
    setPosition(x: number, y: number): this
    
    /**
     * 2022+
     */
    getY(): number
    
    /**
     * 2022+
     */
    getX(): number
    
    /**
     * 2022+
     */
    getXY(): [x: number, y: number]
    
    /**
     * 2022+
     */
    setY(y: number, options?: { [p: string]: any }): void
    
    /**
     * 2022+
     */
    setX(x: number, options?: { [p: string]: any }): void
    
    /**
     * 2022+
     */
    setXY(xy: [x: number, y: number], options?: { [p: string]: any }): void
  }
  
  /**
   * Pre-2022
   */
  export namespace WindowMgr {
    function getActive(): Ext.Window
    
    function get(componentId: string): Ext.Window
  }
  
  /**
   * 2022+
   */
  export namespace WindowManager {
    function getActive(): Ext.Window
    
    function get(componentId: string): Ext.Window
  }
}

interface Window {
  Ext: typeof Ext;
  closePopup: typeof closePopup;
  dropdowns: typeof dropdowns;
  multidropdowns: typeof multidropdowns;
  shownmachine: typeof shownmachine;
  machines: typeof machines;
  refreshmachine: typeof refreshmachine;
  DROPDOWN_INPUT_MAX_SIZE_PIXELS: number;
}

declare var dropdowns: { [key: string]: NLDropdown };
declare var multidropdowns: { [key: string]: NLMultiDropdown };

declare function getDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLDropdown

declare function getDropdownFromNameC(name: string, window: Window): NLDropdown

declare function getTextWidthDiv(): HTMLDivElement

declare function getMultiDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLMultiDropdown

declare function getMultiDropdownFromNameC(name: string, window: Window): NLMultiDropdown

declare class NLDropdown {
  constructor(name: string, nameC: string, values: any[], defaultIndex: number, e: any, flags: number, h: any, minimumWidth?, k?: any);
  
  // this.setWidth(h, minimumWidth, k);
  
  renderDocument: Document;
  name: string;
  nameC: string;
  textArray: string[];
  valueArray: string[];
  valueToIndexMap: { [key: number]: number };
  defaultIndex: number;
  indexAtRenderTime: number;
  isOpen: boolean;
  divWidthHasBeenSet: boolean;
  disabled: boolean;
  div: HTMLDivElement;
  divArray: HTMLDivElement[];
  currentCell: HTMLTableCellElement;
  searchString: string;
  typeAhead: boolean;
  cancelEventOnEnterKey: boolean;
  width: number;
  minimumWidth: number;
  flags: number;
  sMandatoryBgColor: string;
  bRequired: boolean;
  inpt: HTMLInputElement;
  ddbtn: HTMLInputElement;
  hddn: HTMLInputElement;
  indx: HTMLInputElement;
  span: HTMLSpanElement;
  elementsAreInitialized: boolean;
  bInitialize: boolean;
  inptText: string;
  inptWidth: number;
  
  addOption(text: string, value: string, index: number): void;
  
  adjustDivForScrollbar(div: HTMLDivElement): void;
  
  becomeCurrent(): void;
  
  buildDiv(): void;
  
  cloneDropdownValues(dropdown: NLDropdown): void;
  
  close(): void;
  
  createDiv(): HTMLDivElement;
  
  deleteAllOptions(): void;
  
  deleteOneOption(lookupValue: string | number, setWidth?: boolean): void;
  
  getContainer(): HTMLSpanElement;
  
  getForm(): HTMLFormElement;
  
  getHiddenInput(): HTMLInputElement;
  
  getIndex(): number;
  
  getIndexForText(lookupText: string): number;
  
  getIndexForValue(lookupValue: number | string): number;
  
  getInput(): HTMLInputElement;
  
  getRequired(): boolean;
  
  getText(index: number): string;
  
  getTextAtIndex(index: number): string;
  
  getTextForValue(lookupValue: string | number): string;
  
  getTexts(): string[];
  
  getValue(): string;
  
  getValueAtIndex(index: number): string;
  
  getValues(): string[];
  
  gotoDefault(): void;
  
  gotoNext(a: boolean): void;
  
  handleKeydown(event: Event): void;
  
  handleKeypress(event: Event): void;
  
  handleMouseDown(event: Event): void;
  
  handleMouseMove(event: Event): void;
  
  handleOnBlur(event: Event): void;
  
  handleOnFocus(event: Event): void;
  
  hasAttribute(attribute: string): boolean;
  
  initializeElements(extWindow: Ext.Window): void;
  
  isSelectable(): boolean;
  
  open(): void;
  
  overrideArrowImage(image: string): void;
  
  positionDiv(a: Element, b: any): void;
  
  positionRelativeDiv(): void;
  
  resetDropDown(): void;
  
  respondToArrow(scrollAmount: number): void;
  
  restoreToOriginalValue(): void;
  
  scheduleSetWidth(): void;
  
  setAndClose(index: number): void;
  
  setArrowImage(image: string): void;
  
  setBackgroundColor(color: string): void;
  
  setCurrentCellInMenu(cell: HTMLTableCellElement): void;
  
  setDefaultIndex(index: number): void;
  
  setDefaultOrNotRequired(bool: boolean): void;
  
  setDisabled(disabled: boolean): void;
  
  setFocus(): void;
  
  setHidden(hidden: boolean): void;
  
  setIndex(index: number, focus: boolean): void;
  
  setMandatoryBackgroundColor(color: string): void;
  
  setOptionText(lookupValue: string | number, newText: string): void;
  
  setRequired(required: boolean): void;
  
  setText(text: string, focus?: boolean): void;
  
  setValue(value: number | string, focus?: boolean): void;
  
  setWidth(width: number, minimumWidth: number, c: any): void;
  
  setWidthDirect(width: number): void;
  
  sizeDiv(): void;
}

declare interface NLMultiDropdown {
  constructor(name: string, nameC: string, values: any[], defaultValues: any[], e: any, f: any, h: any, g: any);
  
  renderDocument: Document;
  name: string;
  nameC: string;
  textArray: string[];
  valueArray: string[];
  valueToIndexMap: { [key: number]: number };
  defaultValues: string;
  selectedVals: string[];
  sMandatoryBgColor: string;
  defaultBorderColor: string;
  bRequired: boolean;
  staticWidth: number;
  numRows: number;
  disabled: boolean;
  hiddenField: HTMLInputElement;
  span: HTMLSpanElement;
  parentSpan: HTMLSpanElement;
  table: HTMLTableElement;
  width: number;
  flags: number;
  currendIdx: number;
  previousIds: number;
  onMouseMoveIdx: number;
  
  add(a, b): void;
  
  addIndex(a): void;
  
  addOption(a, b, c, d): void;
  
  becomeCurrent(): void;
  
  buildSpan(): void;
  
  contains(a): boolean;
  
  deleteAllOptions(): void;
  
  deleteOneOption(lookupValue: string | number): void;
  
  getCell(index: number): HTMLTableCellElement;
  
  getContainer(): HTMLSpanElement;
  
  getForm(): HTMLFormElement;
  
  getIndexForValue(lookupValue: number | string): number;
  
  getParentSpan(): HTMLSpanElement;
  
  getRequired(): boolean;
  
  getSelectedText(a);
  
  getSelectedTextFromValues(a, b);
  
  getSelectedValues();
  
  getText(index: number): string;
  
  getTextForValue(lookupValue: string | number): string;
  
  getValue(a);
  
  getValues();
  
  handleKeydown(event: Event): void;
  
  handleKeypress(event: Event): void;
  
  handleMouseDown(event: Event): void;
  
  handleMouseMove(event: Event): void;
  
  handleMouseUp(event: Event): void;
  
  handleMoveSelection(a, b): void;
  
  handleScrolling(event: Event): void;
  
  handleShiftKey(a, b): void;
  
  handleTypeAhead(event: Event): void;
  
  hasAttribute(attribute: string): boolean;
  
  highLightBorder(a): void;
  
  positionHelperIconsForNonIE(): void;
  
  remove(a, b): void;
  
  removeAll(): void;
  
  resetDropDown(): void;
  
  setBackgroundColor(color: string): void;
  
  setDisabled(disabled: boolean): void;
  
  setFocus(): void;
  
  setHidden(hidden: boolean): void;
  
  setHiddenField(a): void;
  
  setIndex(index: number, focus: boolean): void;
  
  setMandatoryBackgroundColor(color: string): void;
  
  setRequired(required: boolean): void;
  
  setValue(a): void;
  
  setValues(a, b): void;
  
  setWidth(): void;
}

// @ts-ignore
declare function initializeDropdowns(parent: jQuery<HTMLElement>)

declare var shownmachine: string;

declare function ShowmainMachine(machine: string): void;

declare function refreshmachine(machine: string, params?: string): void;

declare function resetDivSizes(): void;

declare function l_sort(a: number, b: string, c: boolean, d: any, e: string, f: string, g: any, h: number): void;

declare function setWindowChanged(window: Window, changed: boolean): void;

declare function addParamToURL(url: string, param: string, value: string, replace?: boolean): string;

declare function appendFormDataToURL(url: string): string;

declare function setTarget(a: string, b: string, c: boolean): void;

declare function NLPopupSelect_close(a?: string): void;

declare function globalSearch(query: string): void;

interface Window {
  NS: NS;
  refreshmachine: typeof refreshmachine;
  resetDivSizes: typeof resetDivSizes;
  addParamToURL: typeof addParamToURL;
  appendFormDataToURL: typeof appendFormDataToURL;
}

/**
 * @description This needs to be called first, otherwise `nsRecordTypes` will be undefined
 *
 * @return {void}
 */
declare function nsapiInitRecords(): void;

interface NSRecordType {
  id: string,
  type: string,
  url: string,
  scriptable: boolean,
  initializedefaults: string[],
  transformdefaults: string[],
  urlparams?: string,
}

declare const nsRecordTypes: { [key: string]: NSRecordType };

declare function nsapiGetRecord(type: string): NSRecordType

/**
 * @description Similar to `nlapiResolveURL('RECORD', type, id)`, but the resulting URL doesn't contain the `compid` parameter
 *
 * @param {string} type
 * @param {string} id
 * @return {string}
 */
declare function nsapiGetRecordURL(type: string, id: number | string): string

/**
 * @description This needs to be called first, otherwise `nsUsageCosts` will be undefined
 *
 * @return {void}
 */
declare function nsapiCheckUsage(): void;

/**
 * @description Object containing list of NetSuite functions and their governance
 */
declare const nsUsageCosts: { [key: string]: number };

declare var machines: { [machineId: string]: Machine };

/**
 * @description A Machine is a sublist
 * @param {string} machineId - The sublist ID
 */
declare function getMachine(machineId: string): Machine

interface Machine {
  
  name: string;
  tableobj: HTMLTableElement;
  table_labels: string[];
  form_elems: string[];
  idMap?: (HTMLSpanElement | undefined)[];
  dataManager: NLRecordManager;
  
  /**
   * @description Move currently selected line to the top or bottom
   * @param {boolean} [top=true]
   * @return {boolean}
   */
  moveLineToTopOrBottom(top?: boolean): boolean;
  
  /**
   * @description Remove all lines
   * @return {void}
   */
  clearmachine(): void;
  
  getInputElements(): HTMLInputElement[];
}

interface NLRecordManager {
  
  fields: Record<string, {
    dependency_order: number;
    isCurrency: boolean;
    isNumeric: boolean;
    label: string;
    maxleng: number;
    name: string;
    readonly: boolean;
    required: boolean;
    type: string;
    validationType: string;
  }>
}