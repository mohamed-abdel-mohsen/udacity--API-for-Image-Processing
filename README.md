# Image Processing API

The project aims to give a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database.

## Getting Started

before writing any single code i started to build strategy for the project and how the file structure will be. This step is very helpful when working on big projects

1. **Initialize the project.**

first of all i started to install all the (dev-product) dependencies whether for testing TDD (jasmine) or for code editor (prettier,eslint) , typescript,Express,ts-nodeand its configuration

2. **Set up project structure.**
   after building my strategy and draw my file structure i start to build it in reality with taken the consider of everything like the spec files or helpers and the routes and utilities.

3. **Set up server and create an API endpoint.**

Starting build the server on port 8000 and using express and write the middleware that im going to use in my endpoint and test it i have use 3 middleware in my API endpoint.
then writing validation for height and width and filename before starting any processer.

5. **Install [Sharp] and configure endpoint.**

   After building the server and creating the endpoint i install the package to start the cycle of image processing.

6. **Write tests.**
   downloaded supertest to test the endpoint that i have created..

## Application URL():

http://localhost:8000/image/resize?filename=encenadaport.jpg&width=250&height=250
