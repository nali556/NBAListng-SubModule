import React, { Fragment, useState } from "react";

export default function EditPlayer({player}) {
    const [description, setDescription] = useState(player.description)

    const updateDescription = async (e) =>{
        try{
            const body = {description}
            const resposne = await fetch(`http://localhost:5001/players/${player.player_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        }catch(err){
            console.error(err.message)
        }
    }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${player.player_id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${player.player_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Name
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={e => updateDescription(e)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
