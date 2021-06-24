/**
 * @file /src/views/TheAccountView/index.tsx
 * @fileoverview Account view of the App
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent, defineAsyncComponent } from 'vue'
import styles from './styles.module.css'
import Logo from '@/components/base/Logo/index'
import router from '@/router'

export default defineComponent({
  name: 'TheAccountView',
  setup(props, { emit }) {
    /** Methods */
    /**
     * Push to route Main ('/')
     */
    const onExit = () => {
      router.push({ name: 'Main' })
    }

    /** Rendering */
    return () => (
      <div class="flex flex-col flex-grow">
        {/* HEADER */}
        <div class="flex flex-row justify-between text-2xl mt-2 border-b pb-2">
          <Logo label="<Application>" />
          <div class="flex cursor-pointer text-red-500" onClick={onExit}>
            {'</Exit>'}
          </div>
        </div>
        {/* /HEADER */}

        <div class="flex flex-col justify-center items-center flex-grow">
          content
        </div>
      </div>
    )
  },
})
