const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
// importando a config do refresh dos estados
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    //modo desenvolvendor (quando for colocar em produção, tem que tirar)
    mode: isDevelopment ? 'development' : 'production',
    //modo desenvolvedor (quando for colocar em produção, tem que trocar)
    // é usado para que o navegador não considere todas as linhas importadas pelo babel e webpack
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // => faz com que todos os arquivos js e jsx sejam reconhecidos pelo webpack e pelo babel nem precisar colocar a ext.
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    //=> faz com que a aplicação atualize sozinha, sem a necessidade de atualizar manualmente a cada alteração
    devServer: {
        static: path.resolve(__dirname, 'public'),
        //faz parte da configuração refresh dos estados
        hot: true,
    },

    // => faz com que não seja preciso importar o script diretamente no html
    plugins: [
        //=> Faz com que o estado não seja atualizado toda hora que tiver uma alteração
        //=> o && substitui a interrogação do ternário e caso seja falso, retorna um Falso, porém o falso
        //=> não é aceito pelos plugins, por isso é necessário colocar o .filter(Boolean), para que seja
        //=> desconsiderado os tipos Booleans
        isDevelopment && new ReactRefreshWebpackPlugin(),        
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        //toda vez que for encontrado um arquivo jsx, irá roda-lo pelo babel-loader
        rules: [
            {
                test: /\.(j|t)sx$/, //jsx ou tsx
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    // Faz parte da config do refresh dos estados
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
            },
        //toda vez que for encontrado um arquivo css, irá roda-lo usando o style e css loader
        // é importado também o sass, que auxilia na codificação do CSS e usa extensao .scss
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
};