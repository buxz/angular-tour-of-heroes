//  Angular 核心库中导入 Component 符号
import { Component } from '@angular/core';

/*
* @Component 是个装饰器函数，用于为该组件指定Angular所需要的元数据
* selector--组件的选择器（css元素选择器）
* templateUrl-- 组件模板文件的位置
* styleUrls-- 组件私有css样式文件位置
* */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';
}
