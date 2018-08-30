/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('nb-NO', {
  // layout/language
  language: 'nb',
  englishName: 'Norwegian, Bokmål (Norway)',
  nativeName: 'norsk, bokmål (Norge)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '.', // Infered
      timeSeparator: '.',
      short: 'dd.MM.yy', // use four digit year
      medium: 'd. MMM y',
      long: 'd. MMMM y',
      full: 'EEEE d. MMMM y',
      month: 'd. MMMM',
      year: 'MMMM yyyy',
      timestamp: 'HH.mm.ss',
      datetime: 'dd.MM.yy HH.mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated
    days: {
      wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
      abbreviated: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
      narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide and abbreviated
    months: {
      wide: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
      abbreviated: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH.mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
  currencySign: 'kr', // (Replace Sign http://www.currencysymbols.in ?)
  currencyFormat: '¤ #,##0.00',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: ',',
    group: '.'
  },
  // Resx - Approved By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Med enerett. Navne- og designmerkene som er vist her, er varemerker og/eller registrerte varemerker for Infor og/eller tilknyttede selskap og datterselskap. Med enerett. Alle andre varemerker som er oppført, tilhører sine respektive eiere.' },
    Actions: { id: 'Actions', value: 'Handlinger', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Ekstra elementer', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Legg til', comment: 'Add' },
    AddNewTab: { id: 'AddNewTab', value: 'Legg til ny kategori', comment: 'Attached to a button that adds new tabs' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Opprett avansert filter', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Varsel', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Varselmelding(er) på side', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Alle', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Alle resultater for', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Bunnjuster', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Midtstill vannrett', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Gul', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Ametyst', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Bruk', comment: 'Text in a button to apply an action' },
    Attach: { id: 'Attach', value: 'Legg ved', comment: 'Attach' },
    Available: { id: 'Available', value: 'Tilgjengelig', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Asurblå', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Bakgrunnsfarge', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Mellom', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Sitatblokk', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Fet', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Bokmerket', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Bokmerk denne', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Søkebane', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Nettleser', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Punktliste', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Kamera', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Avbryt', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Caps Lock på', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Handlekurv', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Senter', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Tegn igjen {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Maksimum antall tegn ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Bruk pilene for å endre valget.', comment: 'Audible Text for drop down list help' },
    Checkbox: { id: 'Checkbox', value: 'Avmerkingsboks', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Kontrollert', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Fjern', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Fjern filter', comment: 'Clear the current filter criteria' },
    ClearSelection: { id: 'ClearSelection', value: '(Fjern valg)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Klokke', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Lukk', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Klikkbar i redigeringsprogram', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Kopier', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Skjul', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Skjul appskuff', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Kolonner', comment: 'Columns tooltip' },
    Component: { id: 'Component', value: 'Komponent', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Skriv', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Fullført', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Bekreft', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Bekreft melding(er) på side', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Informasjonskapsler aktivert', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Inneholder', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css-klasse', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Klipp ut', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Dato', comment: 'Describes filtering by a date data type' },
    DaysOverdue: { id: 'DaysOverdue', value: 'Forfalt for {0} dager siden', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} dager gjenstår', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Slett', comment: 'Delete Toolbar Action Tooltip' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Distribuer horisontalt', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Dokument', comment: 'Document tooltip' },
    Dirty: { id: 'Dirty', value: 'Rad er endret', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Drill ned', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Drill opp', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Rullegardin', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Inneholder ikke', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Slutter ikke med', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'Er ikke lik', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Starter ikke med', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Ned', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Last ned', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Dupliser', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Enten valgte eller ikke-valgte', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Slutter med', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Angi kommentarer her ...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Feil', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Filtype er ikke tillatt', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Filstørrelsesgrense overskredet', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Maksimalt antall tillatte filer er overskredet', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Feilmelding(er) på side', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'E-postadresse ikke gyldig', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Smaragdgrønn', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Utvid', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Utvid appskuff', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Utvid/skjul', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Eksporter som regneark', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Rediger', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Er lik', comment: 'Equals in icons for filtering' },
    ExitFullView: { id: 'ExitFullView', value: 'Avslutt full visning', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Eksporter', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Eksporter til Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favoritt', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Last opp fil. Trykk Enter for å finne fil', comment: 'Screen Reader instructions' },
    Filter: { id: 'Filter', value: 'Filter', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Først side', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Mappe', comment: 'Folder tooltip' },
    FullView: { id: 'FullView', value: 'Full visning', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Gå fremover', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Gå tilbake', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Gå ned', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Gå opp', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Go', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Grafitt', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Mer enn eller lik', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Mer enn', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Rutenett', comment: 'Grid tooltip' },
    Hours: { id: 'Hours', value: 'Timer', comment: 'the hour portion of a time' },
    HeadingThree: { id: 'HeadingThree', value: 'Overskrift tre', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'Overskrift fire', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Høyest', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Start', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html-visning', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Bilde', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importer', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Informasjon', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Informasjonsmelding(er) på side', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'Pågår', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Sett inn', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Sett inn anker', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Sett inn bilde', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Sett inn kobling', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Sett inn URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Kursiv', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Ugyldig dato', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Ugyldig tid', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Lagerbeholdning', comment: 'Icon button tooltop for Inventory Action' },
    IsEmpty: { id: 'IsEmpty', value: 'Er tom', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'Er ikke tom', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Valgte elementer', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Senter', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Venstrejuster', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Høyrejuster', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Nøkkelord', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Start', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Siste side', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Venstre', comment: 'Left tooltip' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Mindre enn eller lik', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Mindre enn', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Kobling', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Last', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Laster', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Nasjonal innstilling', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Låst', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Logg ut', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Oppslag', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Laveste', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'E-post', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'Nål', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Maksimer', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Median', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Middels', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Meny', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Del med Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutter', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Minimer', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Minus', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Mobil', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Måned', comment: 'As in a date month' },
    More: { id: 'More', value: 'Mer ...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Flere handlinger', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Flytt til venstre', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Flytt til høyre', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modifisert', comment: 'for modified form fields' },
    NewDocument: { id: 'NewDocument', value: 'Nytt dokument', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nytt element', comment: 'New item in listbuilder' },
    Next: { id: 'Next', value: 'Neste', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Neste side', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Neste måned', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Nei', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Data ikke tilgjengelige', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Ingen data tilgjengelig, foreta et nytt filtervalg for å se flere resultater.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Ingen data tilgjengelig, foreta et valg i listen ovenfor for å se flere resultater.', comment: 'Shown when there is no rows shown in a list' },
    NoResults: { id: 'NoResults', value: 'Ingen resultater', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Merknader', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Ikke valgt', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Talliste', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'Ok', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Åpne/Tilbake/Lukk', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Åpne/Lukk', comment: 'Open / Close tooltip' },
    OrderedList: { id: 'OrderedList', value: 'Sett inn / fjern nummerliste', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'side ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Side {0} av {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Du er for øyeblikket på side ', comment: 'Text on the pager links' },
    Paste: { id: 'Paste', value: 'Lim inn', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>Passord må:</strong><br>bestå av minst 10 tegn<br>ha minst én stor bokstav<br>ha minst én liten bokstav<br>inneholde ett spesialtegn<br>ikke inneholde brukernavnet<br>ikke være et tidligere brukt passord<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Passord må stemme overens', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Topp', comment: 'the max or peak value in a chart' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Egendefiner kolonner', comment: 'Customize Columns in a Grid' },
    Platform: { id: 'Platform', value: 'Plattform', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Periode', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Trykk nedpilen for å velge en dato', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Trykk Shift+F10 for å åpne hurtigmenyen.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Forrige', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Forrige måned', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Forrige side', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Skriv ut', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Område', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} oppføringer per side', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Gjør om', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Omorganiser rader', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Oppdater', comment: 'Refresh tooltip' },
    Required: { id: 'Required', value: 'Obligatorisk', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Tilbakestill', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Tilbakestill til standard', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Resultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Resultater', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Høyrejuster', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Høyrejuster', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Høyre', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Roller', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Radhøyde', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubinrød', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Kjør filter', comment: 'Execute the current filter criteria' },
    Save: { id: 'Save', value: 'Lagre', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Lagre gjeldende visning', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Lagrede visninger', comment: 'Label for a list of Views' },
    Seconds: { id: 'Seconds', value: 'Sekunder', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Søk', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Søk etter et kolonnenavn', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Søk i mappe', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Søkeliste', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Velg', comment: 'text describing a select action' },
    Selected: { id: 'Selected', value: 'Valgt', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Velg alle', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Send', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Angi tid', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Innstillinger', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Kort', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Vis filterrad', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Vis mindre', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Vis mer', comment: 'Show more form content' },
    Slate: { id: 'Slate', value: 'Skifer', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Lysbilde {0} av {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Lysbilder {0} og {1} av {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Håndtak for', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Maksimum områdereferanse for', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Minimum områdereferanse for', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Gå til hovedinnhold', comment: 'Skip link in header, jumps when clicked on to main area' },
    StartsWith: { id: 'StartsWith', value: 'Starter med', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} av {1} trinn fullført', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Gjennomstreking', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Sorter stigende', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Sorter synkende', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Sorter ned', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Sorter opp', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Senket skrift', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Hevet skrift', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Kategorier ...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'Nål', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'Høy', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Mål', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Tekstfarge', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Dra og slipp filer for opplasting', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Dra og slipp, eller <span class="hyperlink">Velg filer</span> for opplasting', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Avbryt opplasting av denne filen', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Lukk denne feilen', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Lukk denne feilen', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Tidsmåler', comment: 'Timer tooltip' },
    Today: { id: 'Today', value: 'I dag', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Veksle fet tekst', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Veksle overskrift 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Veksle overskrift 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Veksle kursiv tekst', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Veksle understreket tekst', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Verktøylinje', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Toppjuster', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totaler', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Skjul tre', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Utvid tre', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turkis', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Opp', comment: 'Up tooltip' },
    Upload: { id: 'Upload', value: 'Last opp', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Utilgjengelig dato', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Understrek', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Angre', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Låst opp', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Sett inn / fjern punktliste', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Dette innholdet er ikke tilgjengelig fordi det bruker egenskaper som ikke støttes av din gjeldende nettleserversjon.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Bruk piltaster til å velge.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Bruk Enter eller nedpilen for oppslag.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Bruker', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Brukerprofil', comment: 'User Profile tooltip' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Midtstill loddrett', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Vis kilde', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Vis visuell', comment: 'Toggle the visual view in the editor' },
    Year: { id: 'Year', value: 'År', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Ja', comment: 'On a dialog button' }
  }
});
