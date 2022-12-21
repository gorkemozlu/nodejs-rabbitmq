var amqp = require('amqplib/callback_api')
const csb = require("./csb")

module.exports = (callback) => {
  const rmqBindings = csb.getBindingConfiguration("app-config", "rmq-claim")
  Object.entries(rmqBindings).forEach(([k, v]) => { process.env[k] = v })
  const connectionString = [`amqp`, '://', `${process.env.rmq_host}`].join('')
  amqp.connect(connectionString,
    (error, conection) => {
    if (error) {
      throw new Error(error);
    }

    callback(conection);
  })
}