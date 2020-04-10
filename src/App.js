import React, {useState, useEffect} from 'react';
import api from './services/api'

import './App.css';


import Header from './components/Header'

function App (){
  const [projects,setProjects]= useState (['Desenvolvimento de app','Front-end web']);
  useEffect(()=>{
    api.get('/projects').then(resposnse=> {
      console.log(useEffect)
    });

  },[]);

  function handleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects,`Novo projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
    <>

      <Header title="Projects"/>
      <img width={300} src={backgroundImage}/>
      <ul>
        {projects.map(project=><li key={project}>{project}</li>)}
      </ul>
      <button type="button"onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}
export default App;