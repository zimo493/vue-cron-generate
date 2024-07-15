import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  NaiveUiResolver,
  ElementPlusResolver,
} from "unplugin-vue-components/resolvers";

import UnoCSS from "@unocss/vite";

import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://github.com/antfu/unplugin-icons
import IconsResolver from "unplugin-icons/resolver";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, __dirname);
  return {
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: 3000,
      // 运行是否自动打开浏览器
      open: true,
    },

    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
        resolvers: [
          ElementPlusResolver(), // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
        dts: "src/typings/auto-imports.d.ts",
      }),
      Components({
        resolvers: [
          NaiveUiResolver(),
          ElementPlusResolver(), // 自动导入 Element Plus 组件
          IconsResolver({
            prefix: false,
            customCollections: ["svg-icons"],
          }),
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components", "src/**/components"],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: "src/typings/components.d.ts",
      }),
      Icons({
        defaultStyle: "display:inline-block",
        compiler: "vue3",
        customCollections: {
          "svg-icons": FileSystemIconLoader("src/assets/svg-icons", (svg) =>
            svg.replace(
              /^<svg /,
              '<svg fill="currentColor" width="1.2em" height="1.2em"'
            )
          ),
        },
      }),
    ],
    // 构建
    build: {
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
        format: {
          comments: false, // 删除注释
        },
      },
      rollupOptions: {
        output: {
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: "js/[name].[hash].js",
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: "js/[name].[hash].js",
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: (assetInfo: any) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            // console.log('文件信息', assetInfo.name)
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `${extType}/[name].[hash].[ext]`;
          },
        },
      },
    },
  };
});
