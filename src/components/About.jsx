import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/69697131_2440429842717248_6450510458720878592_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=-6KCj7ko0ZUAX_NuY59&_nc_ht=scontent.fbkk23-1.fna&oh=9f0b7baf6a680faa4e9ffc2017dfab66&oe=5EA11C54"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Narinchot Ajareepipat (610610591)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
