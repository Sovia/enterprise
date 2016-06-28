(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/en-AR', ['jquery'], factory);
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
  Locale.addCulture('es-AR', {
    //layout/language
    language: 'es',
    englishName: 'Spanish (Argentina)',
    nativeName: 'Español (Argentina)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'd/M/yyyy', //use four digit year
                   'medium': 'd/M/yyyy',
                   'long': 'd de MMMM de yyyy',
                   'full': 'EEEE, d de MMMM de y',
                   'month': 'dd MMMM',
                   'year': 'MMMM de yyyy',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'd/M/yyyy H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
        wide: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        abbreviated: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
        narrow: ['D', 'L', 'M', 'X', 'J', 'V', 'S']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        abbreviated: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago','sep', 'oct', 'nov', 'dic']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['a.m.', 'p.m.']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '$', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤#,##0.00"',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: '.'
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. Todos los derechos están reservados. Las marcas denominativas y figurativas mencionadas a continuación son marcas comerciales y marcas comerciales registradas de Infor y/o sus empresas filiales y subsidiarias'},
      'Actions': {id: 'Actions', value: 'Acciones', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Añadir', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'Añadir nueva ficha', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Crear filtro avanzado', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Alerta', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Todos los resultados para', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Alinear en la parte inferior', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Alinear horizontalmente en centro', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Ámbar', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Amatista', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Aplicar', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Adjuntar', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Celeste', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Entre', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Cita en bloque', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Negrita', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Señalado con marcador', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Señalar con marcador', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Ruta de navegación', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Lista de viñetas', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Calendario', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Cámara', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Cancelar', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Bloqueo de mayúsculas activo', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Cesta', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Centrar', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Caracteres a la izquierda ', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Número máximo de caracteres ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Para cambiar la selección utilice las teclas de dirección.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Casilla', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Activado', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Borrar', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Reloj', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Cerrar', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Copiar', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Contraer', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Contraer bandeja de aplicación', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Columnas', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'Componente', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'Redactar', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Completado', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Confirmar', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Contiene', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Cortar', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Fecha', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Eliminar', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Distribuir horizontalmente', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Documento', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'La fila ha cambiado', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'Más detalles', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Menos detalles', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Lista desplegable', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'No contiene', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'No es igual a', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Abajo', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Descargar', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Duplicar', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Tanto seleccionado como no seleccionado', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Introduzca aquí sus comentarios...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Error', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'El tipo de archivo no está permitido', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'Se ha excedido el límite de tamaño de archivo', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'Se ha excedido el máximo de archivos permitidos', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: 'Dirección de correo electrónico no válida', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Esmeralda', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Expandir', comment: 'Expand open a tree/submenu'},
      'Expand1x': {id: 'Expand1x', value: 'Expandir una vez', comment: 'Expands one time - on the app tray'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Expandir bandeja de aplicación', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Expandir/Contraer', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Exportar a hoja de cálculo', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Editar', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Es igual a', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Salir de vista completa', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Exportar', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'Exportar a Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'Favorito', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'Carga de archivo. Pulse Entrar para examinar un archivo.', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filtro', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Primera página', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Carpeta', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Vista completa', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Avanzar', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Retroceder', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Bajar', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Subir', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafito', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Mayor o igual', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Mayor que', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Cuadrícula', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Horas', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Encabezado tres', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Encabezado cuatro', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Mayor', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Inicio', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Vista HTML', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'Imagen', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'Importar', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Información', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: 'En curso', comment: 'Info tooltip that an action is in progress'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Insertar delimitador', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Insertar imagen', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Cursiva', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Fecha no válida', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'Formato de hora no válido', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'Inventario', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Esta vacío', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'No está vacío', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'Elementos seleccionados', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Centrar', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Alinear a la izquierda', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Alinear a la derecha', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Palabra clave', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Iniciar', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Última página', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Izquierda', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Menor que o igual a', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Menor que', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Vínculo', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Cargar', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Cargando', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Bloqueado', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'Cerrar sesión', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'Búsqueda', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Inferior', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Correo', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Marcar', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Maximizar', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Mediana', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Media', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menú', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Compartir con Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minutos', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Minimizar', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Menos', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'Móvil', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'Más...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Más acciones', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Modificado', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'Nuevo documento', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Siguiente', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Siguiente página', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Siguiente mes', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Ningún resultado', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'Normal', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'Notas', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Sin seleccionar', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Lista numerada', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Abrir/Atrás/Cerrar', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Abrir/Cerrar', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Insertar/Quitar lista numerada', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'página ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Página {0} de {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Se encuentra en la página ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Pegar', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>La contraseña debe:</strong><br>Tener como mínimo 10 caracteres<br>Tener al menos una mayúscula<br>Tener al menos una minúscula<br>Incluir un carácter especial<br>Evitar el nombre del usuario<br>Evitar una contraseña ya utilizada<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Las contraseñas deben coincidir', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Máximo', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Personalizar columnas', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Período', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Pulse la flecha abajo para seleccionar una fecha', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Pulse la tecla de mayúsculas + F10 para abrir el menú contextual.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Anterior', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Mes anterior', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Página anterior', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Imprimir', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Intervalo', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} registros por página', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Rehacer', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Actualizar', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Obligatorio', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Restablecer', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Resultados', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: 'Alinear a la derecha', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Alinear a la derecha', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'Derecha', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'Roles', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Altura de fila', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubí', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Guardar', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Guardar vista actual', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Vistas guardadas', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Buscar', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'Buscar nombre de columna', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'Buscar en carpeta', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Buscar en lista', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'Seleccionar', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'Seleccionado', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Enviar', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Establecer hora', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Configuración', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Baja', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowLess': {id: 'ShowLess', value: 'Mostrar menos', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'Mostrar más', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'Pizarra', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Manipulador para', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Manipulador del intervalo máximo para', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Manipulador del intervalo mínimo para', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Saltar a contenido principal', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Tachado', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Orden ascendente', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Orden descendente', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Orden descendente', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Orden ascendente', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'Subíndice', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Superíndice', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'Fichas...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'Marcar', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'Alta', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Cronómetro', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Hoy', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Alternar texto en negrita', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Alternar encabezado 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Alternar encabezado 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Alternar texto en cursiva', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Alternar texto subrayado', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Barra de herramientas', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Alinear en la parte superior', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Contraer árbol', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Expandir árbol', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Turquesa', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Arriba', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Cargar', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Fecha no disponible', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Subrayar', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Deshacer', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Desbloqueado', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Insertar/Quitar lista de viñetas', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Este contenido no está disponible porque utiliza características que no son compatibles con la versión del explorador actual.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Usar teclas de dirección para seleccionar.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Para la búsqueda utilice Entrar o Flecha abajo.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Usuario', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Perfil de usuario', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Alinear verticalmente en centro', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Ver código fuente', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Ver resultado visual', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
