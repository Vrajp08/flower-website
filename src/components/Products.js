import React from 'react'
import FinalProducts from './FinalProducts'
export default function Products() {
    return (
        <div>
            <section className="products" id="products">
            <h1 className="heading"> latest <span>products</span> </h1>
                <div className="box-container mx-auto my-auto">
                    <FinalProducts images="./images/img-2.jpg" discount="-10%" />
                    <FinalProducts images="./images/img-2.jpg" discount="-15" />
                    <FinalProducts images="./images/img-3.jpg" discount="-5" />
                    <FinalProducts images="./images/img-4.jpg" discount="-20" />
                    <FinalProducts images="./images/img-5.jpg" discount="-17" />
                    <FinalProducts images="./images/img-6.jpg" discount="-3" />
                    <FinalProducts images="./images/img-7.jpg" discount="-18" />
                    <FinalProducts images="./images/img-8.jpg" discount="-19" />
                </div>
            </section>
        </div>
    )
}
