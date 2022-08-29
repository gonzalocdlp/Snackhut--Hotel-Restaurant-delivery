import React from 'react'
import 'react-bootstrap'
import './Menu.css'

function Menu() {
  return (
    <div>
    
    <div className="menu">
        <div className="menu-item">
            <div className="menu-item-name">
            <div className="menu-item-image">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="food" />
                            </div>
                <h3>Pepperoni Pizza</h3>
                </div>
                <div className="menu-item-description">
                                        <p className="description">Pepperoni, mushrooms, green peppers, and onions</p>
                                        </div>
                                        <div className="menu-item-price">
                                    <p className="price">$9.99</p>
                                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-name">
                    <div className="menu-item-image">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="food" />
                            </div>
                        <h3>Cheese Pizza</h3>
                        </div>
                        <div className="menu-item-description">
                                        <p className="description">Pepperoni, mushrooms, green peppers, and onions</p>
                                        </div>
                                        <div className="menu-item-price">
                                    <p className="price">$9.99</p>
                                    </div>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-image">
                                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="food" />
                            </div>
                            <div className="menu-item-name">
                                <h3>Veggie Pizza</h3>
                                </div>
                                
                                    <div className="menu-item-description">
                                        <p className="description">Pepperoni, mushrooms, green peppers, and onions</p>
                                        </div>
                                        <div className="menu-item-price">
                                    <p className="price">$9.99</p>
                                    </div>
                                        </div>
                                        </div>



    </div>
  )
}

export default Menu
