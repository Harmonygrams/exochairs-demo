import BarberChair from '../../images/barber-chair.jpg'
const Collections = () => {
    return(
        <>
            <section className="collections sidebar__menu"> 
                <h3> Main Menu </h3>
                <div className="collections collection__dropdown">
                    <div> 
                        <p>Chairs </p><i class="fa-regular fa-caret-down user" style="padding-left: 10px;"></i>
                        <ul> 
                            <li> Side Chairs </li>
                            <li> Desk Chair</li>
                            <li> Stool </li>
                            <li> Executive Chairs </li>
                            <li> Barber/Salon Chairs </li>
                            <li> Operator Chair </li>
                        </ul>
                    </div> 
                    <div> 
                        <p> Tables </p> <i class="fa-regular fa-caret-down user" style="padding-left: 10px;"></i>
                        <ul> 
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
                <div> 
                    <div> 
                        <p> Showing 1 - 48 of 102 Products </p>
                        <p> Display: 48 per page </p><i class="fa-regular fa-caret-down user" style="padding-left: 10px;"></i>
                    </div>
                    <div> 
                        <div>
                            <p> Sort by: Featured </p>  
                            <i class="fa-regular fa-caret-down user" style="padding-left: 10px;"></i>
                        </div>
                        <div> 
                            <p> View </p>
                            <i class="fa-solid fa-grid"></i>
                            <i class="fa-duotone fa-list"></i>
                        </div>
                    </div>
                </div>
                <div> 
                    <div> 
                        <img 
                            
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Collections