
const path = require('path');
const bodyParser = require('body-parser')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 7070;
const title = 'vue项目最佳实践';

module.exports = {
    publicPath: 'best-practice',
    devServer: {
        port,
        before: app => {
            app.use(bodyParser.json());
            app.use(
                bodyParser.urlencoded({
                    extended: true
                })
            )

            app.post('/dev-api/user/login', (req, res) => {
                const { username } = req.body;
                console.log(req)
                console.log('/dev-api/user/login 1 ------------------------------------------\n')
                console.log(req.body)
                console.log('/dev-api/user/login 2 ------------------------------------------\n')
                debugger
                if (username === 'admin' || username === 'jerry') {
                    res.json({
                        code: 1,
                        data: username
                    })
                } else {
                    res.json({
                        code: 10204,
                        message: '用户名或密码错误'
                    })
                }
                debugger
            })

            app.get('/dev-api/user/info', (req, res) => {
                console.log(req)
                console.log('/dev-api/user/info ------------------------------------------\n')
                const roles = req.headers['x-token'] === 'admin' ? ['admin'] : ['editor'];
                debugger
                res.json({
                    code: 1,
                    data: roles
                })
            })
        }
    },
    configureWebpack: {
        name: title
    },
    chainWebpack(config) {
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        // 新增icons规则，设置svg-sprite-loader
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })
            .end()
    }
}













