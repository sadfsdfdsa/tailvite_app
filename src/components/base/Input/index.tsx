/**
 * @file src/components/base/Input/index.tsx
 * @fileoverview Base input
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent } from 'vue'
import styles from './styles.module.css'

export default defineComponent({
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    /** Rendering */
    return () => (
      <input
        class="border shadow-sm focus:border-yellow-600 hover:border-yellow-600 rounded-lg p-2 hover:bg-yellow-50"
        type="text"
        placeholder={props.placeholder}
      />
    )
  },
})
