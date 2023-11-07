import React, { useEffect, useRef, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import routes from '../routes'

const AppHeader = (props) => {
    //--------------- session ---------------
    const path = window.location.pathname;
    //--------------- session ---------------
    // dropdown
    const dropRef = useRef(null);
    const [dropdown, setDropdown] = useState(false)
    const toggleDrop = e => {
        if (dropdown && (!dropRef.current || !dropRef.current.contains(e.target))) setDropdown(false)
    }
    useEffect(() => {
        window.addEventListener('click', toggleDrop);
        return () => {window.removeEventListener('click', toggleDrop)}
    })
    const [ menuList , setMenuList] =useState([]) 

    useEffect(()=>{
        setMenuList(routes.menu.filter(x=>x.stage === 1))
    },[routes])
    

    return (
        <div id="header">
            <div className="header-layer">
                <div className="header-logo" style={{border : '1px solid black'}}>
                    {/* <Link to="/"><img src="/images/logo.svg" /></Link> */}
                    <Link to="/"><h1>BYEOL</h1></Link>
                </div>
                <div className="header-grid">
                    <ul className="header-gnb">
                        {
                            menuList?.map((menu , index)=>{
                                const subMenus = routes.menu.filter(x=>x.stage === 2 && x.upperName === menu?.name)
                                return(
                                    <li key={index} onClick={() => props.history.push(menu.path)}>
                                        <div>{menu?.name}</div>
                                        <ul className="header-lnb">
                                            {
                                                subMenus?.map((item,subIdx) => {
                                                    return(
                                                        <li key={subIdx} onClick={() => props.history.push(item?.path)}>{item.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="gnb-bg"></div>
                </div>
                <ul className="header-utility">
                    <li className={`user ${dropdown ? 'active' : ''}`} onClick={() => setDropdown(!dropdown)}>
                        <div><span>Contect</span></div>
                        {
                            dropdown &&
                                <ul className="dropdown-list opened" ref={dropRef}>
                                    <li>1</li>
                                    <li>2</li>
                                </ul>
                        }
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default withRouter(AppHeader)
