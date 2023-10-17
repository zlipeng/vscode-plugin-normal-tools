export const getWebviewContent = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>微博</title>
  </head>
  <body>
    <iframe id="wb-frame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="width: 100%; height: 100vh; border: none;" src="https://m.weibo.cn/">

    </iframe>
  </body>
  </html>`;
};

export const getWebviewContentCovid = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>新冠</title>
  </head>
  <body>
    <iframe id="covid-frame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="width: 375px; height: 100vh; border: none;" src="https://news.qq.com/zt2020/page/feiyan.htm#/">

    </iframe>
  </body>
  </html>`;
};

export const getWebviewContentJuejin = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>掘金</title>
  </head>
  <body>
    <iframe id="juejin-frame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="width: 100%; height: 100vh; border: none;" src="https://juejin.cn">

    </iframe>
  </body>
  </html>`;
};
