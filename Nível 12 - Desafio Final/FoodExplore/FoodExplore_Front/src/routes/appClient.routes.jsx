import { Routes, Route } from "react-router-dom";

/* import { DishesClient } from '../pages/DishesClient'; */
import { MenuClient } from '../pages/Menuclient';
import { NewOrder } from '../pages/NewOrder';
import { DishesPreviewClient } from '../pages/DishesPreviewClient';


export function AppClientRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MenuClient />}/>
            {/* <Route path="/dishesClient" element={<DishesClient />}/> */}
            <Route path="/newOrder" element={<NewOrder />}/>
            <Route path="/dishesPreviewClient/:id" element={<DishesPreviewClient />}/>
        </Routes>
    )
}