import React from 'react'

const Skill = () => {
    const Progress = ({done, title}) =>{
        return (
            <div className="progress">
                <div className="progress-done" style={{opacity:1,width: `${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }

    const data = [
        {
            title: "Every Day is a New Challenge",
            para: "            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint asperiores expedita eos atque, dolorum natus eius sapiente commodi at.",
            para1: "            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint asperiores expedita eos atque, dolorum natus eius sapiente commodi at."
        },
    ]
  return (
    <>
    <section className="skill">
        <div className="container">
            <div className="heading">
                <h3>WHY CHOOSE US</h3>
                <h1>Some Of My Skill</h1>
            </div>

            <div className="content flex">
                <div className="left topMargin">
                    <Progress done = "70" title= 'HTML'/>
                    <Progress done = "80" title= 'CSS'/>
                    <Progress done = "50" title= 'JAVASCRIPT'/>
                    <Progress done = "30" title= 'REACTJS'/>
                </div>
                <div className="right mtop">
                    {data.map((val) => {
                        return (
                            <>
                            <h1>{val.title}</h1>
                            <p>{val.para}</p>
                            <p>{val.para1}</p>
                            <button className="primary-btn">Hire Me</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skill