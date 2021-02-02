<template>
  <b-card-text class="tab-card">
    <h4 class="m-3">&lt; 그룹 2 &gt;</h4>
    <p>아래 항목 중에서 <u>하나</u> 또는 <u>두개</u>의 항목을 선택하세요.</p>
    
    <ul class="mt-4">
      <b-form-group
        label=""
        v-slot="{ ariaDescribedby }"
      >
        <li>
          <b-form-checkbox
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-3a"
          >
            {{ option.text }}
          </b-form-checkbox>
        </li>
      </b-form-group>
    </ul>
    
    <b-form-row class="btn-wrap">
      <b-button class="prev" size="lg" variant="primary">이전</b-button>
      <b-button class="next" size="lg" variant="primary">다음</b-button>
    </b-form-row>
    
  </b-card-text>
</template>
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        {
          text: '나는 대개 긍정적인 자세로 생활하며, 모든 일이 나에게 유리한 쪽으로 풀린다고 느낀다. 나는 나의 열정을 쏟을 수 있는 여러 가지 방법들을 찾는다. 나는 사람들과 함께 하고 사람들이 행복해지도록 돕는 것을 좋아한다. 나는 나와 마찬가지로 다른 사람들도 잘 지내기를 바란다(항상 기분이 좋은 것은 아니다. 그러나 나는 다른 사람에게 그렇게 보이기를 원한다.). 나는 다른 사람들에게 항상 긍정적으로 보이고자 노력하기 때문에 때로는 나 자신의 문제를 다루는 것을 미루기도 한다.',
          value: '1'
        },
        { 
          text: '나는 대부분의 상황에 대해 강한 감정을 갖는다. 대부분의 사람들은 내가 모든 곳에 대해 불만을 갖고 있다고 생각한다. 나는 사람들 앞에서 내 감정을 억제하지만 남들이 생각하는 것보다 더 민감하다. 나는 사람들과 함께 있을 때 그들이 어떤 사람인지, 무엇을 기대할 수 있는지를 알기 원한다. 어떤 일에 내가 화가 났을 때 나는 사람들이 그것에 대해 반응하고 나만큼 그 일을 해결하려고 노력해 주기를 원한다. 나는 규칙을 알고 있다. 하지만 사람들이 내게 무엇을 하라고 지시하는 것을 좋아하지 않는다. 나는 내 스스로 결정하기를 원한다.',
          value: '2'
        },
        {
          text: '나는 스스로를 잘 통제하고 논리적이다. 나는 느낌을 다루는 것을 편안해하지 않는다. 나는 효율적이고 완벽하게 일을 처리하며 혼자 일하는 것을 좋아한다. 문제나 개인적인 갈등이 있을 때 나는 그 상황에 감정이 끼어들지 않도록 한다. 어떤 사람들은 내가 너무 차고 초연하다고 말하지만 나는 감정 때문에 중요한 일을 그르치고 싶지 않다. 나는 사람들이 나를 화나게 할 때 대부분의 경우 반응을 보이지 않는다.',
          value: '3'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.tab-card {
  font-size: 1.2em;
  ul, li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  ul .custom-checkbox + .custom-checkbox {
    margin-top: 1em;
  }
}
</style>