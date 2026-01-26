// server.js
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// publicフォルダを静的ファイルとして配信
app.use(express.static(path.join(__dirname, 'public')));

// URL末尾にスラッシュがなくてもindex.htmlを表示させる処理（オプション）
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Company Page: http://localhost:${PORT}/company/`);
});