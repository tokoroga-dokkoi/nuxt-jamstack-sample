import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    timestamp?: number
  }
  export interface AxiosResponse<T = any> {}
  export interface AxiosError<T = any> {}
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
declare module 'vuex' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}
