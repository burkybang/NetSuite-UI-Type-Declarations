// Type definitions for NetSuite UI
// Project: http://www.netsuite.com
// Definitions by: Adam Smith <https://github.com/burkybang> <https://twitter.com/burkybang>
// Definitions: https://github.com/burkybang/NetSuite-UI-Types

/**
 * Create native NetSuite modal window with HTML
 * Only available in browser context
 *
 * @param windowId - Added as a class to the modal window
 * @param width - Width of the modal window
 * @param height - Height of the modal window
 * @param unknown1
 * @param unknown2
 * @param windowTitle - Displays in the top bar of the modal window
 * @param unknown3
 * @param html - HTML to display in the body of the modal window
 *
 * @example
 * nlExtOpenDivWindow('my-test-window', 500, 400, undefined, undefined, 'My Test Window', undefined, '<strong>This is a test body</strong>');
 */
declare function nlExtOpenDivWindow(
  windowId: string,
  width: number,
  height: number,
  unknown1: unknown,
  unknown2: unknown,
  windowTitle: string,
  unknown3: unknown,
  html: string,
): void;

/**
 * Create native NetSuite modal window with URL
 * Only available in browser context
 *
 * @param url - Value for src of the iframe in the body of the modal window - It's best to always add ifrmcntnr=T as a parameter if using a NetSuite URL
 * @param windowId - Added as a class to the modal window
 * @param width - Width of the modal window
 * @param height - Height of the modal window
 * @param [fld]
 * @param [scrollbars] - Auto scroll?
 * @param [windowTitle] - Displays in the top bar of the modal window
 *
 * @example
 * nlExtOpenWindow('https://netsuite.com', 'my-test-window', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function nlExtOpenWindow(
  url: string,
  windowId: string,
  width: number,
  height: number,
  fld?: unknown,
  scrollbars?: boolean,
  windowTitle?: string,
): void;

/**
 * Create native NetSuite modal window with URL
 * Only available in browser context
 *
 * @param options
 * @param options.url - Value for src of the iframe in the body of the modal window - It's best to always add ifrmcntnr=T as a parameter if using a NetSuite URL
 * @param options.winnname - Added as a class to the modal window
 * @param options.width - Width of the modal window
 * @param options.height - Height of the modal window
 * @param [options.fld]
 * @param [options.scrollbars] - Auto scroll?
 * @param [options.winTitle] - Displays in the top bar of the modal window
 * @param [options.listeners]
 * @param [options.triggerObj]
 */
declare function nlExtOpenNewUIWindow(options: {
  url: string,
  winnname: string,
  width: number,
  height: number,
  fld?: unknown,
  scrollbars?: boolean,
  winTitle?: string,
  listeners?: {},
  triggerObj?: {},
}): void;

interface AlertBox {
  
}

/**
 * Create native NetSuite alert banner
 * Only available in browser context
 *
 * @param id - Banner element id
 * @param title - Title of the banner
 * @param body - Body of the banner
 * @param type - Type of banner
 *
 * @example
 * showAlertBox('upload-status', 'Upload Complete', 500, 400, undefined, undefined, 'My Test Window');
 */
declare function showAlertBox(id: string, title: string, body: string, type: number): void;

/**
 * Only available in browser context
 *
 * @param id - Banner element id
 *
 * @example
 * getAlertBox('upload-status');
 */
declare function getAlertBox(id: string): AlertBox;

/**
 * Only available in browser context
 *
 * @param olderAlertBox
 * @param newAlertBox
 *
 * @example
 * replaceAlertBox(getAlertBox('upload-status1'), getAlertBox('upload-status1'));
 */
declare function replaceAlertBox(olderAlertBox: AlertBox, newAlertBox: AlertBox): void;

/**
 * Create native NetSuite alert banner
 * Only available in browser context
 *
 * @param id - Banner element id
 *
 * @example
 * hideAlertBox('upload-status');
 */
declare function hideAlertBox(id: string): void;

