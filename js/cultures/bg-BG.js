(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/bg-BG', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('bg-BG', {
    //https://blazingbulgaria.wordpress.com/2012/06/15/time-in-bulgarian/
    //layout/language
    language: 'bg',
    englishName: 'Bulgarian (Bulgaria)',
    nativeName: 'български (България)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'd.MM.yyyy', //use four digit year
                   'medium': 'd.MM.y г.',
                   'long': 'd MMMM y г.',
                   'full': 'EEEEE, d MMMM y г.',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy г.',
                   'timestamp': 'h:mm:ss a',
                   'datetime': 'd.MM.yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
         abbreviated: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
         narrow: ['н', 'п', 'в', 'с', 'ч', 'п', 'с']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'],
        abbreviated: ['ян', 'февр', 'март', 'апр', 'май', 'юни', 'юли', 'авг', 'септ', 'окт', 'ноем', 'дек']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['пр.об', 'сл.об']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'лв', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: ' '
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Авторско право&copy; {0} Infor. Всички права запазени. Наименованието и дизайнът на логата, представени в настоящия документ, представляват търговски марки и/или регистрирани търговски марки на Infor и/или свързани с тях партньори и подразделения. Всички други търговски марки изброени по-долу са собственост на съответните им собственици'},
      'Actions': {id: 'Actions', value: 'ДЕЙСТВИЯ', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Добавяне', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Създаване на разширен филтър', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Известяване', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Всички резултати за', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Най-долна част на подравняване', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Центриране за хоризонтално подравняване', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Известие Amber (Амбър)', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Известие Amethyst (Аметист)', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Прилагане', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Прикачване', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Azure (Небесносиньо)', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Между', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Блокиране на оферта', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Получер', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Отметнато', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Отметнете това', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Трасиране', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Списък с водещи символи', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Календар ', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Камера', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Отмяна', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Включване на Caps Lock ', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Количка', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Центриране', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Ляво знаци ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Максимално брой знаци ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. За да промените селекцията, използвайте стрелките за придвижване нагоре и надолу.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Квадратче отметка', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Проверено', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Изчистване', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Часовник', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Затваряне', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Копиране', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Свиване', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Свиване на приложението на тавата', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Колони', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Съставяне', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Изпълнено', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Потвърждение', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Съдържа', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Изрязване', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Дата', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Изтриване', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Хоризонтално разпространение', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Документ', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Детайлизиране', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Навигиране навътре', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Падащ списък', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Не съдържа', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Не се равнява на', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Надолу', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Изтегляне', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Дублиране', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Избраните или тези, които не са избрани', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Въведете коментари тук...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Грешка', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'Невалиден имейл адрес ', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Известие Emerald (Емералд)', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Разширяване', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Разширяване на приложението на тавата', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Разширяване/Свиване', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Експортиране като електронна таблица', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Редактиране', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Равнява се на', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Излизане от пълен изглед', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Експортиране', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Качване на Файл Натиснете Въвеждане за Преглед на Файл', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Филтър', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Първа страница', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Папка', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Пълен изглед', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Отидете напред', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Върнете се към предишна версия', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Отидете надолу', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Отидете нагоре', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Графит', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'По-голямо от или равно на', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'По-голямо от', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Решетка', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Часове', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Три заглавни части', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Четири заглавни части', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Най-високо ', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Начална страница', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Html изглед', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Импортиране', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Информация', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Вмъкване на котва', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Вмъкване на изображение', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Курсив', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Невалидна дата', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Материални запаси', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Е празно', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Не е празно', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Центрирано подравняване', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Ляво подравняване ', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Дясно подравняване ', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Ключова дума', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Стартиране', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Последна страница', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Ляво', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'Ляво подравняване', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'Ляво подравняване на текст', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'По-малко или равно на', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'По-малко от', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Връзка', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Зареди', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Зареждане', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Заключено', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Справка', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Най-ниско', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Имейл', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Закачване на карта', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Увеличаване', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Медиана', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Средно', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Меню', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Споделяне с Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Минути', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Намаляване', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Минус', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Още...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Още действия', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Променен ', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Множествен избор с ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Нов Документ', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Следващ', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Следваща страница', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Следващия месец', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Няма резултати', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Забележки', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Не е избран', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Списък числа', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Отваряне / Назад / Затваряне', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Отваряне / Затваряне', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Подреден списък', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'страница ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Страница {0} от {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'В момента сте на страница ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Поставяне', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Паролата трябва:</strong><br>Да бъде най-малко дълга 10 символа<br>Да има най-малко една главна буква<br>Да има най-малко една малка буква<br><strong>Да съдържа един специален символ</strong><br>Да не съдържа потребителското Ви име<br>Не може да бъде предишно използвана парола<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Паролата трябва да съвпада', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Пик', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Персонализиране на колони', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Период', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Натиснете Надолу, за да изберете дата', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Натиснете Shift+F10, за да отворите контекстуалното меню.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Предишен', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Предишният месец', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Предишна страница', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Печат', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Обхват', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} Записа на страница', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Връщане', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Опресняване', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Необходимо', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Възстановяване', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Резултати', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Дясно', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Дясно подравняване', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Дясно подравняване на текст', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Роли', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Височина на ред', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Транскрипция', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Запис', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Запис на настоящия изглед', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Записани изгледи', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Търсене', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Папка за търсене', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Списък за търсене', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Избрани', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Изпращане', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Настройване на Час', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Настройки', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Кратко', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Плоча', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Манипулатор за', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Максимален обхват на Манипулатор за', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Минимален обхват на Манипулатор за', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Пропусни към Основното съдържание', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Зачеркнато', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Сортиране A до Z', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Сортиране Z до A', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Сортиране Надолу', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Сортиране Нагоре', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'Star Filled', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'Star Half', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'Star Outlined', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'Долен индекс', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Горен индекс', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Так', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Височина', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Таймер', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Днес', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Превключване на Получер текст', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Превключване на Заглавна част 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Превключване на Заглавна част 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Превключване на Курсив текст', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Превключване на Подчертан текст', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Лента с инструменти', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Горно подравняване', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Общо', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Дърво на Свиване', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Дърво на Разширяване', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Тюркоазен', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Нагоре', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Качване', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Неналична дата', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Подчертаване', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Отмяна', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Отключено', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Неподреден списък', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Съдържанието не е налично, защото използва функции, които не са поддържани от настоящата версия на браузъра.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Използване на клавиши със стрелка за избор.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Използване на въвеждане или стрелка надолу за справка.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Потребител', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Профил на Потребител', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Вертикално подравняване в средата', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Преглед на източник', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Преглед Визуално', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
