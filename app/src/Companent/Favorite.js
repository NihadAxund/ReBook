import React from 'react'
import { allBooks, AddFovarite } from "../features/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import Product from './Product';

export default function Favorite() {
    //const value = useSelector((state) => state.book.FovariteList);
    const dispatch = useDispatch();
    const value1 = useSelector((state) => state.books.FovariteList);

    function List() {
        return value1.map((item) => {
            if (item != null) {
                return <Product product={item} />;
            }
        });
    }



    return (
        <div className='Book-List'>
            {List()}
        </div>
    )
}
