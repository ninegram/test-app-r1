<template>
  <b-card-text class="tab-card">
    <h3 class="m-5 text-muted">
      <strong>ENNEAGRAM</strong>HERA
    </h3>
    <h3 class="m-5 text-muted">
      중간결과
    </h3>
    <div class="result" style="margin-top: 1em;">
      <p>
        당신은 <strong>7유형</strong>일 가능성이 높습니다.<br/>
        정확한 유형 분석을 위해 <br/>
        다음 페이지 테스트에서<br/>
        해당되는 항목에 모두 체크해주세요.
      </p>

    </div>
    
    <b-button class="m-5" size="lg" type="submit" variant="primary">계속하기</b-button>
  </b-card-text>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  
}
</script>

<style scoped lang="scss">
.tab-card {
  text-align: center;
  .result > p {
    font-size: 1.5em;
    line-height: 2em;
  }
}
</style>