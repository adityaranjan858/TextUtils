import React, { useState } from "react";

function About() {
    const [myStyle, setMyStyle] = useState({
        backgroundColor : "white",
        color : "black"    
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const togglestyle = () =>{
        if (myStyle.color === "black") {
            setMyStyle({
                color : "white",
                backgroundColor : "black"
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                backgroundColor : "white",
                color : "black"    
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <div style={myStyle}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quibusdam
        omnis ipsam ut architecto similique quisquam voluptatum facilis nemo nam
        nisi earum quam quod voluptas ipsum sit, autem excepturi, accusantium
        saepe cumque minus tempore possimus quasi? Non sapiente aliquid autem,
        placeat doloribus eaque quidem necessitatibus obcaecati reprehenderit
        nam quibusdam voluptas, eos fugiat ad corrupti rem quae laboriosam neque
        reiciendis ea tenetur harum? Officiis tempore dolor nihil ipsa, ab rerum
        earum et assumenda a nostrum adipisci, tempora ipsum debitis molestiae
        neque fugit dolore alias modi quos excepturi, totam corrupti commodi
        obcaecati accusamus. Magnam dolorem in soluta facilis eum culpa veniam
        facere vel odio molestias unde, ipsa iure modi aut nemo omnis, dolore
        adipisci, sequi commodi. Ipsam quam inventore accusantium reprehenderit
        unde dolores. Ex, debitis? Quasi sint assumenda distinctio ipsa
        necessitatibus, nam excepturi, pariatur expedita aut ea eos perferendis
        est dolorissimos minima nisi, harum aspernatur porro veritatis provident
        molestiae ullam voluptates eos rerum sequi. Repellendus, ipsum. Officia
        nesciunt architecto quam culpa dicta placeat. Ab culpa nisi eum
        molestiae totam, temporibus veniam vitae magni iusto est voluptates
        deleniti saepe inventore ea, delectus unde et! Reprehenderit sit autem
        ducimus, veniam soluta debitis explicabo dolor, modi praesentium nobis
        pariatur distinctio necessitatibus illo repellat totam cupiditate
        voluptate laboriosam unde quaerat quo! Cum natus praesentium dolorum
        aperiam et at repellat unde nulla id officiis in voluptas hic delen
        facere ratione minus, nesciunt saepe aliquam. Velit autem inventore
        maiores obcaecati soluta possimus recusandae? Nobis asperiores illum
        voluptatem.
      </p>
      <button type="submit" className="btn btn-primary" onClick={togglestyle}>{btnText}</button>
    </div>
  );
}

export default About;
