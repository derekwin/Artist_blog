# Artist
## 介绍
demo演示站点: [seclee.com](http://www.seclee.com/)

Artist采用前后端分离构建，前端由vue搭配quasar实现,后端由flask实现api，数据库目前采用mysql。多端自适应。

本项目存放的是前端部分，包括博客后台。

本项目先构建了vue项目，通过引入插件的形式引入quasar。该方式和直接利用quasar-cli构建项目有所不同。
quasar中文网的翻译版本较老，加上quasar英文官网并没有就两种方式的差别做说明（其实也是我菜。）
```
for Quasar CLI:
 <img src="~assets/logo.png">

for Vue CLI:

<q-img :src="require('@/assets/logo.png')" />
Webpack catches "src" attribute on native "" tags only, so you need to force this on a component.
```

后台的markdown编辑器基于[mavonEditor](https://github.com/hinesboy/mavonEditor)


## 在本地运行
### 克隆项目
```
git clone https://github.com/derekwin/Artist_blog
```

### 安装npm依赖
```
npm install
```

### 运行
```
npm run serve
```

### 打包
```
npm run build
```

## 性能方面需要进一步完善
- 图片进行进一步压缩
- gallery页面的图片资源按需加载 
- 屏蔽sourceMap 
- CND加速，引入外部资源CDN

## github项目完整性进度
- 2019.9.8 上传了前端部分，包括后台的前端。由于时间安排问题，后端的更新预计2020.1.1之后才能正常进行。
