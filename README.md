## useImperativeHandle

https://docureacten.github.io/Hook/7-8-useImperativeHandle


The useImperativeHandle hook is one of the more advanced hooks in React. It allows you to customize the instance value that is exposed to parent components when using ref. This hook is particularly useful when you want to control the behavior or interface of a component in a way that isn't possible through normal props and state management.


Usually when you use useRef you are given the instance value of the component the ref is attached to. This allows you to interact with the DOM element directly.

useImperativeHandle is very similar, but it lets you do two things:

It gives you control over the value that is returned. Instead of returning the instance element, you explicitly state what the return value will be (see snippet below).
It allows you to replace native functions (such as blur, focus, etc) with functions of your own, thus allowing side-effects to the normal behavior, or a different behavior altogether. Though, you can call the function whatever you like.
There could be many reasons you want might to do either of the above; you might not want to expose native properties to the parent or maybe you want to change the behavior of a native function. There could be many reasons. However, useImperativeHandle is rarely used.

