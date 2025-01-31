##### What is forwardRef?

React, refs provide a way to access DOM nodes or React elements created in the render method. Normally, you use refs in class components, but with the introduction of hooks, refs can also be used in functional components. forwardRef is a utility function that enables passing a ref from a parent component to one of its children.

###### Why Use forwardRef?

[1] Ref Forwarding in HOC (Higher-Order Components)

HOCs often wrap other components and can obscure the DOM nodes of those components. Using forwardRef, you can pass refs through HOCs to access DOM nodes directly.

[2] Enhanced Component Interoperability

When building libraries or UI kits, providing ref access can be crucial for advanced usage, such as focusing an input field from outside the component.

[3] Managing Focus and Animations

Forwarding refs can be essential in scenarios where focus management and animations are critical, ensuring seamless interaction with the underlying DOM elements.


#### How Does forwardRef Work?

The forwardRef function takes a React component as its argument and returns a new component. This new component can take a ref prop, which it then forwards to the inner component.
