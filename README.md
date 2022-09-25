# Oddaj Rzeczy!

## Learning project

This is a learning project from the CodersLab bootcamp. The task was to create the frontend for a charity clothing donation website using HTML5, React and SCSS.

## Challenges

There were several interesting problems I encountered while making this project.

### React Router

I had originally found some example code with linked documentation to an older version of react-router, which used slightly different syntax. This initially caused some headaches but after a while I was able to find the version discrepancy, scrap the example code I used and make it work using the correct documentation.

In hindsight, the incorrect example code was in fact helpful in understanding the basic principles of react-router.

### Form Validaton

I had trouble getting form validation to work exactly as described in the project description. Finally, I used ternary operators to set an `errored` class on the form fields to set a red outline, set the `display` property on relevant error messages, all based on a `useState()` for each form field.

### Pagination

One section displays a list of organizations, rendered from an array of objects. The task was to implement pagination only if the list of entities was longer than 3.
While the project description did not explicitly prohibit using libraries, as a personal challenge I wanted to implement my own solution.

In retrospect, I am very happy with my solution. I had a lot of fun figuring out how to create pagination and corresponding page buttons programatically, and I feel trying to use a library would have caused more headaches when trying to make it look and function as described in the page design.

# Improvements

While overall I'm happy with how the project turned out and how much I've learned, I would be lying if I said it's all without flaws.

## RWD

While the scope of the project encompassed only the desktop version of the website, there are a few issues with smaller screen sizes I would have improved upon if I were to approach this project a second time.

At a certain screen size, the nav menu starts to disappear behind an image from the CTA section. It should be displayed on top of the image, since the white portion of the image would serve as a good background for the menu.

Buttons in the CTA section should reorder to a column with smaller screen sizes.

I would like to have added padding in all of the sections, as that would look better at smaller resolutions rather than butting all of the content right up against the edges of the viewport.

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

