import { Routes, Route } from "react-router-dom";

import { NewDishes } from '../pages/NewDishes';
import { EditDishes } from '../pages/EditDishes';
import { DishesPreviewAdm } from '../pages/DishesPreviewAdm';
import { MenuAdm } from '../pages/MenuAdm';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/dishesPreviewAdm/:id" element={<DishesPreviewAdm />}/>
            <Route path="/editDishes/:id" element={<EditDishes />}/>
            <Route path="/newDishes" element={<NewDishes />}/>
            <Route path="/" element={<MenuAdm />}/>
        </Routes>
    )
}