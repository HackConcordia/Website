@echo off
echo "Installing NPM dependecies defined in package.json..."
call npm install

echo "Tidying up..."
del /S /F /Q .git
del README.md
del init.sh
del scss\mixins\README.md
del scss\modules\README.md

echo "Setting up your git..."
git init
git add . -A
git commit -m "Initial Commit"

echo "Done. Now get coding!"
echo "https://github.com/argo49/NESS-Boilerplate"
start /b "" cmd /c del "%~f0"&exit /b