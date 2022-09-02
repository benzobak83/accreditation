import React, {useState, useEffect} from 'react'
import {Card} from './Card'
import {popup} from '../ts/popup'

function CardList(props) {
    const {dragHandlers, cards} = props
  
    useEffect(() => {
        popup('.settings__create-zone', '.popup', '.popup__close')
    },[cards])

    
    
    
   return cards.map((item, index) => {
        return <Card key={index} dragHandlers={dragHandlers} />
    })
            
       
    
}

export {CardList}