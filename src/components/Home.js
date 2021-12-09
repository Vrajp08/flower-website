import React from 'react'

export default function Home() {
    return (
        <>
            <div>
                <section className="home" id="home" style = {{background:"url(../images/home-bg.jpg) no-repeat"}}>

                    <div className="content">
                        <h3>fresh flowers</h3>
                        <span> natural  beautiful flowers </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore assumenda iste voluptate dolorem pariatur.</p>
                        <a href="/home" className="btn">shop now</a>
                    </div>

                </section>
            </div>
        </>
    )
}
