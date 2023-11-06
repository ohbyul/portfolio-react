import React, { useEffect, useRef, useState } from "react"
import { Link, withRouter } from "react-router-dom"

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

    return (
        <div id="header">
            <div className="header-layer">
                <div className="header-logo">
                    {/* <Link to="/"><img src="/images/logo.svg" /></Link> */}
                    <Link to="/"><h1>HOME</h1></Link>
                </div>
                <div className="header-grid">
                    <ul className="header-gnb">
                        <li>
                            <div>COMMON</div>
                            <ul className="header-lnb">
                                <li onClick={() => props.history.push('/')}>BASIC1</li>
                                <li onClick={() => props.history.push('/')}>BASIC2</li>
                            </ul>
                        </li>
                        <li>
                            <div>LIST</div>
                            <ul className="header-lnb">
                                <li onClick={() => props.history.push('/')}>LIST1</li>
                            </ul>
                        </li>
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
