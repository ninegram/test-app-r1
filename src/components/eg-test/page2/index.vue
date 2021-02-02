<template>
  <b-card-text class="tab-card">
    <h4 class="m-3">이 테스트에서 정확한 결과를 얻으려면 다음의 지시 사항을 따라주세요! </h4>
    <ol class="mt-5">
      <li>
        다음에 나오는 두 그룹의 진술에서 평소 당신의 태도와 행동을 가장 잘 반영한다고 여겨지는 진술을 하나씩 골라주세요.      
      </li>
      <li>
        선택한 진술 안에 있는 모든 말과 문장에 완전히 동의해야 하는 것은 아니며, 그 진술의 80퍼센트나 90퍼센트 정도를 동의하면 한 그룹에서 한 개를 골라주세요. 그러나 선택한 진술의 전반적인 경향과 ‘철학’은 동의해야 합니다. 내용 중에 일부분은 동의할 수 없는 경우도 있습니다. 한 마디의 말이나 구절 때문에 그 진술을 선택하는 것을 거부하지 마시고 그 진술의 전체적인 내용에 유의해주세요.     
      </li>
      <li>
        당신의 선택을 지나치게 많이 분석하지 마시고, 100퍼센트 동의할 수 없어도 당신의 직관이 옳다고 판단 내리는 것을 선택해주세요. 부분적인 요소보다는 그 진술의 전체적인 주제와 느낌이 더 중요합니다. 직관을 따라주세요.     
      </li>
      <li>
        한 그룹에서 당신에게 가장 잘 맞는 진술이 무엇인지 결정할 수 없다면, 두개를 선택할 수도 있습니다. 그러나 반드시 한 그룹에서만 두 개를 선택해야 합니다.<br/>
        <span class="text-muted">예) 그룹 1에서 C를 , 그룹 2에서 X,Y 를 선택하는 식</span>
      </li>
    </ol>
    <b-form-row class="btn-wrap">
      <b-button class="next" size="lg" variant="primary">다음</b-button>
    </b-form-row>
    
  </b-card-text>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
.tab-card {
  font-size: 1.2em;
  ol > li + li {
    margin-top: 1em;
  }
}
</style>