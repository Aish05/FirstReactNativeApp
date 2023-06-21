import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

export const Chair = (props: { theme: any }) => {
    const {theme} = props
    const [ isBig, setIsBig ] = useState(false)

    useEffect( () => {
        console.log('inside useEffect');
    }, [isBig]
    )

    console.log('isBig', isBig);
    
    const changeState = () => {
        setIsBig(currentState => !currentState)
    }

    return (
        <Text style={{fontSize : isBig ? 24 : 14, color: theme === 'dark' ? 'grey' : 'purple'}} onPress={changeState}>This is Chair</Text>
    );
}

