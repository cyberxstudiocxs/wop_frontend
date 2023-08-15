import React from "react";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import imagess from "../assets/images/download.png";
import Form from "react-bootstrap/Form";
import JobSearching from "./JobSeekers/JobSearching";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState();
  const [talent, setTalent] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {

   

    const wrapper = document.querySelector(".wrapper");

    const carousel = document.querySelector(".carousel");

    const firstCardWidth = carousel.querySelector(".card").offsetWidth;

    const arrowBtns = document.querySelectorAll(".wrapper i");

    const carouselChildrens = [...carousel.children];



    let isDragging = false,

      isAutoPlay = true,

      startX,

      startScrollLeft,

      timeoutId;



    // Get the number of cards that can fit in the carousel at once

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);



    // Insert copies of the last few cards to the beginning of carousel for infinite scrolling

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {

      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);

    });



    // Insert copies of the first few cards to end of carousel for infinite scrolling

    carouselChildrens.slice(0, cardPerView).forEach(card => {

      carousel.insertAdjacentHTML("beforeend", card.outerHTML);

    });



    // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox

    carousel.classList.add("no-transition");

    carousel.scrollLeft = carousel.offsetWidth;

    carousel.classList.remove("no-transition");



    // Add event listeners for the arrow buttons to scroll the carousel left and right

    arrowBtns.forEach(btn => {

      btn.addEventListener("click", () => {

        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;

      });

    });



    const dragStart = (e) => {

      isDragging = true;

      carousel.classList.add("dragging");

      // Records the initial cursor and scroll position of the carousel

      startX = e.pageX;

      startScrollLeft = carousel.scrollLeft;

    }



    const dragging = (e) => {

      if (!isDragging) return; // if isDragging is false return from here

      // Updates the scroll position of the carousel based on the cursor movement

      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);

    }



    const dragStop = () => {

      isDragging = false;

      carousel.classList.remove("dragging");

    }



    const infiniteScroll = () => {

     

      if (carousel.scrollLeft === 0) {

        carousel.classList.add("no-transition");

        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);

        carousel.classList.remove("no-transition");

      }

      // If the carousel is at the end, scroll to the beginning

      else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {

        carousel.classList.add("no-transition");

        carousel.scrollLeft = carousel.offsetWidth;

        carousel.classList.remove("no-transition");

      }



      // Clear existing timeout & start autoplay if mouse is not hovering over carousel

      clearTimeout(timeoutId);

      if (!wrapper.matches(":hover")) autoPlay();

    }



    const autoPlay = () => {

      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false

      // Autoplay the carousel after every 2500 ms

      timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);

    }

    autoPlay();



    carousel.addEventListener("mousedown", dragStart);

    carousel.addEventListener("mousemove", dragging);

    document.addEventListener("mouseup", dragStop);

    carousel.addEventListener("scroll", infiniteScroll);

    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));

    wrapper.addEventListener("mouseleave", autoPlay);








}, []);

  useEffect(() => {
    axios
      .get(`https://api.zalimburgers.com/wop-api/skills`)
      .then((res) => {
        setSkills(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTalentChange = (e) => {
    setTalent(e.target.value);
  };
  const searchJob = () => {
    axios
      .post(`https://api.zalimburgers.com/wop-api/joblistings/title`, {
        title: title,
      })
      .then((result) => {
        setJobs(result.data.data);
        
    navigate("/jobseekersearchjob", {
          state: {
            jobs: result.data.data,
            title: title,
          },
        });
      })
      .catch((err) => console.log(err));
  };

  const searchTalent = () => {

   
    axios
      .post(`https://api.zalimburgers.com/wop-api/jobseekers/byFilter`, {
        talent: talent,
      })
      .then((result) => {
        result.data.data.map(it=>{
          axios
          .get(`https://api.zalimburgers.com/wop-api/jobseekers/skills/${it.id}`)
          .then(res=>{
           it['skills']=res.data.data
        }).catch(err=>console.log(err))
        })
        //setJobs(result.data.data);
        
         navigate("/searchskill", {
          state: {
            talents: result.data.data,
            talent: talent,
          },
        });
      })
      .catch((err) => console.log(err));
  };




  return (
    <div>
      <Header title="home" description="Wop Online ">
     
      </Header>

      <section className="homebanner">
        <div className="container  ">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-box">
                <h1>
                  Connecting Pakistani Talent to <br></br>
                  International Businesses For Online Work
                </h1>
                <div className="banner-space"></div>
              
              </div>
            </div>
          </div>
          <div className="banner-space"></div>
          <div className="row">
            <div className="col-lg-6">
              <div className="talent-left-box">
                <p>
                  Seeking Exceptional <span className="talent"> Talent ? </span>
                </p>
                <div className="Talent-search-box">
                  <InputGroup className="outer-box-search mb-3">
                    <div className="serach-icons">
                      <BsSearch />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Search Worker Profiles"
                      className="box-search shadow-none"
                      value={talent}
                      onChange={(e) => handleTalentChange(e)}
                    />
                    <button type="button"  onClick={() => searchTalent()} className="talent-btnss">
                      Search
                      
                    </button>
                  </InputGroup>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="talent">
                Job Hunting? Let's <span className="talent"> Connect !</span>
              </p>
              <div className="work-search-box">
                <InputGroup className="outer-box-search mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search Jobs"
                    className="box-search shadow-none"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                  <button
                    type="button"
                    className="talent-btnss"
                    onClick={() => searchJob()}
                  >
                    Search
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homepopulartalent">
        <div className="container  ">
          <div className="row">
            <div className="col-lg-12">
              <div className="middleheading">
                <h3 className="Talent-heading"> Popular Talent Hunts</h3>
              </div>
            </div>
          </div>

          <div className="row ">
            {skills.map((skill) => (
              <div className="col-lg-4">
                <div className="points-lists">
                  <ul>
                    <li>
                      <a> {skill.description}</a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}

         
          </div>
          <div className="row ">
            <div className="col-lg-12">
              <div className="more-box">
                <Link className="more-skillss"> See More Skills </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-space"></div>

    


      <section>  
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

            <div className="middleheading">
                <h3 className="Talent-heading"> What Our Employers Say </h3>
              </div>
          
            </div>
          </div>
        </div>

        <div className="banner-space"></div>
    

<div className="container">
  <div className="row">
    <div className="col-lg-12">
    <div class="wrapper">

<i id="left" class="fa fa-angle-left"></i>

<ul class="carousel">

  <li class="card">

    <div class="img"><img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            /></div>
    <p>     “I couldn't be thankful and happier with my new
                              job, and I'm grateful to Work Online Pakistan for
                              making it all possible!"  </p>

    <h2>Sana</h2>

    <span>Freelance Writer</span>

  </li>

  <li class="card">

    <div class="img"><img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            /></div>
<p>  ". Work Online Pakistan has provided me with an affordable and efficient solution to my talent acquisition needs"</p>
    <h2>Ali</h2>

    <span> CEO.</span>

  </li>

  <li class="card">

    <div class="img"><img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            /></div>
<p>   “ Thanks to WOP, finally now I have a job that allows me to work from anywhere in Pakistan!"</p>
    <h2>Hassan</h2>

    <span>Web Developer</span>

  </li>

  <li class="card">

    <div class="img"><img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            /></div>
<p>  “ I highly recommend Work Online Pakistan to any employer looking to expand their team remotely."</p>
    <h2>Mariam</h2>

    <span>Small Business Owner</span>

  </li>

  



</ul>

<i id="right" class="fa  fa-angle-right"></i>

</div>
    </div>
  </div>
</div>
<div className="banner-space"></div>
</section>
     
    

    
<div className="banner-space"></div>

      
    </div>
  );
};


<script>  


</script>
export default Home;
