import React from 'react';
import KatalogÜrünler from './KatalogÜrünler';
import { markalar } from './markalar';
const AllGetMarka = () => {

    return (
        <>
            {
                markalar && markalar.map((marka) => (

                    <KatalogÜrünler key={marka.id} KatalogÜrünü={marka} />

                ))
            }


        </>
    );
}

export default AllGetMarka;