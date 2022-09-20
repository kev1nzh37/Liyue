module.exports = {
  root: true,
  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': 'off', // 是否禁止使用 console.log()
    'no-debugger': 'off', // 是否禁止使用 debugger
    // 该规则强制在Vue模板的自定义组件上使用 连字符 列如：v-on  属性名称。
    'vue/attribute-hyphenation': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // 该vars选项有两个设置：
        // all检查所有变量的使用情况，包括全局范围内的变量。这是默认设置。
        // local 只检查使用本地声明的变量，但将允许全局变量未被使用。
        vars: 'local',
        varsIgnorePattern: '^_',
      },
    ],
    // 强制属性的顺序
    'vue/attributes-order': 'off',
    // 该规则禁止在块元素的lang属性中使用应用程序中可用的语言以外的其他语言。
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: ['ts', 'js'],
        },
        style: {
          lang: ['less', 'sass', 'css'],
        },
      },
    ],
    // 在打开块级标记之后和关闭块级标记之前强制换行
    'vue/block-tag-newline': [
      'error',
      {
        // 单行块的配置
        // consistent 每对标记使用一致的换行符。如果其中一个标签内部有换行符，而另一个标签没有换行符，则会报告错误。
        // always 要求在打开块标记之后和结束块标记之前有一个换行符。
        // never 禁止在开始块标记之后和结束块标记之前换行
        singleline: 'consistent',
        // 多行块的配置
        // consistent 要求对每对标记使用一致的换行符。如果其中一个标签内部有换行符，而另一个标签没有换行符，则会报告错误
        // always (默认值)要求在开始块标记之后和结束块标记之前有一个换行符。
        // never 禁止在开始块标记之后和结束块标记之前换行。
        multiline: 'consistent',
        // 指定允许的最大空行数。默认值0
        maxEmptyLines: 0,
        // 为每个块名称指定
        blocks: {
          template: {
            //  | "never" | "consistent" | "ignore",
            singleline: 'consistent',
            multiline: 'consistent',
            maxEmptyLines: 2,
          },
          script: {
            singleline: 'consistent',
            multiline: 'consistent',
            maxEmptyLines: 2,
          },
        },
      },
    ],
    // 该规则的唯一目的是在<template>和块级别提供eslint-disable功能。它支持使用以下注释:
    /// eslint-disable 禁用
    /// eslint-enable 开启 eslint-disable-line 禁用 eslint-disable-next-line 禁用
    'vue/comment-directive': [
      'error',
      {
        // eslint-disable HTML注释,没有开启该禁用的规则则报错
        reportUnusedDisableDirectives: true,
      },
    ],
    // 该规则旨在使用于定义项目中Vue组件的API样式保持一致。
    'vue/component-api-style': [
      'error',
      [
        // 允许 《script setup>
        'script-setup',
        // 允许 组合式api https://vuejs.org/api/#composition-api
        'composition',
      ], // "script-setup", "composition", "composition-vue2", or "options"
    ],
    // 为组件定义名称大小写定义样式，以保持一致性。
    'vue/component-definition-name-casing': 'error',
    'vue/component-name-in-template-casing': 'warn',
    'vue/component-options-name-casing': 'warn',
    'vue/component-tags-order': 'warn',
    'vue/custom-event-name-casing': 'warn',
    'vue/experimental-script-setup-vars': 'error',
    'vue/first-attribute-linebreak': 'warn',
    'vue/html-button-has-type': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/jsx-uses-vars': 'error',
    'vue/match-component-file-name': 'warn',
    'vue/max-attributes-per-line': 'warn',
    // 强制.vue文件中的最大行长度 默认是80
    'vue/max-len': [
      'error',
      {
        code: 85, // 强制最大行长度。默认80
        template: 100, // 强制<template>的最大行长度。默认值为code
        tabWidth: 2, // 指定制表符的字符宽度。默认值2
        comments: 100, // 强制注释的最大行长度。默认值为code
        ignorePattern: '', // 忽略匹配正则表达式的行。可以只匹配一行，需要双转义时写在YAML或JSON
        ignoreComments: false, // 如果为true，则忽略所有尾随的注释和该行上的注释。默认的false
        ignoreTrailingComments: false, //  如果为true，则只忽略后面的注释。默认的false
        ignoreUrls: false, // 如果为true，则忽略包含URL的行。默认的false
        ignoreStrings: true, // 忽略包含双引号或单引号字符串的行。默认的false
        ignoreTemplateLiterals: true, // 如果为true，则忽略包含<template>的行。默认：false
        ignoreRegExpLiterals: true, // 如果为true，则忽略包含RegExp<正则表达式>的行。默认：false
        ignoreHTMLAttributeValues: false, // 如果为true，则忽略包含HTML属性值的行。默认：false
        ignoreHTMLTextContents: true, // 如果为true，忽略包含HTML文本内容的行。默认：false
      },
    ],
    'vue/multi-word-component-names': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/name-property-casing': 'warn',
    'vue/new-line-between-multi-line-property': 'warn',
    'vue/next-tick-style': 'warn',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    // error  禁止在<template>中使用空字符串 已经关闭 对象中的配置不生效 用来参考设置为error的配置
    'vue/no-bare-strings-in-template': [
      'off',
      {
        // 允许的字符串
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '\u00b7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|',
        ],
        // 键是标记名称或模式的对象，值是用于检查标记名称的属性数组
        attributes: {
          '/.+/': [
            'title',
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext',
          ],
          input: ['placeholder'],
          img: ['alt'],
        },
        // 用于检查字面值的指令名。
        directives: ['v-text'],
      },
    ],
    'vue/no-boolean-default': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-custom-modifiers-on-v-model': 'warn',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-duplicate-attributes': 'error',
    // 禁止<template> <script> <style>块为空
    'vue/no-empty-component-block': 'off',
    // 不允许在<script setup> 导出
    'vue/no-export-in-script-setup': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-multiple-slot-args': 'error',
    // 不允许在模板中添加多个根节点
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-restricted-block': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-restricted-class': 'error',
    'vue/no-restricted-component-options': 'error',
    'vue/no-restricted-custom-event': 'error',
    'vue/no-restricted-html-elements': 'error',
    'vue/no-restricted-props': 'error',
    'vue/no-restricted-static-attribute': 'error',
    'vue/no-restricted-v-bind': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    // 不允许target=“_blank”属性不带rel=“noopener noreferrer”
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: true, // 如果为true，则不需要noreferrer。默认false
        // never | always; 如果always，如果href是一个动态链接则强制执行该规则。缺省总是
        enforceDynamicLinks: 'always',
      },
    ],
    'vue/no-textarea-mustache': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    // 组件已被使用，但尚未定义
    'vue/no-undef-components': 'off',
    'vue/no-undef-properties': 'error',
    // 禁止在模板中使用未注册的组件
    'vue/no-unregistered-components': [
      'error',
      {
        // 如果组件名称匹配一个或多个模式，则抑制所有错误。
        ignorePatterns: [],
      },
    ],
    'vue/no-unsupported-features': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    // 禁止v-for指令或作用域属性中未使用的变量定义
    // TODO 好像这个设置不生效 不行设置这个 @typescript-eslint/no-unused-vars
    'vue/no-unused-vars': [
      'error',
      {
        // 当v-for指令或范围属性的定义与你的ignorePattern正则表达式匹配时，
        // 禁用报告。默认为空，将忽略任何内容
        ignorePattern: '^_',
      },
    ],
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-template-attributes': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-for-template-key': 'error',
    'vue/no-v-html': 'error',
    'vue/no-v-model-argument': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-v-text': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/one-component-per-file': 'error',
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'error',
    // 要求直接导出组件
    'vue/require-direct-export': [
      'off',
      {
        //  如果为true，则不允许Vue 3.x中使用组合函数。默认 false
        disallowFunctionalComponentFunction: false,
      },
    ],
    'vue/require-emit-validator': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/require-expose': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/script-indent': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/sort-keys': 'off',
    'vue/static-class-names-order': 'error',
    'vue/this-in-template': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': 'warn',
    'vue/v-for-delimiter-style': 'warn',
    'vue/v-on-event-hyphenation': 'warn',
    'vue/v-on-function-call': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'warn',
    'vue/valid-v-else': 'warn',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'warn',
    'vue/valid-v-show': 'warn',
    'vue/valid-v-slot': 'warn',
    'vue/valid-v-text': 'warn',
  },
}
