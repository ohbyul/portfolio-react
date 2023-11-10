import React, { useEffect, useRef, useState } from "react"
import { Link, withRouter } from "react-router-dom"
import routes from '../routes'

const AppHeader = (props) => {
    const { DarkThemeToggle } = props
    //--------------- session ---------------
    const path = window.location.pathname;
    //--------------- session ---------------
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        setMenuList(routes.menu.filter(x => x.stage === 1))
    }, [routes])


    return (
        <header >
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white w150px">
                            <img src="/logo-ob.png" className="mr-3 h-6 sm:h-9 w100p h100p" alt="Logo" />
                        </span>
                    </a>

                    <div className="flex items-center lg:order-2">
                        <DarkThemeToggle />
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                menuList?.map((menu, index) => {
                                    const subMenus = routes.menu.filter(x => x.stage === 2 && x.upperName === menu?.name)
                                    return (
                                        <li key={index} onClick={() => props.history.push(menu.path)}>
                                            <div href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                                {menu?.name}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default withRouter(AppHeader)
