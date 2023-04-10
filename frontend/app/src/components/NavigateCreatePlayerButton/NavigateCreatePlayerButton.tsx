import React from 'react'
import { useCreatePlayer } from '../../useCreatePlayer'
import './NavigateCreatePlayerButton.css'

const NavigateCreatePlayerButton = () => {
  const {navigateCreatePlayer} = useCreatePlayer()
  return (
    <button className='navigateCreatePlayerButton' onClick={()=>{navigateCreatePlayer()}}>
        プレイヤー作成
      </button>
  )
}

export default NavigateCreatePlayerButton