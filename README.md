# 三和株式会社 企业官网

这是一个使用 React + Vite + TypeScript + Tailwind CSS 制作的单页企业官网项目。

## 安装依赖

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

该命令会先生成正式构建产物，再启动本地预览服务。运行后在浏览器打开终端显示的本地地址，通常是：

```text
http://127.0.0.1:5173/
```

## 打包检查

```bash
npm run build
```

## 后期修改内容

主要文案和公司信息都在：

```text
src/i18n/translations.ts
```

可以在这里修改：

- 公司名称
- 首页标题与按钮
- 关于我们
- 业务内容
- 公司优势
- 公司信息表格
- 邮箱、电话、地址
- 页脚文字
- 四种语言文本

页面组件位于：

```text
src/components/
```

如果只改文字，通常不需要修改组件文件。

## 支持语言

- `ja`：日本語
- `en`：English
- `zh-CN`：简体中文
- `zh-TW`：繁體中文
