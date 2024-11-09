'use client'
import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import ReduxLayout from './ReduxLayout'

export default function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            <ReduxLayout>
                {children}
            </ReduxLayout>
        </Provider >
    )
}