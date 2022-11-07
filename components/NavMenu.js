import { useEffect, useRef, useState } from "react"

const NavMenu = (props) => {
    const [open, setOpen] = useState(false)
    const sortRef = useRef()
    useEffect(() => {
        const clickOutside = (event) => {
            if (!event.path.includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener("click", clickOutside)
        return () => {
            document.body.removeEventListener("click", clickOutside)
        }
    }, [])
    
    const changeVisible=()=>{
        setOpen(!open)
    }
  return (
    <div ref={sortRef} ><p onClick={changeVisible}>{props.title}</p>{open && props.children}</div>
  )
}

export default NavMenu