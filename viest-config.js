import {defineConfig} from 'vitest/config'
import {react} from '@vitest/plugin-react'
export default defineConfig({
    plugin:[react()],
    test:{
        enviroment : 'jsdom',
        setupfile:'',
        global :true

    }
})