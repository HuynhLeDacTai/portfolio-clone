import React from 'react'

const About = () => {
    const data = [
        {
            title: "Who I Am And What I Do",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt quidem voluptatibus accusantium vitae fuga voluptate saepe minima assumenda voluptatum officiis, autem delectus sed, tempore, fugiat ex sequi ab eius.",
            desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt quidem voluptatibus accusantium vitae fuga voluptate saepe minima assumenda voluptatum officiis, autem delectus sed, tempore, fugiat ex sequi ab eius.",
            cover: "./assets/about.jpg",
        }
    ]
  return (
    <>
    <section className="about topMargin">
        <div className="container flex">
            {
                data.map((value) => {
                    return (
                        <>
                        <div className="left mtop">
                        <div className="heading">
                            <h3>About Me</h3>
                            <h1>{value.title}</h1>
                        </div>

                        <p>{value.desc1}</p>
                        <p>{value.desc2}</p>
                        <p>{value.desc3}</p>
                        <button className="primary-btn">Download CV</button>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src={value.cover} alt="" />
                        </div>
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

export default About