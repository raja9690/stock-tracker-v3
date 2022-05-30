/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query;
require('dotenv').config();


exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_SECRET,
  })
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/apiconfigs'))))
    .then((response) => {
      const dataRefs = response.data
      console.log(`${dataRefs.length} found`)
      const getAllDataQuery = dataRefs.map((ref) => {
          return q.Get(ref)
      })
      return client.query(getAllDataQuery).then((ret) => {
          const filterData = [];
          ret.map((resData) => {
              const allData = resData.data.body;
              if (allData !== '') {
                  filterData.push(allData);
              }
          });
          return {
              statusCode: 200,
              body: JSON.stringify(filterData)
          }
      })
  }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}