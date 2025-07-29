import React from "react";
import { useState } from "react";

function TBook() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, surname, phone, email };
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, newUser]);
    }
    setName('');
    setSurname('');
    setPhone('');
    setEmail('');
  };
  const handleEdit = (index) => {
    const user = users[index];
    setName(user.name);
    setSurname(user.surname);
    setPhone(user.phone);
    setEmail(user.email);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
    if (editIndex === index) setEditIndex(null);
  };
  const filteredUsers = users.filter(user =>
    user.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div style={{ padding: '20px' }}>
      <h2>Телефонна книга</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ім’я" value={name} onChange={e => setName(e.target.value)} required/>
        <input type="text" placeholder="Прізвище" value={surname} onChange={e => setSurname(e.target.value)} required/>
        <input type="text" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} required/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
        <button type="submit">{editIndex !== null ? "Оновити" : "Додати"}</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <input type="text" placeholder="Пошук за прізвищем..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      </div>
      <div style={{ marginTop: '20px' }}>
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index}>
                <strong>{user.name} {user.surname}</strong><br />
                Телефон: {user.phone}<br />
                Email: {user.email}<br />
                <button onClick={() => handleEdit(index)}>Редагувати</button>
                <button onClick={() => handleDelete(index)}>Видалити</button>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>Користувачів не знайдено.</p>
        )}
      </div>
    </div>
  );
}

export default TBook;
