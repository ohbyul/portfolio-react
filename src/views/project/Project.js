import React, { useState } from 'react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { BiSolidPencil ,BiSolidPlaylist } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import TabDraw from './TabDraw';
import TabPip from './TabPip';
import TabDashboard from './TabDashboard';

const Project = (props) => {
    const categories = [
        {index : 0 , title : 'Draw' , component : <TabDraw />, icon : BiSolidPencil },
        {index : 1 , title : 'PIP' , component : <TabPip />, icon : BiSolidPlaylist },
        {index : 2 , title : 'Dashboard' , component : <TabDashboard />, icon : MdDashboard },
    ]

    const [ activeIndex , setActiveIndex ] = useState(0)


    return (
        <div className='container-wrap bg-white w-100 dark:bg-gray-800'>
            <Tabs.Group aria-label="Tabs with underline" style="underline" className="justify-between tab-list dark:bg-gray-800">
                {categories.map((category, index) => {
                    return (
                        <Tabs.Item className="Chinmoy" key={index} title={category.title} icon={category.icon} onClick={()=>setActiveIndex(category.index)}>
                            <div className='tab-container'>
                                {category.component}
                            </div>
                        </Tabs.Item>
                    );
                })}
            </Tabs.Group>
        </div>
    );
};

export default Project;