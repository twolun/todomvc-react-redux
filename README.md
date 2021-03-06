# 很想好好的写一个非常适合新手的react与redux结合开发入门案例

## 我为什么要写这个demo，会以什么样的方式写
 * 刚刚结束一个react项目，以前从未接触过这个东西，项目完了后，感觉有好多想法需要表达出来
 * 本教程会借鉴官方todomvc案例，但会分开写这个案例，在适当的部分单独划分出一个demo，一步一步完善，我想这些许多新手想要看的东西，而不一个大而全的demo
 * 鄙人2天熟悉react并撰写demo，1天熟悉redux，第4天开始写项目，直到项目完成依然不知所以然，所以现在回头来看官方demo，把自己学习reac和redux时，想看而看不到的教程编写出来，大家互相学习
 * 本项目将以ES6规范来组织代码，用webpack打包输出，ES6及webpack请自行百度

## 项目运行
### 1、在项目根目录中运行
```  
    npm install
    npm start  
```  
### 2、在public/具体项目下运行  
```  
    webpack -w
    //进行实时打包
```

## 一、todomvc-base  
```
此demo是一个基本的react组件组成的页面，无任何交互效果及操作逻辑，这个比较简单，经些就不做更多的讲解。
我们的todo-react及todo-react-redux都会基于此demo进行开发，目的是比较两者开发的逻辑及效率等。  
```

## 二 、todomvc-react  
此demo我们会基于todomvc-rect，一步一个demo进行讲解，尤其让新手明白react中事件及数据传递的原理，下面正式开始。从demo整体观察，发现每个组件的姿态改变都可能影响到其它组件的状态，所以我们遵循react官方推荐的方式，将会互相影响的组件的条件都放在组件的上父组件上，此demo，我们尽量只设定一个组件状态，放在组件的最外层组件上，即<App />上面，子组件需要改变父组件的状态，则通过回调函数进行操作。下面根据demo中的几个动作，对整个demo进行拆分

## 三、todomvc-react-redux
此demo是利用redux开发react，也是基于todomvc-base进行开发，  

### 1、todomvc-react-redux-actions  
此demo主要是编写redux部分js逻辑，完全和react组件没有关系，这也就是说，redux的逻辑及触发测试actions完全可以独立编写，在这个demo中，我们编写一个触发addTodo动作的js逻辑，进行测试redux代码，后面的demo代码都是基于这个demo。  
  * 增加 `constants/actionsTypes.js`，此为App所有动作的集合  
  ```javascript  
	export const ADD_TODO = 'ADD_TODO';
	
  ```

  * 增加`actions/appActions.js`，此为所有动作对应的生成函数  
  ```javascript  
    import * as types from '../constants/actionTypes.js';

	export function addTodo(text) {
	  return { type: types.ADD_TODO, text }
	}
	//action，是把数据传递到store的唯一来源，
	//一般会通过store.dispatch()，将action传到store,
	//多数情况下，action内部会使用字符串类型的type来表示将要的执行的动作，
	//type通常会被定义成常量，建议单独存放action，方便管理
	//应尽量减少在action中传递数据
  ```  

  * 增加`reducers/todos.js`，具体根据业务逻辑及actions编写  
  ```javascript  
	import { ADD_TODO } from '../constants/actionTypes.js';

	const initialState = [
	  {
	    text: 'Use Redux',
	    completed: false,
	    id: 0
	  }
	]

	export default function todos(state = initialState, action) {
	  switch (action.type) {
	    case ADD_TODO:
	      return [
	        {
	          id: state.length,
	          completed: false,
	          text: action.text
	        }, 
	        ...state
	      ]

	    default:
	      return state
	  }
	}
  ```   

  * 增加`reducers/todos.js`，todos.js作为子reducer，只负责管理全局state中它负责的一部分数据，每个reducer的state参数不同，分别对应它所管理的那部分数据  
  ```javascript  
	import { ADD_TODO } from '../constants/actionTypes.js';

	const initialState = [
	  {
	    text: 'Use Redux',
	    completed: false,
	    id: 0
	  }
	]

	export default function todos(state = initialState, action) {
	  switch (action.type) {
	    case ADD_TODO:
	      return [
	        {
	          id: state.length,
	          completed: false,
	          text: action.text
	        }, 
	        ...state
	      ]

	    default:
	      return state
	  }
	}
  ```    

  * 增加`reducers/rootReducers.js`， 
  ```javascript  
	import { combineReducers } from 'redux';
	import todos from './todos.js';

	const rootReducer = combineReducers({
	  todos
	})

	//combineReducer()方法，将多个reducer合并成一个，接收一个对象作为参数，上面是ES6的对象的写法，它与combineReducers({todos:todos})一样。
	//combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
	//每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数所有 reducer 的结果合并成一个大的对象。
	//这个对象就是redux生成的state，它的结构由传入的多个reducer的key决定

	export default rootReducer
  ```  

  * 在`index.js`，中编写测试代码  
  ```javascript  
	import React from 'react';
	import { render } from 'react-dom';
	import { createStore } from 'redux';
	import { Provider } from 'react-redux';
	import App from './containers/App.js';
	import appReducers from './reducers/rootReducer.js';
	import { addTodo } from './actions/appActions.js';

	let store = createStore(appReducers);

	//createStore():创建一个Redux store，来存放应用的所有state,
	//应用中有且仅有一个store，
	//store保存了应用所有state的对象，改变state的唯一方法就是dispatch action

	//dispatch(action): 分发 action，这是触发state改变的唯一途径
	//dispatch 会使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reduce 函数。
	//返回值会被作为下一个 state。从现在开始，这就成为了 getState() 的返回值，同时变化监听器(change listener)会被触发。
	
	//subscribe(listener): 添加一个变化监听器，即一个回调函数
	//每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。

	store.subscribe(() => 
		console.log(store.getState())
	)
	console.log(store.getState());
	store.dispatch(addTodo('Learn about actions'));
	store.dispatch(addTodo('Learn about reducers'));
	store.dispatch(addTodo('Learn about store'));
	
	//从以上代码也可看到，redux的代码测试可以单独进行，


	render(
		<App />,
		document.getElementById('root')
	)
  ```  

  * 运行查看redux测试效果，主要看state的变化  
  ![redux测试效果][1]  



















  [1]:/images/m1.png

  

