import Navbar from "../navbar/Navbar"
import {Link, redirect} from 'react-router-dom'
import "./Collections.css"
import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import {nanoid} from "nanoid"
const Collections = () => {
    return(
    <>
        <Navbar />
        <div className="quick__nav container"> 
            <ul> 
                <li> <Link to="/" className="quick__nav-link">Home</Link></li>
                <li> <Link className="quick__nav-link">{}</Link></li>
            </ul>
        </div>
        <div className="collections container">
            <section className="collections sidebar__menu"> 
                <h3 className="main__menu heading"> Main Menu </h3>
                <div className="collections collection__dropdown">
                    <div className="collections dropdown__menu__container"> 
                        <div className="collections dropdown-col-1">
                            <p>Chairs </p>
                            <i className="fa-regular fa-caret-right user"></i>
                        </div>
                        <ul className="collections-sub-menu" id={nanoid()}> 
                            <li> Side Chairs </li>
                            <li> Desk Chair</li>
                            <li> Stool </li>
                            <li> Executive Chairs </li>
                            <li> Barber/Salon Chairs </li>
                            <li> Operator Chair </li>
                        </ul>
                    </div>
                    <div className="collections dropdown__menu__container"> 
                        <div className="collections dropdown-col-1"> 
                            <p> Tables </p>
                            <i className="fa-regular fa-caret-right user"></i>
                        </div>
                        <ul className="collections-sub-menu"> 
                            <li> Dining Table </li>
                            <li> Bar Table </li>
                            <li> Dressing Table </li>
                            <li> Side Table </li>
                            <li> Coffee Table</li>
                        </ul>
                    </div>
                </div>
            </section>
            <main className="collections main__menu">
                <h2> Collections</h2>
                <div className="collections__filters"> 
                    <div className="filters"> 
                        <p> Showing 1 - 48 of 102 Products </p>
                        <div className="filter__item"> 
                            <p> Display: 48 per page </p>
                            <i className="fa-regular fa-caret-down user" style={{paddingLeft: "10px"}}></i>
                        </div>
                    </div>
                    <div className="filters"> 
                        <div className="filter__item">
                            <p> Sort by: Featured </p>  
                            <i className="fa-regular fa-caret-down user" style={{paddingLeft: "10px"}}></i>
                        </div>
                        <div className="filter__item"> 
                            <p> View </p>
                            <i className="fa-solid fa-grid search-display"></i>
                            <i className="fa-duotone fa-list search-display"></i>
                        </div>
                    </div>
                </div>
                <div class="product__card-container"> 
                    <ProductCard id={3} itemName="Side Chart" itemPrice="3,434" reviewScore="4.5" itemImageName="Sidechar.webp" key={nanoid()}/> 
                </div>
            </main>
        </div>
    </>
    )
}
export default Collections