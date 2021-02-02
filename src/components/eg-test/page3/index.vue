<template>
  <b-card-text class="tab-card">
    <h4 class="m-3">&lt; 그룹 1 &gt;</h4>
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
          text: '나는 독립적인 편이고 자기주장을 잘 한다. 나는 상황에 정면으로 맞설 때 삶이 잘 풀린다고 느낀다. 나는 목표를 설정하고 그 일을 추진해 나간다. 그리고 그것이 성취되기를 원한다. 나는 가만히 않아 있는 것을 좋아하지 않는다. 나는 큰일을 성취하고 영향력을 행사하기를 원한다. 나는 정면 대결을 원하지는 않지만 사람들이 나를 통제하는 것도 좋아하지 않는다. 대개의 경우 나는 내가 원하는 것을 잘 알고 있다. 나는 일도 노는 것도 열심히 한다.',
          value: '1' },
        { 
          text: '나는 조용하게 혼자 있는 것을 좋아한다. 나는 사회적인 활동에 주의를 쏟지 않으며 대체로 내 의견을 강하게 주장하지 않는다. 나는 앞에 나서거나 다른 사람과 경쟁하는 것을 그리 좋아하지 않는다. 사람들은 나를 몽상가라고 말한다. 내 상상의 세계 안에서는 많은 흥미로운 일들이 벌어진다. 나는 적극적이고 활동적이라기보다는 조용한 성격이다.',
          value: '2'
        },
        {
          text: '나는 아주 책임감이 강하고 헌신적이다. 나는 내 의무를 다하지 못할 때 아주 기분이 나쁘다. 나는 사람들이 필요할 때 그들을 위해 내가 그 자리에 있다는 것을 알아주었으면 좋겠다. 나는 그들을 위해 최선을 다할 것이다. 이따금씩 나는 사람들이 나를 알아주든 알아 주지 않든 그들을 위해 큰 희생을 한다. 나는 나 자신을 제대로 돌보지 않는다. 나는 해야 할 일을 한 다음에 시간이 나면 휴식을 취하거나 내가 원하는 일을 한다.',
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