import React from 'react'

export default function About() {
    return (
        <div>
            <section className="about" id="about">

                <h1 className="heading"> <span> about </span> us </h1>

                <div className="row">

                    <div className="video-container">
                        <video src="./images/about-vid.mp4" autoPlay></video>
                        <h3>best flower sellers</h3>
                    </div>

                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam repudiandae autem asperiores quibusdam omnis commodi alias repellat illum, unde optio temporibus.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea est commodi incidunt magni quia molestias perspiciatis, unde repudiandae quidem.</p>
                        <a href="/home" className="btn">learn more</a>
                    </div>

                </div>

            </section>
        </div>
    )
}
