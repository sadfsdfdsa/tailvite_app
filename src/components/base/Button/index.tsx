/**
 * @file src/components/base/Button/index.tsx
 * @fileoverview Base button
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent, PropType } from 'vue'
import styles from './styles.module.css'

export default defineComponent({
  name: 'BaseButton',
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    onSubmit: Function as PropType<() => void>,
  },
  emits: {
    submit: null,
  },
  setup(props, { emit }) {
    /** Methods */
    /**
     * Simple click handler
     * @emits submit
     */
    const onClickHandler = () => emit('submit')

    /** Rendering */
    return () => (
      <button
        onClick={onClickHandler}
        class="mb-5 mx-10 w-full text-white bg-yellow-500 shadow-sm py-2 rounded-lg hover:bg-yellow-600"
      >
        {props.placeholder}
      </button>
    )
  },
})
