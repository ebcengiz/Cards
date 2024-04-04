import "../node_modules/bulma/css/bulma.css"
import './App.css'
import Course from './components/course'
import Angular from "./assets/angular.jpg"
import Bootstrap from "./assets/bootstrap5.png"
import Csharp from "./assets/ccsharp.png"
import Web from "./assets/kompleweb.jpg"

function App() {
  

  return (
    <>
    <section className="hero is-link">
  <div className="hero-body">
    <p className="title">Kurslarım</p>
  </div>
</section>
    <div className="container">
      <section className="section">
 <div className="columns">
        <div className="column">
           <Course img={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus perspiciatis dolores nemo quisquam, sapiente pariatur optio illum error voluptates non officiis maxime fugiat tenetur omnis quaerat quos veniam quo!" />
        </div>
        <div className="column">
          <Course img={Bootstrap} title="Bootstrap 5" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus perspiciatis dolores nemo quisquam, sapiente pariatur optio illum error voluptates non officiis maxime fugiat tenetur omnis quaerat quos veniam quo!"/>
        </div>
        <div className="column">
          <Course img={Csharp} title="Backend" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus perspiciatis dolores nemo quisquam, sapiente pariatur optio illum error voluptates non officiis maxime fugiat tenetur omnis quaerat quos veniam quo!"/>
        </div>
        <div className="column">
             <Course img={Web} title="Frontend" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus perspiciatis dolores nemo quisquam, sapiente pariatur optio illum error voluptates non officiis maxime fugiat tenetur omnis quaerat quos veniam quo!"/>
        </div>
      </div>
      </section>
     
    </div>
   
    
    
  
    
    </>
  )
}

export default App
