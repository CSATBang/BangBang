<template>
    <div class="first-layout">
        <div class="goto-home" @click="$router.push('/')">返回首页</div>
        <div class="word">
            <div id="resultContent"/>
            <div id="resultContent1"/>
            <div id="resultContent2"/>
        </div>
        <button class="word-export" @click="ExportWord">导出Word文档</button>
    </div>
</template>

<script>
//实验结果

export default {
    name: "Result",
    data() {
        return {
            preview: require('docx-preview'),
            template: 'document/精馏实验报告模板.docx',
            template1: [
                'document/全回流96-100分.docx',
                'document/全回流90-95分.docx',
                'document/全回流80-89分.docx',
                'document/全回流70-79分.docx',
                'document/全回流60-69分.docx',
                'document/全回流30-59分.docx',
                'document/全回流低于30分.docx',
            ],
            template2: [
                'document/部分回流96-100分.docx',
                'document/部分回流90-95分.docx',
                'document/部分回流80-89分.docx',
                'document/部分回流70-79分.docx',
                'document/部分回流60-69分.docx',
                'document/部分回流30-59分.docx',
                'document/部分回流低于30分.docx',
            ],
            FinishedNumber: 0,
        };
    },
    mounted() {
        this.FinishedNumber = 0;
        let score = this.$store.state.score;
        let options = {
            className: "docx", //默认类和文档样式类的类名/前缀
            inWrapper: true, //启用文档内容包装器的呈现
            ignoreWidth: false, //禁用页面的呈现宽度
            ignoreHeight: false, //禁用页面的呈现高度
            ignoreFonts: false, //禁用字体渲染
            renderEndnotes: true,
            renderFooters: true,
            renderFootnotes: true,
            renderHeaders: true,
            breakPages: true, //在分页符上启用分页符
            ignoreLastRenderedPageBreak: true, //在最后呈现的分页拆分元素上禁用分页拆分
            experimental: true, //启用实验功能(制表符停止计算)
            trimXmlDeclaration: true, //如果为真，XML声明将在解析之前从XML文档中删除
            useBase64URL: true, //如果为真，图像、字体等将转换为base 64 URL，否则为URL。createObjectURL使用
            useMathMLPolyfill: true, //includes MathML polyfills for chrome, edge, etc.
            debug: false, //使额外的日志
        };
        this.ShowWord(score, 'resultContent', options);
        this.ShowWord(score, 'resultContent1', options);
        this.ShowWord(score, 'resultContent2', options);
        setTimeout(this.MergeWord, 100);
    },
    methods: {
        //获取得分等级
        GetLevel(score) {
            return score >= 96 ? 0
                : score >= 90 ? 1
                    : score >= 80 ? 2
                        : score >= 70 ? 3
                            : score >= 60 ? 4
                                : score >= 30 ? 5
                                    : 6;
        },
        //新建Http请求
        NewHttpRequest(url) {
            let XML = new XMLHttpRequest();
            XML.open('get', url, true);
            XML.setRequestHeader("Content-type", 'application/json');
            XML.responseType = 'arraybuffer';
            XML.send();
            return XML;
        },
        //显示文档
        ShowWord(score, id, options) {
            let data = null;
            let template = this.template;
            if (id.includes('1')) {
                let level = this.GetLevel(score);
                template = this.template1[level];
            }
            else if (id.includes('2')) {
                let level = this.GetLevel(score);
                template = this.template2[level];
            }
            let XML = this.NewHttpRequest(`${window.baseUrl}/${template}`);
            XML.onload = result => {
                data = result.target.response;
                this.preview.renderAsync(data, document.getElementById(id), null, options)
                    .then(result => {
                        this.FinishedNumber += 1;
                        //console.log(result);
                    });
            };
        },
        //合并Word文档
        MergeWord() {
            if (this.FinishedNumber < 3) {
                setTimeout(this.MergeWord, 100);
                return;
            }
            let article = document.getElementById('resultContent').getElementsByTagName('article')[0];
            let e = document.getElementById('resultContent1');
            let children = e.getElementsByTagName('article')[0].children;
            for (let child of children) {
                article.appendChild(child);
            }
            e.remove();
            e = document.getElementById('resultContent2');
            children = e.getElementsByTagName('article')[0].children;
            for (let child of children) {
                article.appendChild(child);
            }
            e.remove();
        },
        //导出Word文档
        ExportWord() {
            let FileSaver = require('file-saver');
            let htmlDocx = require('html-docx-js/dist/html-docx');
            let html = document.getElementById('resultContent').innerHTML;
            let content = `
            <!DOCTYPE html>
    	 	<html lang="zh">
	            <body style="font-family: Times New Roman,serif; font-weight: bold; color: rgb(0, 0, 0); min-height: 12pt; font-size: 12pt;">
	                ${html}
	            </body>
            </html>`;
            let converted = htmlDocx.asBlob(content);
            FileSaver.saveAs(converted, '精馏实验报告.docx');
        }
    }
};
</script>

<style scoped>

</style>