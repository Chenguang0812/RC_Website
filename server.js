const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 使用 CORS 允許來自 Vue 應用的請求
app.use(cors());

// 解析 application/json 格式的請求
app.use(bodyParser.json());

// 根路徑 GET 路由
app.get('/', (req, res) => {
    res.send('伺服器已啟動並在運行');
});

// 處理表單提交的 POST 請求
app.post('/submit', (req, res) => {
    const formData = req.body;

    // 將收到的表單數據打印到控制台
    console.log('收到的表單資料:', formData);

    // 可以將表單數據保存到數據庫或處理邏輯 (這裡暫時只是打印)
    // db.save(formData) 或其他邏輯

    // 回應 Vue 應用
    res.json({ message: '表單提交成功，謝謝！' });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`伺服器正在 http://localhost:${PORT} 運行`);
});
