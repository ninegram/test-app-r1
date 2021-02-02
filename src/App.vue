<template>
  <div id="app">
    <b-container>
      <h1 class="text-muted mb-4">ENNEAGRAM HERA</h1>
      <!-- <p> -->
        <!-- 네비게이션을 위해 router-link 컴포넌트를 사용합니다. -->
        <!-- 구체적인 속성은 `to` prop을 이용합니다. -->
        <!-- 기본적으로 `<router-link>`는 `<a>` 태그로 렌더링됩니다.-->
        <!-- <router-link to="/hello-vue">Hello World</router-link>
        <router-link to="/b-icon">BIcon Test Page</router-link> -->
      <!-- </p> -->
      <!-- 라우트 아울렛 -->
      <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
      <!-- <router-view></router-view> -->
      
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="시작하기" active>
              <tab-page-1></tab-page-1>
            </b-tab>
          <b-tab title="유의사항">
            <tab-page-2></tab-page-2>
          </b-tab>
          <b-tab title="그룹 1">
            <tab-page-3></tab-page-3>
          </b-tab>
          <b-tab title="그룹 2">
            <tab-page-4></tab-page-4>
          </b-tab>
          <b-tab title="중간결과">
            <tab-page-5></tab-page-5>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import TabPage1 from './components/eg-test/page1'
import TabPage2 from './components/eg-test/page2'
import TabPage3 from './components/eg-test/page3'
import TabPage4 from './components/eg-test/page4'
import TabPage5 from './components/eg-test/page5'

export default {
  name: 'App',
  components: {
    TabPage1,
    TabPage2,
    TabPage3,
    TabPage4,
    TabPage5,
  }
}
</script>

<style>
</style>
