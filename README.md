# 屏東基督教醫院 AI 應用展示

## 開啟方式
1. 將 ZIP 完整解壓縮。
2. 進入 `pch_ai_showcase_fixed` 資料夾。
3. 用 Chrome、Edge 或 Safari 開啟 `index.html`。
4. 不要只把 `index.html` 單獨移出資料夾，`assets` 必須一起保留。

此版本包含完整 CSS、JavaScript、操作圖片、HIS 與 AI 整合架構圖，以及 ChatPTCH 示範影片。

## 修改 CSS 後請記得遞增版本號

所有 HTML 都是以 `assets/styles.css?v=2` 引入樣式。這是為了避開瀏覽器快取的 CSS：只要動了 `assets/styles.css`，請把所有 HTML 的版號一起往上加再 push，否則已經來過網站的使用者會繼續套用舊的 CSS，畫面會出現樣式錯亂（例如影片區塌成一小格）。

在專案根目錄執行（把 `2`／`3` 換成對應版號）：

```bash
sed -i 's|assets/styles.css?v=2|assets/styles.css?v=3|g' *.html
```
