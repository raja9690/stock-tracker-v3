const faunadb = require('faunadb');
const q = faunadb.query;
require('dotenv').config();

exports.handler = async (event, context) => {

  const client = new faunadb.Client({
    secret: "process.env.FAUNA_SERVER_SECRET"
  })
  console.log(event);
  const data = JSON.parse(event.body)
  data.body = JSON.parse(data.body)
  const item = { data: data }

  return client
    .query(q.Create(q.Ref('classes/apiconfigs'), item))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}