import { LocalStorage } from 'quasar'

export const saveToLocalStorage = <T>(key: string, value: T) => {
    LocalStorage.set(key, value)
}

export const loadFromLocalSTorage = <T>(key: string): T | null => {
    return LocalStorage.getItem(key) as T | null
}
