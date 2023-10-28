const  config = {
  user:  'api', // sql user
  password:  'zaq1@WSX', //sql user password
  server:  'iodbserver.database.windows.net', // if it does not work try- localhost
  database:  'Cinema',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    instancename:  'SQLEXPRESS',  // SQL Server instance name
    trustServerCertificate: true
  },
  port:  1433
}

module.exports = config;