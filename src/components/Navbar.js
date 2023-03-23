function Navbar(props){
    return(
        <>
            <nav>
                <div>
                    <h1>Image Gallery</h1>    
                </div>
                <div>
                    <input className="navSearchBar" type="text" placeholder="search images here" />
                </div>
                <div>
                    <ul>
                        <li><a className={props.mode + "a"} href="/">Explore</a></li>
                        <li><a className={props.mode + "a"} href="/">Collection</a></li>
                        <li><a className={props.mode + "a"} href="/">Community</a></li>
                    </ul>
                </div>
                <div className="dark-mode">
                    <p>dark mode</p>
                    <input onClick={props.toggleMode} type="checkbox"/>
                </div>
            </nav>
        </>
    )
}
export default Navbar