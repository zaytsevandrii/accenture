import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import StylesNav from "../styles/Navigate.module.scss"


const NavMenu = (props) => {
    const [open, setOpen] = useState(false)
    /* console.log('render menu') */
    const sortRef=useRef()
    /* console.log(sortRef.current) */
    useEffect(() => {
        const clickOutside = (event) => {
            console.log(event.path)
        
        }
        document.body.addEventListener("click", clickOutside)
    }, [])

     const changeVisible = () => {
        setOpen(!open)
    }
    return (
        <div ref={sortRef} className={StylesNav.navMenu} >
            <p onClick={changeVisible} className={`${open?StylesNav.active:''}`}>{props.title}</p>
            <CSSTransition  in={open} classNames="alert1" timeout={400} unmountOnExit>
                {props.children}
            </CSSTransition>
        </div>
    )
}

export default NavMenu



  /*   if (!event.path.includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener("click", clickOutside)
        return () => {
            document.body.removeEventListener("click", clickOutside) */