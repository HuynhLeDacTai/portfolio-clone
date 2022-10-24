import React from 'react'

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quod sed, nesciunt libero aperiam amet sit quisquam ipsum ad facere tempore similique cumque qui beatae esse voluptas rem reprehenderit consectetur"
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quod sed, nesciunt libero aperiam amet sit quisquam ipsum ad facere tempore similique cumque qui beatae esse voluptas rem reprehenderit consectetur"
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quod sed, nesciunt libero aperiam amet sit quisquam ipsum ad facere tempore similique cumque qui beatae esse voluptas rem reprehenderit consectetur"
    },
  ]
  return (
    <>
        <section className="branding">
          <div className="container grid">
            {data.map((value) => {
              return (
                <>
                <div className="box flex">
                  <div className="text">
                    <h1>{value.id}</h1>
                  </div>
                  <div className="para">
                    <h2>{value.heading}</h2>
                    <p>{value.desc}</p>
                  </div>
                </div>
                </>
              )
            })}
          </div>
        </section>
    </>
  )
}

export default Branding