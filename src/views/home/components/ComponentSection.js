import React from 'react';

import { Button, Rating  } from 'flowbite-react';

const ComponentSection = (props) => {
    return (
        <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1618890334461-c33a04c4c916?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 ">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    <figure>
                        <Rating size="md">
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>
                        {props.hello}
                    </figure>
                </h1>
            </div>
        </section>
    );
};

export default ComponentSection;
