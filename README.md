# REACT APP

# Parcel

- DEV build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Caching (Produces Faster build)
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Differential Bundling - supporting older browsers
- Code Splitting
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking (Remove unused codes)

# JSX

- HTML like syntax it looks like xml and HTML but this is not xml or html inside JS
- Replacing React.createElement to JSX
- JSX is transpiled before it reaches JS engine done by Parcel(Manager) with the help of babel(transpiler doing the job)
- JSX -> React.createElement -> ReactElement - JS Object -> HTMLRender(Element)

# COMPONENT

- Function vs Class component
- React or React native have no official file structure based on team and developer it can be adapted

# REACT HOOKS

- Normal JS utility Functions are hooks
- useState() - 80% everyone will be working on this hook
- useEffect() - 20 % developer will be working in this hook

# RECONCILIATION ALGORITH

- This is also know as React Fibre
- DOM is like tree which has several branches
- When UI changes from filtering data's. What React does is REACT creates a virtual DOM which is not actuall DOM.

- Virtual DOM is a representation of a actuall DOM.

- Diff Algorithm finds out the difference between the OLD virtual DOM and NEW virtual DOM it will calcualte and update the UI only on render cycle.

- React is Fast because of efficient DOM manipulation

# MONOLITH ARCHITECTURE

- All service are handled in a single project even frontend , backend everything

# MICRO SERVICES

- SINGLE Responsibility services
- name itself states what that is
- React for frontend, node or java spring for backend
- Services will be running on their own port

# ROUTING

- react-router-dom

# 2 types of Routing in web apps

- client side routing
- server side routing

# Class Based Component

- Render Hierarchy
  - Constructor
  - Render
  - Child(class component again will call constructor , render and life cycle method )
  - Component did mount

eg : Below is the example of how the component renders and fires the functions and event.

- Parent Constructor
- Parent Render

  <RENDER Phase starts and batching as well>
   - First Child Constructor
   - First Child Render

   - Second Child Constructor
   - Second Child Render

<DOM MANIPULATION STARTS>
    - First Child Componentdidmount
    - Second Child Componentdidmount

- Parent Componentdidmount

- LifeCycle Methods in Class based component

  - ComponentDidMount => Used to make an API call. Once the component loads this method is being fired once.
  - component

- There are two phases render phase (constructor and render) and commit phase(update DOM and componentdidmount )

- NEVER EVER compare class lifecyle methods to functional useEffects 

# Custom Hooks

- creating own custom hooks, normal javascript functins with use has prefix.
- for fetch API , get online status can be written custom hooks

# Optimization

- Chunking, lazy loading, code splitting
- Suspense Component 

# Tailwind CSS

- Rapidly build modern website without ever leaving your HTML 
- 