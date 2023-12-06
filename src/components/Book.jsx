import React from 'react'
import "../stylesheets/Book.css"
import intro from "../assets/intro.jpg"

const Book = () => {
  return (
    <div id='book'>
        <section>
           <form>
           <h2><span>Book</span> Your<br /> Rooms</h2>
           <div className="inputs">
           <input type="date" />
            <input type="date" />
            <input type="number" placeholder='Adults' />
            <input type="number" placeholder='Childrens' />
            <button type='submit'>Cheack Availability</button>
           </div>
           </form>
        </section>
        <section>
            <div className="intro">
            <h1>Welcome</h1>
            <h2> Radisson</h2>
            <p className='resort'>Hotel & Resort..</p>
            <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ea dolore voluptates dolores commodi at tempora sequi fuga accusantium incidunt natus, quae illum suscipit numquam, veniam obcaecati consequatur nobis quia.
            </p>
            <button>about us</button>
            </div>
            <div className="intro-img">
                <img src={intro} alt="" />
            </div>
        </section>
    </div>
  )
}

export default Book