import React from 'react'

export default function SimpleButton({ otherColor }) {

    const combine = `px-2 ${otherColor} text-white hover:bg-gray-900 border-0`;

    console.log(combine);
    return (
        <article className='mt-8 flex justify-center items-center gap-2'>
            <h1 className='text-xl'>Soy un simple </h1>
            <button className={combine}>Button</button>
        </article>
    );
};
