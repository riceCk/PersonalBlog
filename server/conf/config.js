let globalConfig = {
  port: 3000,
  page_path: '/page/',
  static_file_type: '.html|.js|.css|.jpg|.png|.gif|.ico',
  web_path: 'web/',
  filter_path: 'filter',
  log_path: 'log/',
  log_name: 'server.log',
  href: '*',
  dist: '/client/dist',
  database: {
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '123456',
	database: 'my_blog'
  },
}

module.exports = globalConfig;
