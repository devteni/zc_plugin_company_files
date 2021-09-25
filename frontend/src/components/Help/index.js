import React from 'react';

import SearchBar from './SearchBar';
import Accordion from './Accordion';

import {popData, moData} from './accordionData';


const Help = () => {
    return (
        <div className="w-full p-6">
            <div className="flex flex-col justify-between">
                <h2 className="font-semibold text-xl">Help</h2>
                <SearchBar />
                <div className="my-4">
                    <p className="text-lg font-semibold">Popular Searches</p>
                    {
                        popData.map(data => (
                            <Accordion data={data} key={data.id}/>
                        ))
                    }
                </div>
                <div className="my-4">
                    <p className="text-lg font-semibold">More Help</p>
                    {
                        moData.map(data => (
                            <Accordion data={data} key={data.id}/>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Help;