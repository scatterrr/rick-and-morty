import React, { useState , useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";



export default function Contact() {
    const [searchTerm, setSearchTerm] = React.useState("");
    var results = [];
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    const [Characters, fetchCharacters] = useState([])

    const getData = async () => {
        await fetch("https://rickandmortyapi.com/api/character")
                    .then((res) => res.json())
                    .then((json) => {
                    //    console.log(json['results']);
                        results = json['results'];
                        fetchCharacters(json['results'])
                        const r = json['results'].filter(result =>
                            result.name.toLowerCase().includes(searchTerm)
                        );
                        setSearchResults(r);
                    })
                }
    useEffect(() => {
        getData()
        }, [searchTerm])

  return (
    <>
    <div id="sidebar">
          <p>Contacts</p>
          <div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
              />
          </div>
          <nav>
            <ul>
            {searchResults.map((item, i) => {
                return <li>
                    <Link to={`contacts/`+item.id} class='gg'>
                        <nav>
                            <ul>
                                <li>
                                    <div>
                                    <img id="contact-list-img" src={item.image} alt="Avatar"/>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    <p>{item.name}</p>
                                </li>
                                <li>
                                    <p>{item.species}</p>
                                </li>
                            </ul>
                        </nav>
                    </Link>
                </li>
            })}
            </ul>
          </nav>
    </div>
    
    <div >
        <Outlet />
    </div>
    </>
      )
      }