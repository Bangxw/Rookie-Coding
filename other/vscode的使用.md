# Visual Studio Code

## 快捷键/常用命令

**快捷键**:

1. `ctrl+shift+p`：打开命令
2. `ctrl+k ctrl+0`：折叠所有代码
3. `ctrl+k ctrl+j`：展开所有代码
4. `ctrl+shift+[`：折叠当前所在区域代码
5. `ctrl+shift+]`：展开当前所在区域代码

**命令**:

1. `markdown > open preview to the aisde`: Markdown预览

## 插件

- Atom One Light Theme
- markdownlint
- Numbered Bookmarks
- Vetur

## 配置&snippets

### settings.json

```json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
          "language": "html",
          "autoFix": true
      },
      {
          "language": "vue",
          "autoFix": true
      }
  ],
  "vetur.format.defaultFormatter.html": "prettier",
  "editor.tabSize": 2,
  "editor.parameterHints.enabled": true,
  "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
  },
  "explorer.confirmDragAndDrop": false,
  "html.format.wrapLineLength": 0,
  "workbench.colorTheme": "Atom One Light",
  "editor.fontFamily": "mononoki, Menlo, 'Microsoft Yahei', 'Courier New', monospace",
  "editor.fontSize": 15,
  "editor.lineHeight": 24,
  "editor.letterSpacing": 0,
  "files.trimTrailingWhitespace": true, //尾随空白
  "editor.fontWeight": "400",
  "editor.cursorWidth": 2,
  "editor.cursorBlinking": "solid",
  "editor.cursorStyle": "line",
  "editor.renderWhitespace": "none",
  "[javascript]": {
      "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
      "editor.defaultFormatter": "vscode.html-language-features"
  },
  "search.followSymlinks": false,
  "terminal.integrated.shell.windows": "C:\\windows\\System32\\cmd.exe",
  "git.autofetch": true //渲染空白
}
```

### html.json

```json
"structure for vue": {
  "prefix": "!vue",
  "body": [
    "<!DOCTYPE html>",
    "",
    "<html>",
    "",
    "<head>",
    "  <meta charset=\"utf-8\">",
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "  <meta http-equiv=\"X-UA-Compatibal\" content=\"ie=edge\">",
    "  <title>Hello World!</title>",
    "</head>",
    "",
    "<body>",
    "  <div id=\"app\">$1</div>",
    "",
    "  <script src=\"../../lib/vue.js\"></script>",
    "  <script>",
    "    new Vue({",
    "      el: '#app',",
    "      data: {},",
    "      methods: {}",
    "    })",
    "  </script>",
    "</body>",
    "",
    "</html>",
  ],
  "description": "Log output to console",
}
```

### javasciprt.json

```json
"Get dom by id": {
  "prefix": "dli",
  "body": [
    "$('#$1')$2",
  ],
  "description": "get dom by id use jquery"
},
"Get dom by class": {
  "prefix": "dlc",
  "body": [
    "$('.$1')$2",
  ],
  "description": "get dom by class use jquery"
},
"Print to console": {
  "prefix": "log",
  "body": [
    "console.log($1)"
  ],
  "description": "Log output to console"
}
```

### keybindings.json

```json
// Place your key bindings in this file to override the defaultsauto[]
[
  {
      "key": "ctrl+d",
      "command": "editor.action.deleteLines",
      "when": "editorTextFocus && !editorReadonly"
  },
  {
      "key": "ctrl+shift+k",
      "command": "-editor.action.deleteLines",
      "when": "editorTextFocus && !editorReadonly"
  },
  {
      "key": "ctrl+1",
      "command": "editor.action.insertSnippet",
      "when": "editorTextFocus",
      "args": {
          "snippet": "_#${1:${TM_SELECTED_TEXT}}#_$0"
      }
  },
  {
      "key": "ctrl+B",
      "command": "editor.action.insertSnippet",
      "when": "editorTextFocus",
      "args": {
          "snippet": "<strong>${1:${TM_SELECTED_TEXT}}</strong>$0"
      }
  },
  {
      "key": "ctrl+i",
      "command": "editor.action.insertSnippet",
      "when": "editorTextFocus",
      "args": {
          "snippet": "<i>${1:${TM_SELECTED_TEXT}}</i>$0"
      }
  }
]
```