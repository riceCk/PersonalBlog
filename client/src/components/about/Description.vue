/**
* 时间：2019.2.1
* 作者：陈凯
* 描述：关于我-关于我-关于博客
*/
<template>
  <div class="description content_left">
    <h1>关于</h1>
    <div class="description-content">
      <p><img src="../../assets/image/avatar.jpg" alt=""></p>
      <h2>关于我</h2>
      <pre>
        <code class="about-code">
          {
              "nickname": "riceCK",
              "sex": "男",
              "age": "95",
              "specialty": "计算机信息管理",
              "hobby": ['动漫','健身','睡觉'],
              "address": {
                  "city": "江苏泰州",
                  "country": "中国"
              },
              "skill": {
                  "FE":["React","Node","Vue","Ctrl+CV"]
              },
              "sns": [
                  {
                      "name": "blog",
                      "content": "<a href="https://riceck.github.io/riceBlog/archives/" target="_blank"  rel="nofollow" >https://riceck.github.io/riceBlog/archives/</a>"
                  },
                  {
                      "name": "email",
                      "content": "qq876496731@gmail.com"
                  },
                  {
                      "name": "github",
                      "content": "<a href="https://github.com/riceCk" target="_blank"  rel="nofollow" >https://github.com/riceCk</a>"
                  }
                ]
          }
        </code>
      </pre>
      <h2>关于本站</h2>
      <pre>
        <code class="about-code">
         {
            "content":'记录生活、学习、摘录',
            "theme":"<a href="https://github.com/riceCk/PersonalBlog.git" target="_blank"  rel="nofollow" >https://github.com/riceCk/PersonalBlog.git</a>"
          }
        </code>
      </pre>
      <h2>关于许可</h2>
      <pre>
        <code class="about-code">
          {
             "license": "除单独说明外，文章默认采用知识共享署名-相同方式共享 4.0 国际许可协议进行许可"
          }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style >

</style>
