import React, {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Junior", "Josias"]);
    const [users] = useState([
        {id: 1, name: 'Junior', age: 17},
        {id: 2, name: 'Jorge', age: 40},
        {id: 3, name: 'Ana', age: 22} 
    ])
  return (
    <div>
        <h2>ListRender</h2>
        <div>
            <ul>
                {list.map((nameList, i) => (
                    <li key={i}>{nameList}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) => (
                  <li key={users.id}>
                    nome: {users.name} <br/>
                    age: {users.age}
                  </li>  
                ))}
            </ul>
        </div>
    </div>

  )
}

export default ListRender