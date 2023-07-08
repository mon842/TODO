import React from 'react'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import Link from 'next/link';

const NavBtn = ({ add }) => {
    return (
        <button>
            {add ?

                <Link className='text-bold' href={"/add"}>
                    <LibraryAddRoundedIcon className='dark:text-white' fontSize="large" />
                </Link>
                :
                <p className='text-2xl dark:text-white font-mono font-bold'>
                    <Link href={"/"}>
                        tasks
                    </Link>
                </p>}
        
        </button>
    )
}

export default NavBtn

// <Link href="/posts/first-post">this page!</Link>