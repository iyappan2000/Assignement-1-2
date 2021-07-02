import React, { useState,useEffect,useRef } from "react";
import "./Style.css";
import axios from "axios";
import { useQuery } from "react-query";
import { FaWindowClose } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Multipleselect() {
  const [name, setName] = useState("");
  const [Visible, setVisible] = useState(false);
  const [Addname, setAddname] = useState([]);
  const [Filter, setFilter] = useState("", []);
  const [Hidden, setHidden] = useState([]);

  const GetAxios = async () => {
    const { data } = await axios(
      "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
    );
    setLists(data);
  };

  const { data, isLoading, isError, isSuccess } = useQuery("data", GetAxios);

  const [Lists, setLists] = useState({},[],data);

  
  const Addhandler = (name) => {
    if (name !== "") {
      const taskDetails = {
        value: name,
      };
      setAddname([...Addname, taskDetails]);
    }
  };

  const removeall = () => {
    if (name !== "") {
      const clear = {
        value: (
          <button className="CloseIcon" onClick={removeHandler}>
            <FaTimes/>
          </button>
        ),
      };
      setHidden([clear]);
    }
  };

  const removeHandler = () => {
    setAddname([]);
    setHidden([]);
  };

  const removeTask = (e, value,name) => {
    e.preventDefault();
    setAddname(Addname.filter((t) => t.value !== value));
    var task = {name};
    setLists([...Lists,task]);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
    console.log(Filter);
  };

  function filtered(options) {
    return options.data.filter((option) =>
      option.name.toLowerCase().includes(Filter.toLowerCase())
    );
  }

  const removeOption = (options) => {
    const removeitem = options.data.filter((option) => option.name !== name);
    setLists(removeitem);
  };

  /**Handleclick */
  const ClickHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
    Addhandler(e.target.value);
    // removeOption(e.target.value)
  };


  /**ClickOutside Function */
  let menuRef = useRef();
        useEffect(() => {
            let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setVisible(false);
            }
            
        }
            document.addEventListener('mousedown',handler);

            return () => {
                document.removeEventListener('mousedown',handler);
            }
        });


  return (
    <div>
          <h3 style = {{marginLeft:'430px'}}>Multiple Dropdown Task</h3>

      <span>
        {Hidden.map((r) => (
          <div>{r.value} </div>
        ))}{" "}
      </span>
    <div ref = {menuRef}>
        <div className="Addingbox">
          {Addname.map((data) => (
            <div className="Addvalue" key={data.id}>
              {data.value} &nbsp;
              <FaWindowClose
                onClick={(e) => {
                  removeTask(e, data.value);
                }}
                className="windowcloseicon"
              />
            </div>
          ))}
          <input
            type="text"
            placeholder="Select Option..."
            onChange={(e) => filterHandler(e)}
            onClick={() => setVisible(!Visible)}
          />
          <button className="Downarrow" onClick={() => setVisible(!Visible)}>
            <FaAngleDown />
          </button>
        </div>
      
        {isLoading ? <p>Loading </p> : null}
        {isError && <p>error</p>}
        {isSuccess && (
          <div>
            {Visible ? (
              <div class="container">
                {filtered(Lists).map((a) => (
                  <div className="options">
                    <option
                      onClick={(e) => {
                        ClickHandler(e);
                        removeall();
                      }}
                    >
                      {a.name}
                    </option>{" "}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
        </div>
      </div>
  );
}
export default Multipleselect;
