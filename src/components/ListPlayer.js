import React, {Fragment, useEffect, useState} from 'react'
import EditPlayer from './EditPlayer'

export default function ListPlayer() {
    const [players, setPlayers] = useState([])

    const getPlayers = async () => {
        try{
            const response = await fetch("http://localhost:5001/players/")
            const jsonData = await response.json()
            setPlayers(jsonData)
        }catch(err){
            console.error(err.message)
        }
    }
    useEffect(() =>{
        getPlayers()
    },[])

    const deletePlayer = async id => {
        try {
          const deletePlayer = await fetch(`http://localhost:5001/players/${id}`, {
            method: "DELETE"
          });
            console.log(deletePlayer)
            getPlayers()
        }catch(err){
            console.error(err.message)
        }
    }
    return (
        <Fragment>
            <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {players.map(player => (
        <tr key={player.player_id}>
            <td>{player.description}</td>
            <td><EditPlayer player={player}></EditPlayer></td>
            <td><button className="btn btn-warning" onClick={() => deletePlayer(player.player_id)}>Delete</button></td>
        </tr>
    ))}
  </tbody>
</table>
        </Fragment>
    )
}
