import React from "react";
import headerStyle from "../style/header.css";

export default function header(props) {
    
    const navItems= props.navItem ? props.navItem : [];
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        {navItems.map((item,key)=>{
                            return (
                                <li class={`nav-item ${key==0 ? 'active' : ''}`}>
                                    <a class="nav-link" href={item.path}>{item.title} <span class="sr-only">(current)</span></a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}