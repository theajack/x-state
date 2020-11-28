import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import vuePlugin from 'rollup-plugin-vue';
// import compiler from 'vue-template-compiler';
import child_process from 'child_process';
import replace from 'rollup-plugin-replace';
// import {server} from 'lite-server';

let isDev = process.argv.includes('dev');

let env = isDev ? 'development' : 'production';

let resolveOpts = isDev ? {extensions: ['.vue', '.js', '.json']} : {};

let config = {
    output: {
        format: 'umd',
        name: 'experience'
    },
    plugins: [
        resolve(resolveOpts),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(env),
            'process.env.VUE_ENV': JSON.stringify('browser')
        }),
        babel()
    ]
    // external: [],
};


if (isDev) {
    config.input = ['./src/dev/index.js'],
    config.output.file = './public/bundle.js';
    // config.output.sourcemap = true;
    config.plugins.push(
        vuePlugin()
    );
    child_process.exec('npm run serve');
} else {
    config.input = ['./src/x-state/index.js'];
    config.output.file = './npm/x-rate.min.js';
    config.plugins.push(
        uglify()
    );
}

export default config;