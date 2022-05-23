<h1 align="center">
  Jamstack STOCK TRACKER
</h1>

# How to run

This project uses `Fauna` as the data store. Plesae make sure to create an account with [Fauna](https://fauna.com/). Clone this project and follw these steps.

- Create a database in Fauna DB
- Create the server secret key.
- Clone the project.
- Chage directory to the project locally.
- Install `netlify-cli` globally,
 ```shell
 npm install -g netlify-cli
 ```
- Install dependencies,
 ```shell
 yarn install
 ```
- Create a file called `.env` at the root of the project and copy-paste the Fauna Server key as,
 ```shell
 FAUNA_SERVER_SECRET=YOUR_SECRET_KEY
 ```
- Run the commands
 ```shell
 netlify login
 
 netlify dev
 ```
 
You should have the application launched @ http://localhost:8888

# Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/9cdee8a1-a2de-4571-8733-760258100fae/deploy-status)](https://app.netlify.com/sites/shopnote/deploys)

# Step-by-step approach
[How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna](https://css-tricks.com/how-to-create-a-client-serverless-jamstack-app-using-netlify-gatsby-and-fauna/)

# Important Links
- [Netlify Functions](https://www.netlify.com/products/functions/)
- [Fauna GraphQL relations](https://docs.fauna.com/fauna/current/api/graphql/relations)
- [GatsbyJS](http://gatsbyjs.org/)
