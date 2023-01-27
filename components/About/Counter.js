import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../../styles/About.module.scss'

const Counter = ({ target, span,id,text }) => {
    const [sum, setSum] = useState(0)
    const inrement = target / 100
    const speed = 2000/target
    
    console.log(id)
    
    useEffect(() => {
        
        const updateCounter=()=>{
            if(sum<target){
                setSum(prev => (prev < target ? Math.ceil(prev + inrement):target))
                setTimeout(updateCounter, speed)
            }else{
                setSum(prev=>prev=target)
            }
        }
        updateCounter()
        
    }, [])

    return (
        <>
            
            <div className="counter__item col-12 col-sm-6 col-lg-3">
                        <div className={styles.counterBlock}>
                            <span className="js-counter" data-count="87">{sum}</span>
                            <span className="symbol">{(id==1||id==3)?'%':'+'}</span>
                        </div>
                        <h6> {span}</h6>
                        <hr />
                        <p>
                           {text}
                        </p>
                    </div>
        </>
    )
}



export default Counter