/**********************************************************************
 *
 * @模块名称: docsify-markrun.js
 *
 * @模块用途: docsify-markrun.js
 *
 * @date: 2021/11/29 14:06
 *
 * @版权所有: pgli
 *
 **********************************************************************/
(function () {
    /**
     * 动态加载远程js
     * @param callBack
     */
    var loadScript = function (callBack) {
        const script = document.createElement('script');

        script.type = 'module';

        const firstScript = document.getElementsByTagName('script')[0];

        callBack && callBack(script)

        firstScript.parentNode.insertBefore(script, firstScript);
    }

    /**
     * 跳转到Jsfiddle
     * @param props
     */
    const goJsfiddle = (props) => {
        let jsTpl = props.bootCode
        let htmlTpl = `${props.html || ''}`
        let cssTpl = `${props.cssResources || ''}`;

        if (jsTpl) {
            jsTpl = `${jsTpl}`
        }

        const data = {
            js: jsTpl,
            css: cssTpl,
            html: htmlTpl,
            panel_js: 3,
            panel_css: 1
        };
        const form = document.getElementById('fiddle-form') || document.createElement('form')
        form.innerHTML = ''
        const node = document.createElement('textarea')

        form.method = 'post'
        form.action = 'https://jsfiddle.net/api/post/library/pure/'
        form.target = '_blank'

        for (let name in data) {
            node.name = name;
            node.value = data[name].toString();
            form.appendChild(node.cloneNode());
        }
        form.setAttribute('id', 'fiddle-form')
        form.style.display = 'none'
        document.body.appendChild(form);

        form.submit()
    }

    const compileCode = function (source, data, info) {
        setTimeout(() => {
            if (source.includes(`import`)) {
                loadScript(function (scriptTag) {
                    scriptTag.append(source);
                });
            } else {
                eval(source);
            }
        });
        return {
            lang: 'js',
            code: '',
            // source not required
            source: source
        }
    }
    window.$docsify.plugins = [(hook, vm) => {
        hook.beforeEach((content) => {
            return content.includes(`\`\`\`\``) ? markrun(content, {
                compile: {
                    'js': compileCode,
                    'typescript': compileCode
                }
            }) : content;
        });

        hook.mounted(function (content) {
            // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
            document.querySelector(".content").addEventListener("click", function (e) {
                if (e.target.classList.contains("markrun-html")) {
                    const o = "DIV" === e.target.tagName ? e.target : e.target.parentNode;
                    if (e.target.classList.contains('markrun-source-expanded')) {
                        o.classList.remove('markrun-source-expanded');
                    } else {
                        o.classList.add('markrun-source-expanded');
                    }
                }
                /**
                 * goJsfiddle 去jsfiddle预览
                 */
                if (e.target.classList.contains("markrun")) {
                    /**
                     * 确认点击位置
                     */
                    if (e.target.offsetWidth < e.offsetX + 100) {
                        goJsfiddle({
                            bootCode: e.target.querySelector('.markrun-source').querySelector('.lang-js').innerText,
                            html: e.target.querySelector('.markrun-html').innerHTML,
                        })
                    }
                }
            });
        });
    }, ...window.$docsify.plugins];
}());