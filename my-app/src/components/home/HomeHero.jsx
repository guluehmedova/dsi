const HomeHero = () => {
    return (
        <section className='home-hero'>
            <div className="left-side">
                <h1>Making the most of the <br /> ever-growing <br /> <span>information Technology</span></h1>
                <p>Managed by a team of professional experts with extensive <br /> experience and impressive track records</p>
                <a className="custom-btn" href="#">Read More</a>
            </div>

            <div className="right-side">
                <img src="./images/homeHero.png" alt="" />
            </div>
        </section>
    )
}

export default HomeHero;