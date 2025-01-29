### Настройка Git перед созданием коммитов

#### Инициализация репозитория
git init - добавляет папку .git в текущую директорию, делая её репозиторием.

#### Настройка пользователя
git config --global user.email "someEmail" - задать email пользователя.  
git config --global user.name "someName" - задать имя пользователя.  
(--global не обязателен, без него настройки будут действовать только в текущем репозитории.)

#### Другие настройки
git config --list - показывает список заданных настроек.  
git config --unset parameterName - убрать настройку параметра parameterName.  
git config --remove-section parameterName - убрать настройку параметров parameterName.  
git config core.editor path - задать текстовый редактор.  
git config alias.aliasName commandName - создать алиас для команды.  
git config alias.aliasName '!command1;command2;command3' - привязать несколько команд.  
(--global можно добавить для настройки на уровне пользователя.)

### Создание коммита (способ 1)
git add name - зафиксировать изменения (name — имя файла, папки или `.` для всего проекта).  
Дополнительно:  
- `-p` - спрашивать о фиксации каждого изменения в файле.  
- `--force` - учесть даже файлы из `.gitignore`.  
git commit -m "message" - создать коммит с сообщением "message".

### Создание коммита (способ 2)
git commit --all -m "message" - зафиксировать изменения и сразу создать коммит (только для отслеживаемых файлов).  
git commit -m "message" fileName - сделать коммит для конкретного файла.

### Получение информации о проекте
git show - информация о текущем коммите.  
git show commitHash - информация о конкретном коммите.  
git status - показывает незафиксированные изменения.

### Изменение файлов
git rm fileName - удалить файл fileName.  
git rm -r folderName - удалить папку folderName.  
git rm --cached fileName - убрать файл из отслеживания без удаления.  
git mv oldName newName - переименовать файл и автоматически зафиксировать изменение.

