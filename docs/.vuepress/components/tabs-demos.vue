<template>
  <div>
    <h3>常见方法</h3>
    <g-tabs :selected.sync="selected" direction="horizontal">
      <g-tabs-head>
        <template slot="actions">
          <g-button>设置</g-button>
        </template>
        <g-tabs-item name="news" disabled>
          <g-icon name="setting"></g-icon>
          新闻
        </g-tabs-item>
        <g-tabs-item name="finance">
          财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">
          新闻相关内容
        </g-tabs-pane>
        <g-tabs-pane name="finance">
          财务相关内容
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          体育相关内容
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre><code>{{content.trim()}}</code></pre>
  </div>
</template>

<script>
import gTabs from "../../../src/tabs";
import gTabsHead from "../../../src/tabs-head";
import gTabsItem from "../../../src/tabs-item";
import gTabsBody from "../../../src/tabs-body";
import gTabsPane from "../../../src/tabs-pane";
import gButton from "../../../src/button";
import gIcon from "../../../src/icon";

export default {
  name: "tabs-demos",
  components: {
    gTabs, gTabsHead, gTabsItem, gTabsBody,gTabsPane, gButton, gIcon
  },
  data(){
    return{
      selected: 'sports',
      content:`
<template>
  <div>
    <g-tabs :selected.sync="selected" direction="horizontal">
      <g-tabs-head>
        <template slot="actions">
          <g-button>设置</g-button>
        </template>
        <g-tabs-item name="news" disabled>
          <g-icon name="setting"></g-icon>
          新闻
        </g-tabs-item>
        <g-tabs-item name="finance">
          财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">
          新闻相关内容
        </g-tabs-pane>
        <g-tabs-pane name="finance">
          财务相关内容
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          体育相关内容
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected: 'sports',
      }
    }
  }
<\/script>
      `,
    }
  }
}
</script>

<style scoped>

</style>
