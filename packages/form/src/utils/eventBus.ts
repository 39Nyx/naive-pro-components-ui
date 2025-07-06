import { ref } from 'vue'

type Callback = (data?: any) => void
type EventMap = Record<string, Callback[]>

export function createEventBus() {
  const events = ref<EventMap>({})

  const on = (event: string, callback: Callback) => {
    if (!events.value[event]) {
      events.value[event] = []
    }
    events.value[event].push(callback)
  }

  const off = (event: string, callback?: Callback) => {
    if (!events.value[event]) return

    if (callback) {
      events.value[event] = events.value[event].filter(cb => cb !== callback)
    } else {
      delete events.value[event]
    }
  }

  const emit = (event: string, data?: any) => {
    if (events.value[event]) {
      events.value[event].forEach(callback => callback(data))
    }
  }

  return { on, off, emit }
}

export function onEvent(
  events: string[] | string[][],
  callback: (value: any) => void,
  eventBus: any,
) {
  if (Array.isArray(events) && events.length > 0) {
    events.forEach(dep => {
      if (typeof dep === 'string') {
        eventBus?.on?.(dep, callback)
      } else if (Array.isArray(dep)) {
        eventBus?.on?.(dep.join('.'), callback)
      }
    })
  }
}

export function offEvent(
  events: string[] | string[][],
  callback: (value: any) => void,
  eventBus: any,
) {
  if (Array.isArray(events) && events.length > 0) {
    events.forEach(dep => {
      if (typeof dep === 'string') {
        eventBus?.off?.(dep, callback)
      } else if (Array.isArray(dep)) {
        eventBus?.off?.(dep.join('.'), callback)
      }
    })
  }
}
