# Dev Stack

Dev Stack is web application that helps developers explore different technologies and build their own development stack. User can add technologies to their stack, remove individual technologies, or clear the entire stack.

## Live Demo

[View Live Demo](https://delicate-arithmetic-022296.netlify.app/)

## Github Repo:

[View Source Code](https://github.com/TurjoSerao/dev-stack)

# Project Overview

Dev Stack is a simple and interactive way to explore popular technologies used in modern web development.

User can select technologies such as React, Node.js, MOngoDB and many more technologies to create their own development stack.

The technology information is loaded dynamically from a JSON file, and React state is used to mange the user's selected stack.

## Technology Used

- React
- Vite
- Tailwind CSS
- JavaScript
- React Toastify
- React Icons
- JSON
- Git & GitHub

## Features

1. Explore Technologies

Users can explore different development technologies with information such as

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge
- Technology icon

2. Build Own Stack
   Users can add technologies to their personal stack by clicking the Add to Stack button. After adding a technologies:

- It appears in Your Stack.
- The button beacome disabled
- A success toast notification is shown
- Same technologies cannot be added twice.

3. Manage Your Stack
   Users can manage their selected technology easily.

- Remove a single technology
- Remove all technology at once
- See the current number of selected technologies.
- Receive toast notification when removed

## React Questions & Answers

1. What is JSX, and why is it used in React?
   JSX is a syntax that lets us write HTML code inside JavaScript. React uses JSX because it makes UI code easier to read.

2. What is the difference between props and state?
   Props are data passed from a parent component to a child component.
   State: is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?
   useState allows a React component to store and update data.
   In this project, I used it in Technologies.jsx to keep track of the technologies selected by the user.

   When a user adds or removes a technology, the state is updated and React update the UI.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   useEffect is used to perform side effects in a React component, such as fetching data, working with APIs, or interacting with external system.

   However, I did not use useEffect in this project.

   The JSON data is loaded uring fetch() inside an async function.

5. Why does every item in a .map() list need a unique key prop?
   React needs a unique key to identify items ina a list.

   It helps to understand which items were added, removed or change when the list updates.

   Here i used theology.id. It gives every technology it's unique identity.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   Conditional rendering means showing different UI depending on a condition.

   I used it in the Your Stack section.

   When there are no selected technologies, the application shows:

   Your Stack is empty

   When technologies have been selected, it displays the selected technologies instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

   A parent passes data to a child using props.
   Here technologies.jsx passes the technology data and functions to Technology.jsx.

   A child doesn't directly change the parent's state.

   Instead, the parent passes a function to the child through props. The child calls that function when something happens.
