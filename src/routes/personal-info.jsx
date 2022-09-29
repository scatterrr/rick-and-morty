import React, { useState , useEffect } from 'react'
import { useParams } from "react-router-dom";


export default function PersonalInfo() {

  const [Character, fetchCharacter] = useState({})
  const [Episodes, fetchEpisodes] = useState([])
  let { id } = useParams();

  const getData = async () => {

      var episode = [];
      await fetch("https://rickandmortyapi.com/api/character/"+id)
              .then((res) => res.json())
              .then((json) => {
                  episode =json.episode;
                  fetchCharacter(json)
              })

      var episodes = [];

      for(const e of episode) { 
        await fetch(e)
          .then((res) => res.json())
          .then((json) => {
            episodes.push(json);
          })
      }
      fetchEpisodes(episodes);
    }


  useEffect(() => {
     getData()
     }, [id])

  return (
    <>
      <div style={{'background-color': '#f7f7f7'}}>
        <div style={{display:'flex', 'background-color': '#f7f7f7'}}>
          <img id="personal-info-img" src={Character['image']} alt="Avatar"/>
          <h1 style={{"margin-top": "60px"}}>{Character['name']}</h1>
        </div>
        <hr></hr>
        <h2 style={{"margin-top": "5%", "margin-left": "5%", "margin-right": "5%"}}>Personal Info</h2>
        <nav style={{'border-style': 'solid', "margin-left": "5%", "margin-right": "5%"}}>
            <ul>
              <li>Status: {Character['status']}</li>
              <li>Gender: {Character['gender']}</li>
              <li>Species: {Character['species']}</li>
              <li>Location: {Character.location && Character.location.name ? Character.location.name : '' }</li>
              <li>Origin: {Character.origin && Character.origin.name ? Character.origin.name : '' }</li>
              <li>Created Date: {Character['created']}</li>  
            </ul>
        </nav>
        <h2 style={{"margin-top": "5%", "margin-left": "5%", "margin-right": "5%"}}>Episodes</h2>
        <table style={{'border-style': 'solid', "margin-left": "5%", "margin-right": "5%"}}>
          <tr>
              <th>Name</th>
              <th>Air Date</th>
              <th>Episode</th>
              <th>Created Date</th>
          </tr>
            {Episodes.map((item, i) => {
                  return <tr>
                              <td>{item.name}</td>
                              <td>{item.air_date}</td>
                              <td>{item.episode}</td>
                              <td>{item.created}</td>   
                          </tr>
            })}
          </table>
        </div>
    </>
      )
      }