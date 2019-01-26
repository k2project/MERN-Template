//loads environment variables from a .env file into process.env
require('dotenv').config()

import MetaTagsServer from 'react-meta-tags/server';
import {MetaTagsContext} from 'react-meta-tags';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//server rendering meta tags
app.use((req, res) => {
  //make sure you get a new metatags instance for each request
  const metaTagsInstance = MetaTagsServer();

  //react router match
  match({
    routes, location: req.url
  }, (error, redirectLocation, renderProps) => {
    let reactString;

    try{
      reactString = ReactDomServer.renderToString(
      {/* You have to pass extract method through MetaTagsContext so it can catch meta tags */}
        <MetaTagsContext extract = {metaTagsInstance.extract}>
          <RouterContext {...renderProps}/>
        </MetaTagsContext>
      );
    }
    catch(e){
      res.status(500).send(e.stack);
      return;
    }

    //get all title and metatags as string
    const meta = metaTagsInstance.renderToString();

    //append metatag string to your layout
    const htmlStr = (`
      <!doctype html>
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          ${meta}
        </head>
        <body>
          <div id="content">
            ${reactString}
          </div>
        </body>
      </html>
    `);

    res.status(200).send(layout);
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
