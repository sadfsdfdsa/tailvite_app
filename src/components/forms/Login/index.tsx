/**
 * @file src/components/forms/Login/index.tsx
 * @fileoverview Login form for MainView
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent, defineAsyncComponent, ref, PropType } from 'vue'
import styles from './styles.module.css'

export default defineComponent({
  name: 'LoginForm',
  emits: {
    submit: null,
  },
  props: {
    onSubmit: Function as PropType<() => void>,
  },
  setup(props, { emit }) {
    /** Components */

    const BaseInput = defineAsyncComponent(
      () => import('@/components/base/Input/index')
    )

    const BaseButton = defineAsyncComponent(
      () => import('@/components/base/Button/index')
    )

    /** Data */

    const btnPlaceholder = ref('Submit')

    /** Methods */
    /**
     * Change placeholger and submit the event
     * @emits submit
     */
    const onSubmit = () => {
      btnPlaceholder.value =
        btnPlaceholder.value === 'Submit' ? 'Loading...' : 'Submit'
      emit('submit')
    }

    /** Rendering */
    return () => (
      <div class="flex flex-col bg-white justify-between w-96 h-72 rounded-lg flex-col items-center justify-center">
        <div class="flex mt-5 text-xl border-b pb-2 w-72 justify-center">
          W e l c o m e !
        </div>
        <div class="flex flex-col mt-2 w-full px-10">
          <BaseInput placeholder="Adminadmin" />
          <BaseInput placeholder="123qwe" class="mt-2" />
        </div>
        <div class="flex w-full mx-10">
          <BaseButton onSubmit={onSubmit} placeholder={btnPlaceholder.value} />
        </div>
      </div>
    )
  },
})
