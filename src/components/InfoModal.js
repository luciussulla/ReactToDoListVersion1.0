import {useEffect } from "react"

const InfoModal = ({status, setIsModalVisible})=> {
  const currentClass = `modal-info modal-info-${status}`

    useEffect(()=> {
      setIsModalVisible(true)
      const timeout = setTimeout(()=> {
        setIsModalVisible(false)
      }, 3000)
      return ()=> {
        clearTimeout(timeout)
      }
    })

  return <p className={currentClass}>Info Modal</p>
}

export default InfoModal