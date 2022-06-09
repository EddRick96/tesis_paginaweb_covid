import React from 'react'
import { Button, Tooltip } from 'antd'

const ButtonBox = () => {

    const handleClick = () => {
        console.log('Se ha clickado en el botón')
    }

    return (
        <Tooltip title="mostrar">
            <Button type="primary" onClick={handleClick}>
                Mostrar
            </Button>
        </Tooltip>
    )
}

export default ButtonBox