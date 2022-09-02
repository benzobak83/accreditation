import React from 'react'

const SelectContent = (props) => {
    const {selectCurrent, selectItem} = props
   

    return (
        <>
        {selectCurrent? selectCurrent : selectItem}
        </>
    )
}

export {SelectContent}