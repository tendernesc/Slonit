Перед тем как создавать коммиты:
добавить .git в текущую папку: git init
установить пользователя:
почта: git config --global user.email "someEmail"
имя: git config --global user.name "someName"
указывать --global не обязательно, но тогда пользователь будет сохранён только в текущей директории
Другие настройки:
git config --list - показывает список заданных настроек
git config --unset parameterName - убрать настройку параметра parameterName
или git config --remove-section paramenterName - убрать настройку параметров parameterName.
git config core.editor path - текстовый редактор, с помощью которого git может открывать файлы
git config alias.aliasName commandName - вместо git commandName можно писать git aliasName
или git config alias.aliasName '!command1;command2;comand3' - привязать сразу несколько команд
Здесь тоже можно добавить --global чтобы взаимодействовать на уровне пользователя

Сделать коммит, способ 1:
Зафиксировать изменение: git add name, где name имя файла, папки или весь проект (.)
можно добавить -p, тогда каждое изменение в файле git будет спрашивать о фиксации отдельно
можно добавить --force, тогда даже если файл указан в .gitignore, он всё равно будет учитываться
Сделать коммит: git commit -m "message", где message - текстовое сообщение к коммиту
Сделать коммит, способ 2:
Для всего проекта изменения будут зафиксированы и сразу создастся коммит: git commit --all -m "message" (но только для файлов которые уже отслеживаются)
Для файла изменения будут зафиксированы и сразу создастся коммит: git commit -m "message" fileName
Получить информацию о проекте:
git show - показывает информацию о текущем коммите
git show commitHash - показывает информацию об указанном коммите
git status - показывает не зафиксированные изменения
Изменение файлов:
git rm fileName - удалить файл fileName
или git rm -r folderName - удалить папку folderName
если добавить --cached, то удаления не будет, но git перестанет это отслеживать
git mv oldName newName - переименовывает файл и автоматически фиксирует
