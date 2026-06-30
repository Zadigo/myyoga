import 'vue-router'

type BaseRouteLabel = 'Home'
  | 'What is Yoga'
  | 'Gallery'
  | 'Booking'
  | 'Research Paper'

declare module 'vue-router' {
  interface RouteMeta {
    label?: BaseRouteLabel
  }
}

export { }
