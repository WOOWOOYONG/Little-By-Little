# Fetch API 練習 - Memes App

### 功能: 串接 API，隨機產生迷因

### 學習語法: 等圖片載入完畢才顯示迷因圖及文字

```
    const memeImg = new Image();
    memeImg.onload = () => {
     meme.src = data.url;
     title.textContent = data.title;
      };
     memeImg.src = data.url;
    }
```

[Meme API](https://github.com/D3vd/Meme_Api)

[Demo](https://get-some-memessss.surge.sh/)
