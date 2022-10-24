import React from 'react'

const Wrapper = () => {
    const data = [
        {
            title: "LOOKING FIR EXCLUSIVE SERVICES?",
            heading: "Get The Best For Your Business",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum reiciendis dolores aspernatur quam voluptatum alias odio recusandae ullam perferendis aliquam et porro quae, optio voluptas error. Distinctio, soluta alias."
        },
    ]
  return (
    <>
    <section className="branding wrapper">
        <div className="container">
            {
                data.map((val) => {
                    return (
                        <>
                        <div className="box">
                            <h3>{val.title}</h3>
                            <h2>{val.heading}</h2>
                            <p>{val.desc}</p>
                            <button className="primary-btn">Contact Us</button>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Wrapper