// for making UI of the dev tinder, we use react+vite
// React + Vite simply means using React (a frontend library) together with Vite 
// (a build tool / bundler) to create fast, modern web applications.


// actually we need a bundler for running react app but when we create react prject using create react app 
// then it simply install a bundler named webPack but here we are using vite which is much faster and 
// trending  bundler 

// bundler in software development is a tool that takes all the pieces of your project—like JavaScript, CSS, images, fonts, and other assets—and combines (bundles) them into optimized files for the browser or runtime environment.

// Think of it as a "packaging machine" for your app.

// 🔹 Why You Need a Bundler:

// Modern web apps use many small modules, libraries, and dependencies.

// Browsers prefer fewer, optimized files for performance.

// A bundler automates combining, transforming, and optimizing these files.


// Webpack->	Most popular, highly configurable, used in React/Angular/Vue apps.(this is  by default 
// in react by installing using create react app)
// Vite	-> Next-gen, fast bundler + dev server (uses ESBuild/Rollup).
// Rollup-> 	Focused on library bundling, tree-shaking friendly.
// Parcel->	  Zero-config bundler, beginner-friendly.
// ESBuild->  	Extremely fast bundler, written in Go.

// Here’s the breakdown:
// 🔹 React
// A JavaScript library for building UI components.
// Lets you create single-page applications (SPAs).
// Uses concepts like components, props, state, hooks, and virtual DOM.

// 🔹 Vite
// A next-generation frontend build tool made by the creator of Vue.js.
// Works as a faster alternative to Webpack, CRA (Create React App), and Parcel.
// Provides:
// ⚡ Super fast development server (starts instantly, no long waits).
// 📦 Optimized production build (uses Rollup under the hood).
// 🛠️ Hot Module Replacement (HMR) (changes show instantly in the browser without reloading).
// 🚀 Lightweight and easy configuration.
// 🔹 React + Vite Together
// When you combine them:
// React provides the UI framework.
// Vite provides the development and build tooling.
// 👉 Developers often use Vite instead of Create React App (CRA) because it’s much faster and more modern.
// A bundler is a tool that takes all the different files in your project (JavaScript, CSS, images, etc.)
//  and combines them into optimized files that browsers can understand and load efficiently.

// and command for creating it is.......npm create vite@latest my-aap-name
// dazy UI library
// DaisyUI is a free, open-source component library built on top of Tailwind CSS.

// DaisyUI is a component library built on top of Tailwind CSS.

// It gives you pre-built, styled UI components (like buttons, modals, cards, navbars, etc.)

// You don’t write raw Tailwind classes for every component — DaisyUI provides ready-to-use class names.

// It also includes themes (light, dark, and custom themes) out of the box.

// In short:

// Tailwind = building blocks (utility classes)
// DaisyUI = pre-designed components using Tailwind


// Without DaisyUI (just Tailwind):

// <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//   Click Me
// </button>


// With DaisyUI:

// <button class="btn btn-primary">Click Me</button>

// matlb ki ham jaise bootstrap me navbar ya sidebar directly bana skgte hai same vaise hi daisyUi ki
// help se navbar ,sidebar,buttons,dropdown ya bahot sare components bana sakte hai 

// child router is the concept in which we write route of any component in another route so that parent 
// will be shown on screen allways if we enter path of child router and for that i need to write
// outlet component inside the parent compoinet page 
// malab simple ye hai ki ham ek body component banayenge aur usme us componet ko import kr denege jisko hame
// hamesha page pe dikhana hai ,like navbar and phir usme react router dom ka outlet component inport krke 
// usko navbar call  ke just neeche  call kr denge phir ham aynege router wale page pe to usme ham parent 
// router ke jagah pe us body componet ko dalnege aur phir child router ke jagah pe baki sare componet dal
//  denge like aboout page,login page
// jab ham child router ka poath denge to uske sath uska parent route bhi ayega leking agr hamne parent ka router path diya hai to keval parent router component hi ayega

// aur agr hamne fooltet componet dal diya hai body me to phir vo bhi navbar ki tarah stick rahega if child componet ka router path dal rhe h to 