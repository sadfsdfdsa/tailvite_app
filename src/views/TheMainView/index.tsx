/**
 * @file /src/views/TheMainView/index.tsx
 * @fileoverview Main view of the App
 * @author Artem Shuvaev
 * @version 1.0.0
 */

import { defineComponent, defineAsyncComponent } from 'vue'

import styles from './styles.module.css'

import Logo from '@/components/base/Logo/index'

import router from '@/router'

export default defineComponent({
  name: 'TheMainView',
  setup(props, { emit }) {
    /** Components */
    const LoginForm = defineAsyncComponent(
      () => import('@/components/forms/Login/index')
    )

    /** Methods */
    /**
     * Push to route Account ('/app')
     */
    const onSubmit = () => {
      router.push({ name: 'Account' })
    }

    /** Rendering */
    return () => (
      <div class="flex flex-col flex-grow">
        {/* HEADER */}
        <div class="flex text-2xl mt-2 border-b pb-2">
          <Logo label="<Login />" anim={true} />
        </div>
        {/* /HEADER */}
        <div class="flex flex-col justify-center items-center flex-grow">
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    )
  },
})