/**
 * Create native NetSuite alert message box
 * Only available in browser context
 *
 * @param body - Body of the message box
 * @param title - Title of the message box
 * @param type - Type of message box
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
  getDropdown: typeof getDropdown;
  getMultiDropdown: typeof getMultiDropdown;
}

declare class NLAlertDialog {
  static CONFIRMATION: 0;
  static INFORMATION: 1;
  static WARNING: 2;
  static ERROR: 3;
  static imageNames: ['confirmation', 'info', 'warning', 'error'];
}

declare interface NS {
  // @ts-ignore
  jQuery: jQuery;
  
  UIF: typeof NS.UIF;
  
  Dashboard: typeof NS.Dashboard;
}

declare namespace NS {
  export namespace UI {
    namespace Constants {
      let GLOBALSEARCH_MAX_ITEMS: number;
      let MENU_ITEM_HEIGHT: number;
    }
    namespace Helpers {
      function preventDefault(event: MouseEvent): void;
    }
    /*namespace Menu {
      export namespace menus {
        export interface roles {
          refreshItem(item: any);
          
          rootElement: Element;
        }
      }
    }*/
    namespace Messaging {
      namespace Alert {
      }
    }
    namespace SystemSearch {
      function addPageData(): void;
      
      const service: {
        _searchTextBox: {
          _input: {
            _getInputText(): string;
            
            setText(text: string): boolean;
          }
        };
        
        // >=2024.2
        closePicker(): void;
      };
    }
  }
  
  // >=2023.2
  export namespace UIF {
    function load(): Promise<_2023_2.UIF>;
  }
  
  export namespace Dashboard {
    function getInstance(): NSDashboard;
  }
  
  export namespace Header {
    let Create: unknown;
    let Roles: unknown;
    let Main: unknown;
  }
  
  namespace form {
    function isInited(): boolean;
    
    function setInited(isInited: boolean): void;
    
    function isChanged(): boolean;
    
    function setChanged(isChanged: boolean): void;
    
    function isValid(): boolean;
    
    function setValid(isValid: boolean): void;
    
    function isEditMode(): boolean;
    
    function isViewMode(): boolean;
    
    function isNewMode(): boolean;
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
  portlets: Record<string, NSPortlet>;
  
  addPortlet(b?: unknown, c?: unknown, a?: unknown): void;
  
  addPortletLoadingPlaceholder(b?: unknown, c?: unknown, a?: unknown): void;
  
  alignColumnHeight(): void;
  
  bindActions(): void;
  
  cancelColumnHeightAlignment(): void;
  
  createPortletOriginPlaceholder(b?: unknown): void;
  
  dropPortletOnContentManager(b?: unknown): void;
  
  getBackend(): Record<string, unknown>;
  
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
  
  getBackend(): Record<string, unknown>;
  
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

declare function closePopup(): void;

declare class ExtWindow {
  x: number;
  y: number;
  
  title: string;
  
  close(): void;
  
  setTitle(title: string): void;
  
  setWidth(width: number): this;
  
  getWidth(): number;
  
  setHeight(height: number): this;
  
  getHeight(): number;
  
  setPosition(x: number, y: number): this;
  
  getY(): number;
  
  getX(): number;
  
  getXY(): [x: number, y: number];
  
  setY(y: number, options?: Record<string, unknown>): void;
  
  setX(x: number, options?: Record<string, unknown>): void;
  
  setXY(xy: [x: number, y: number], options?: Record<string, unknown>): void;
}

// https://docs.sencha.com/extjs/7.3.1/classic/Ext.Component.html
declare interface Ext {
  WindowManager: {
    getActive(): Ext['WindowWrapper'];
    
    get(componentId: string): ExtWindow;
  };
  
  // >=2024.1
  WindowWrapper: {
    content: HTMLIFrameElement;
    element: HTMLDivElement;
  };
}

interface Window {
  Ext: Ext;
  closePopup: typeof closePopup;
  dropdowns: typeof dropdowns;
  multidropdowns: typeof multidropdowns;
  shownmachine: typeof shownmachine;
  machines: typeof machines;
  refreshmachine: typeof refreshmachine;
  DROPDOWN_INPUT_MAX_SIZE_PIXELS: number;
  ischanged: boolean;
}

declare const dropdowns: Record<string, NLDropdown>;
declare const multidropdowns: Record<string, NLMultiDropdown>;

declare function getDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLDropdown;

declare function getDropdownFromNameC(name: string, window: Window): NLDropdown;

declare function getMultiDropdown(inpt: HTMLSpanElement | HTMLInputElement, window?: Window): NLMultiDropdown;

declare function getMultiDropdownFromNameC(name: string, window: Window): NLMultiDropdown;

declare class NLDropdown {
  constructor(name: string, nameC: string, values: any[], defaultIndex: number, e: any, flags: number, h: any, minimumWidth?: unknown, k?: any);
  
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
  
  addOption(text: string, value: string | number, index: number): void;
  
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
  
  initializeElements(extWindow: ExtWindow): void;
  
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

declare class NLMultiDropdown {
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
  
  add(a: unknown, b: unknown): void;
  
  addIndex(a: unknown): void;
  
  addOption(text: string, value: string, unknown: unknown, index: number): void;
  
  becomeCurrent(): void;
  
  buildSpan(): void;
  
  contains(a: unknown): boolean;
  
  deleteAllOptions(): void;
  
  deleteOneOption(lookupValue: string | number): void;
  
  getCell(index: number): HTMLTableCellElement;
  
  getContainer(): HTMLSpanElement;
  
  getForm(): HTMLFormElement;
  
  getIndexForValue(lookupValue: number | string): number;
  
  getParentSpan(): HTMLSpanElement;
  
  getRequired(): boolean;
  
  getSelectedText(a: unknown): unknown;
  
  getSelectedTextFromValues(a: unknown, b: unknown): unknown;
  
  getSelectedValues(): unknown;
  
  getText(index: number): string;
  
  getTextForValue(lookupValue: string | number): string;
  
  getValue(a: unknown): unknown;
  
  getValues(): unknown;
  
  handleKeydown(event: Event): void;
  
  handleKeypress(event: Event): void;
  
  handleMouseDown(event: Event): void;
  
  handleMouseMove(event: Event): void;
  
  handleMouseUp(event: Event): void;
  
  handleMoveSelection(a: unknown, b: unknown): void;
  
  handleScrolling(event: Event): void;
  
  handleShiftKey(a: unknown, b: unknown): void;
  
  handleTypeAhead(event: Event): void;
  
  hasAttribute(attribute: string): boolean;
  
  highLightBorder(a: unknown): void;
  
  positionHelperIconsForNonIE(): void;
  
  remove(a: unknown, b: unknown): void;
  
  removeAll(): void;
  
  resetDropDown(): void;
  
  setBackgroundColor(color: string): void;
  
  setDisabled(disabled: boolean): void;
  
  setFocus(): void;
  
  setHidden(hidden: boolean): void;
  
  setHiddenField(a: unknown): void;
  
  setIndex(index: number, focus: boolean): void;
  
  setMandatoryBackgroundColor(color: string): void;
  
  setRequired(required: boolean): void;
  
  setValue(a: unknown): void;
  
  setValues(a: unknown, b: unknown): void;
  
  setWidth(): void;
}

// @ts-ignore
declare function initializeDropdowns(parent: jQuery<HTMLElement>): unknown;

declare function ShowTab(subtabId: string, ignoreInitted: boolean): void;

declare function getTextWidthDiv(): HTMLDivElement;

/**
 * @description Auto resizes the height of the table content on a list view
 */
declare function resetDivSizes(): void;

/**
 * @description Realigns the horizontal scroll of the header with the table content on a list view
 */
declare function scrollDiv(): void;

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
 */
declare function nsapiInitRecords(): void;

type NSRecordType<RecordType extends string = string> = {
  id: RecordType;
  type: string;
  url: string;
  scriptable: boolean;
  initializedefaults: string[];
  transformdefaults: string[];
  urlparams?: string;
}

declare const nsRecordTypes: Record<string, NSRecordType>;

/**
 * @param id - Record type
 */
declare function nsapiGetRecord<RecordType extends string>(type: RecordType): NSRecordType<RecordType>;

/**
 * @description Similar to `nlapiResolveURL('RECORD', type, id)`, but the resulting URL doesn't contain the `compid` parameter
 *
 * @param type
 * @param id
 */
declare function nsapiGetRecordURL(type: string, id: number | string): string;

/**
 * @description This needs to be called first, otherwise `nsUsageCosts` will be undefined
 */
declare function nsapiCheckUsage(): void;

/**
 * @description Object containing list of NetSuite functions and their governance
 */
declare const nsUsageCosts: Record<string, number>;

interface Machine<Name extends string = string> {
  name: Name;
  tableobj: HTMLTableElement;
  table_labels: string[];
  form_elems: string[];
  idMap?: (HTMLSpanElement | undefined)[];
  dataManager: NLRecordManager;
  
  /**
   * @description Remove all lines
   * @param lines - Positive or negative number of lines to move
   */
  moveline(lines: number): void;
  
  /**
   * @description Remove all lines
   * @param line - Line number 1-index
   */
  movelineto(line: number): void;
  
  /**
   * @description Move currently selected line to the top or bottom
   * @param [top = false]
   */
  moveLineToTopOrBottom(top?: boolean): boolean;
  
  /**
   * @description Delete multiple lines by a range
   * @param lineBeforeStart - Interger one minus the first 1-indexed line number of the first line to delete
   * @param lastLine - Integer 1-indexed line number of the last line to delete
   */
  deletelines(lineBeforeStart: number, lastLine: number): boolean;
  
  /**
   * @description Remove all lines
   */
  clearmachine(): void;
  
  getInputElements(): HTMLInputElement[];
}

declare var machines: Record<string, Machine>;

/**
 * @description A Machine is a sublist
 * @param sublistId
 */
declare function getMachine<SublistId extends string>(sublistId: SublistId): Machine<SublistId>;

declare var shownmachine: string;

declare function refreshmachine(sublistId: string, params?: string): void;

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
  }>;
}

// >=2023.2
declare namespace _2023_2 {
  export interface UIF {
    host: Host;
  }
  
  export interface SystemHeader {
    renderNetsuiteHeader(host: Host, options: unknown, isLecacy: boolean): RenderedHeader;
  }
  
  export interface RenderedHeader {
  
  }
  
  export interface Host {
    context: {
      systemSearch: {
        _systemSearchService: typeof NS.UI.SystemSearch.service;
      };
    };
    
    render(renderedHeader: RenderedHeader, divHeaderEl: HTMLDivElement): void;
  }
}