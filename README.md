# Attendance Management System

使用Node.js+Express建構考勤管理系統，並運用Vue框架來完成畫面渲染，同時運用MYSQL與Sequelize來完成資料庫控管。
使用者透過註冊帳號密碼來登入系統平台，同時可藉由按鈕、QR-Code掃描、GPS驗證來進行上下班打卡功能，以及瀏覽打卡記錄。
管理者經由後台提供的QR-Code顯示介面，來提供員工打卡，亦可查看員工出缺勤的狀況。

# 功能介紹
**註冊功能**
- 系統提供註冊登入功能
- 使用者可以設定account、name、email、password
- 登入密碼錯誤 5 次上鎖
- 註冊時，account、email不能與其他人重複，若有重複會跳錯誤提示
- 錯誤提示文案：帳號不存在

**種子資料**
- 使用者直接從資料庫初始化
- 至少提供 1 個管理者與 5 個一般使用者

| Name   | Email             | password  |
| ------ | ----------------- | --------- |
| admin  | admin@example.com | titaner   |
| user1  | user1@example.com | 12345678  |
| user2  | user2@example.com | 12345678  |
| user3  | user3@example.com | 12345678  |
| user4  | user4@example.com | 12345678  |
| user5  | user5@example.com | 12345678  |

**互動功能**
- 使用者要有修改密碼的功能
- 使用者能編輯自己的名稱、自我介紹、個人頭像與封面

**考勤功能**
- 一般使用者有按鈕可以打卡
- 出缺勤僅計算工作日(根據台灣行事曆)
- 上下班打卡機制(考勤管理)
- 早上上班打卡一次，晚上下班打卡一次，未滿 8 小時為缺勤
- 第一次打卡是當成上班食安
- 當天第二次打卡當成下班時間，若多次打卡，最後一次打卡當成下班時間
- 當天若只打卡一次，一樣視作出勤異常
- 換日時間為上午五點 (GMT+8)
- QR code 也可以打卡 - 意思是 QR code 會隨著每個人、每天變化，可以掃碼直接打卡
- GPS 驗證打卡 (只能在公司使用) - 如果 GPS 驗證，登入跟 QR code 都必須要在指定的公司地點附近 400 公尺內

**後台功能**
- 管理者帳號不可登入前台
- 若使用管理帳號登入前台，或使用一般使用者帳號登入後台，等同於「帳號不存在」
- admin 要有後台可以看 (admin 帳號固定 admin / tiadmin)
- HR 要是 admin 有不同功能，列出缺勤使用者的帳號
- admin 可以清除缺勤狀態，改為出勤
- 有通知功能給 admin 有人帳號上鎖
- 有通知功能給 admin 今天未打卡的人有誰 (optional)

# 專案安裝
1. 下載專案
```
$ git clone https://github.com/AllenliIE/attendance-management-system.git
```

2. MySQL Workbench
```
CREATE DATABASE attendance_management_platform_workspace CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. backend file
```
$ cd backend
$ npm install
$ npm nodemon
$ npx sequelize db:migrate
$ npx sequelize db:seed:all
$ npm run dev

//Attendance Management System listening on port: 3000!
```

4. frontend file
```
$ cd frontend
$ npm install
$ npm run serve

//Starting development server...
```
