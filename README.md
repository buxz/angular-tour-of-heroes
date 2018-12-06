# 项目初始化
  1. ng new angular-tour-heroes
  2. ctrl + c 退出依赖安装
  3. cd angular-tour-heroes 切入项目路径
  4. cnpm install 使用国内镜像安装依赖包
  5. ng serve --open 启动项目并使用默认的浏览器打开
  6. 所看到的页面 就是应用的外壳 ，该外壳被一个AppComponent的
  组件控制

  ## 项目结构

  ### 组件

    一个组件三个文件 
     app.component.ts— 组件的类代码，这是用 TypeScript 写的。
     app.component.html— 组件的模板，这是用 HTML 写的。
     app.component.css— 组件的私有 CSS 样式。
     
   #### 新建组件
   1. `ng generate component heroes` 新建一个heroes 组件
   该组件位于src/app/heroes目录下，并生成HeroesComponent 三个文件
   2. 应用中的所有组件都必须在AppModule 中声明，见app.module.ts
   3. 使用 ng 创建组件的时候，Angular CLI 会自动将声明添加至AppModule中

### 模块
1. 引入模块（以ngModel为例）
2. app.module.ts 头部 `imort { FormsModule } from '@angular/forms'`
3. 添加FormsModule 到@NgModule 元数据的imports数组中，见app.module.ts


   

