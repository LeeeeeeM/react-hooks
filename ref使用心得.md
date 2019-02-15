### ref callbacks的设计模式

使用HOC的时候，特殊的需求可能让你不得不使用ref。如果不使用HOC的话，可以直接用字符串形式的ref获取到当前组件。但是使用了HOC封装之后，相当于父组件外面还有一个父组件，原来的ref无法直接使用。

回想在学习JAVA的时候，经常提到控制反转和依赖注入。在使用class模式下的react组件开发当然也不例外。


首先定义一个Base组件，在Base组件里面使用refs callback获取到input的ref。
```javascript
  import React, { Component } from 'react'

  export default class Base extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    componentDidMount() {
      console.log(this.baseInputRef)
    }

    render() {
      return (<div>
        <span>this is Base Component</span>
        <input ref={ele => {
          this.baseInputRef = ele
        }} />
      </div>)
    }
  }
```

然后定义一个HOC的组件

```javascript
  import React from 'react'

  export default function HOC(WrappedComponent) {
    const EnhancedComponent = class extends WrappedComponent {

      componentDidMount() {

      }

      render() {
        return <WrappedComponent {...this.props}/>
      }
    }

    return EnhancedComponent
  }

```

使用的时候

```javascript
  import HOC from './components/HOC'
  import Base from './components/Base'

  export default HOC(Base)

  //  index.js
  import React from 'react'
  import ReactDOM from 'react-dom'
  ReactDOM.render(<HOC />, document.getElementById('app'))

```

这个例子正常运行。
现在我们要在通过HOC处理的组件实例中获取inputRef，现在需要Base组件对外暴露一个方法，对inputRef进行暴露，在Enhanced组件使用这个暴露的方法获取到inputRef即可。

```javascript
  import React, { Component } from 'react'

  export default class Base extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    componentDidMount() {
      console.log(this.baseInputRef)
    }

    // 新增方法，暴露inputRef
    getRef() {
      return this.baseInputRef
    }

    render() {
      return (<div>
        <span>this is Base Component</span>
        <input ref={ele => {
          this.baseInputRef = ele
        }} />
      </div>)
    }
  }

```
EnhancedComponent使用baseInputRef

```javascript
  import React from 'react'

  export default function HOC(WrappedComponent) {
    const EnhancedComponent = class extends WrappedComponent {

      getWrappedInstance(wrappedComponentInstance) {
        this.enhancedInputRef = wrappedComponentInstance.getRef()
      }

      componentDidMount() {
        console.log(this.enhancedInputRef)
      }

      render() {
        return <WrappedComponent {...this.props} ref={this.getWrappedInstance.bind(this)}/>
      }
    }

    return EnhancedComponent
  }

```

完美获取到inputRef