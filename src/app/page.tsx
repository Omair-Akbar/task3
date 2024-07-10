"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export default function Home() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  // const [users, setUsers] = useState<User[]>([]);

  // const fetchUsers = async () => {
  //   const res = await fetch('localhost:3000/api/users');
  //   const data: User[] = await res.json();
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age: Number(age), gender }),
    });
    // fetchUsers();
  };

  return (
    <div className="min-h-screen bg-darkPurple text-white flex flex-col items-center py-10">
      <form 
        onSubmit={handleSubmit} 
        className="bg-lightPurple p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl mb-4">Add a User</h1>
        <input 
          type="text" 
          value={name} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
          placeholder="Name" 
          required 
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <input 
          type="number" 
          value={age} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} 
          placeholder="Age" 
          required 
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <input 
          type="text" 
          value={gender} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGender(e.target.value)} 
          placeholder="Gender" 
          required 
          className="mb-2 p-2 w-full bg-darkPurple text-white rounded-md"
        />
        <button 
          type="submit" 
          className="bg-purple-500 p-2 w-full rounded-md hover:bg-accentPurple transition-colors"
        >
          Add User
        </button>
      </form>
      {/* <div className="mt-10 w-full max-w-sm">
        <h2 className="text-xl mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 p-2 bg-darkPurple rounded-md">
              {user.name} - {user.age} - {user.gender}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
