import React from 'react'
import { setup, reactive, effect, computed, ref } from './react'
import { render } from 'react-dom'

const App = setup(() => {
  console.log('once')
  const data = reactive({ count: 0, num: 10 })
  const num = ref(10)
  const double = computed(() => data.count * 2)
  const cleanup = effect([], (count, oldCount) => {
    console.log(data.count)
  })
  console.log(cleanup)
  return () => (
    <div>
      <div>{data.count}</div>
      <div>{num.value}</div>
      <div>{double.value}</div>
      <button onClick={() => data.count++}>+</button>
      <button onClick={() => num.value--}>-</button>
    </div>
  )
})
render(<App />, document.getElementById('root'))
