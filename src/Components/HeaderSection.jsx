import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className="bg-dark">
                <div style={{ width: '95vw', height: '100vh' }} className="d-flex justify-content-center align-items-center">
                    <div>
                        <img className='img-fluid' src="https://cdn.dribbble.com/users/3754218/screenshots/16204871/media/db5945b3b9afa92d3c6dd6828eb89973.png?resize=400x0" alt="" srcset="" />
                    </div>
                    <div className="container">
                        <h1 className="text-white">
                            Lorem ipsum dolor sit.
                        </h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis explicabo, soluta dolore non commodi? Eaque sunt veniam blanditiis quasi, accusamus numquam voluptates maxime necessitatibus reprehenderit vero ullam quo amet.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
