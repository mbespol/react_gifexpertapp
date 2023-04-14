import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

    const [ categories, setCategories] = useState( [ 'Pokémon' ] );
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;
        setCategories( [ ...categories, newCategory ] );
    }
    
    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                ) )
            }
        </>
    )
}