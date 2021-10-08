# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    - Prop drilling is a thing of the past with context API. Passing data to a nested component via props creates room for syntax and spelling errors. With context API we're able to wrap the values we want available to our components, and pull them directly from within. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -   What is an action? Its one of a two part recipe that can change which state our application is in. An action is an object type that we dispatch to our reducer store. Its the access code we need to unlock a case. 
    -   What are reducers? Reducers are just pure functions that take the previous state and an action, and return the next state.
    -   What is the 'store'? Its the single source of truth because our immutable innitialState is stored here. Because state is read-only, the only way to leave this store is to emit an action and take a copy. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    -   Thunk allows us to return functions and action objects. Allows action creators functions to dispatch actions themselves. Allows for dispatch to happen asynchronously. And allows several dispatches to be executed with one action. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

    - Definitely redux. I really like how the system is separate from the rest of the application. Having access to component, local state variables is great, but having a source to refer to with unchanging data we can utilize wherever is so sweet. Honestly the cleanliness that it allows for is probably my favorite part. Sure the initial setup can be a bit cumbersome but, with the knowledge we've gained about finite state machines, I can see its totally worth it to have actions/data we can utilize to change states. 