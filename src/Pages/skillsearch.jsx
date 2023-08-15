import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment/moment";
import imagess from "../assets/images/download.png";
import "../styles/searchjobbytitle.css";
import "../styles/jobsekeer.css";
import Form from "react-bootstrap/Form";
import { Button } from 'reactstrap';

const SkillSearch = () => {
  const [talents, setTalents] = useState([]);
  const [talents_backup, setTalentsBackup] = useState([]);
  const [filter, setFilter] = useState({
    salaryFrom:null,
    salaryTo:null,
    type:null
  });
  const [spin, setSpin] = useState(false);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [talents_data, setTalentsData] = useState([]);
  const [tValue, setTValue] = useState();
  const location = useLocation();

  useEffect(() => {
    let data = [];
    //https://api.zalimburgers.com
    axios
      .get(`https://api.zalimburgers.com/wop-api/jobseekers`)
      .then((result) => {
        result.data.data.map((it) => {
          axios
            .get(
              `https://api.zalimburgers.com/wop-api/jobseekers/skills/${it.id}`
            )
            .then((res) => {
              it["skills"] = res.data.data;
            })
            .catch((err) => console.log(err));
        });
        data = result.data.data;
        setTalentsData(result.data.data);
        setTalentsBackup(result.data.data)
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      if (location.state) {
        if (location.state.talents.length != 0) {
          setTalents(location.state.talents);
          setTalentsBackup(location.state.talents)
          setTValue(location.state.talent);
        } else {
          setTValue(location.state.talent);
          setTalents([]);
        }
      } else {
        setTalents(data);
      }
    }, 2000);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTValue(e.target.value);
    if (e.target.value == "") {
      setTalents(talents_data);
      setTalentsBackup(talents_data)
    }
  };
 
  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]:e.target.value
    })
  };

  const searchTalent = () => {
    //https://api.zalimburgers.com

    let list = [];
    axios
      .post(`https://api.zalimburgers.com/wop-api/jobseekers/byFilter`, {
        talent: tValue,
      })
      .then((result) => {
        result.data.data.map((it) => {
          axios
            .get(
              `https://api.zalimburgers.com/wop-api/jobseekers/skills/${it.id}`
            )
            .then((res) => {
              it["skills"] = res.data.data;
              list.push(it);
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      if (list) {
        setTalents(list);
        setTalentsBackup(list)
        setSpin(false);
      }
    }, 2000);
  };
 
  const clearFilter=()=>{
    console.log("in func")
   
      setFilter(null)
  
    setTalents(talents_backup)
  
  }
  const applyFilter=()=>{
    
    let list=[]
     if(filter.salaryFrom && !filter.salaryTo){
       setMsg("Add the maximum value for salary")
     }else if(!filter.salaryFrom && filter.salaryTo){
      setMsg("Add the minimum value for salary")
     }
     else if(filter.salaryFrom && filter.salaryTo && !filter.type){
      setMsg("")
        talents_backup.map(it=>{
          let sl=parseInt(it.salary)
          let from=parseInt(filter.salaryFrom)
          let to=parseInt(filter.salaryTo)
          if(sl>=from && sl<=to){
            list.push(it)
          }
        })
        console.log("in 2 else if")
     }
     else if(filter.salaryFrom && filter.salaryTo && filter.type){
      setMsg("")
      talents_backup.map(it=>{
        let sl=parseInt(it.salary)
        let from=parseInt(filter.salaryFrom)
        let to=parseInt(filter.salaryTo)
        if(sl>=from && sl<=to && it.job_type==filter.type){
          list.push(it)
        }
      })
      console.log("in 3 else if")
     }else if(!filter.salaryFrom && !filter.salaryTo && filter.type){
      setMsg("")
      talents_backup.map(it=>{
        if(it.job_type==filter.type){
          list.push(it)
        }
      })
     }
     else{
      setMsg('')
      list=talents_backup
      console.log("in else")
     }
     setTalents(list)
  }

  return (
    <div>
      <section className="contact-us-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-search-box search-skilsss">
                <InputGroup className="jobsearchfield mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search  "
                    value={tValue}
                    onChange={(e) => handleChange(e)}
                    className="jobs-search-fields"
                    id="seaechsss"
                  />
                </InputGroup>
                <button
                  type="button"
                  onClick={searchTalent}
                  className="talent-btnss jobsearchs"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="left-filter-box">
                <div className="salary-typoee">
                  <>
                    <label for="inputState">Salary Range</label>

                    <Form.Control
                      type="number"
                      name="salaryFrom"
                      placeholder="From"
                      min="0"
                      value={filter?filter.salaryFrom:''}
                      className="shadow-none"
                      onChange={(e)=>handleFilterChange(e)}
                    />
                    <br></br>
                    <Form.Control
                      type="number"
                      name="salaryTo"
                      className="shadow-none"
                      placeholder="To"
                      value={filter?filter.salaryTo:''}
                      onChange={(e)=>handleFilterChange(e)}
                      //max="50000"
                    />
                    <br></br>
                    {msg &&
                    <p style={{color:'red'}}>
                      {msg}
                    </p>

                    }
                    <div className="emp-typoee">
                  <label for="inputState">Employment Type</label>
                  <select id="inputState" 
                    class="form-control" 
                    value={filter?filter.type:''}
                    name="type"
                    onChange={e=>handleFilterChange(e)}
                  >
                    <option selected>Choose...</option>
                    <option value={1}>freelance</option>
                    <option value={2}>part time</option>
                    <option value={3}>full time</option>
                  </select>
                </div>
                    <button onClick={applyFilter} className="more-skillss"> Apply</button>
                    <button style={{marginLeft:'6px'}} onClick={clearFilter}  className="postjob-btn"> Clear</button>
                  </>
                </div>
                
              </div>
            </div>
            <div className="col-lg-9">
             {/* {!spin && ( */}
              {talents ?
                <>
                  {talents.map((tal) => (
                    <div className="skilsearch-box">
                      <div className="per-images-box">
                        <img className="person" alt="100%x280" src={imagess} />
                      </div>

                      <div className="skill-right-box">
                        <div className="row">

                          <div className="titlebtnsss">
                          <h3>{tal.title}</h3>    <Button
                    variant="primary"
                    type="submit"
                    className="loginbtn"
                  
                  >
               
                    
                View Profile
                  </Button>
                          </div>
                       
                          <div className="col-lg-4">
                            <h6> Salary</h6>
                          </div>
                          <div className="col-lg-4">
                            <h6> Education</h6>
                          </div>
                          <div className="col-lg-4">
                            <h6> Working Hour</h6>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <p> {tal.salary} </p>
                          </div>
                          <div className="col-lg-4">
                            {" "}
                            <p> {tal.educational_description} </p>
                          </div>
                          <div className="col-lg-4">
                            <p> {tal.work_hours} </p>
                          </div>
                        </div>

                        <div className="profile-description">
                          <h6> profile description </h6>
                          <p>{tal.profile_desc}</p>
                        </div>

                        <div className="top-skill">
                          <h6> Top Skills</h6>
                          {tal.skills && (
                            <>
                              {tal.skills.map((skil) => (
                                <span className="bggrayyy">
                                  {" "}
                                  {skil.description}
                                </span>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                      <br></br>
                    </div>
                  ))}
                </>:<p>No Record Found.Please Reload</p>
              }
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillSearch;
