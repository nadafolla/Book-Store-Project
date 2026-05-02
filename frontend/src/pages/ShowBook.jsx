
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    // 1️⃣ Backticks obligatoires + correction de l'endpoint (bookd -> books)
    // axios.get(`http://localhost:5555/book/${id}`)
    axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        console.log('Données reçues:', res.data); // 🔍 Utile pour vérifier la structure
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du fetch:', error);
        setLoading(false);
      });
  }, [id]); // 2️⃣ Ajout de 'id' dans les dépendances

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            {/* <span>{book.id}</span> */}
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            {/* 3️⃣ Champs sans underscore + optional chaining pour éviter les erreurs */}
            {/* <span>{book?.title}</span> */}
            <span> {book?.title} </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            {/* <span>{book?.author}</span> */}
            <span> {book?.author} </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            {/* <span>{book?.publishYear}</span> */}
            <span> {book?.publishYear} </span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            {/* 4️⃣ Correction Data -> Date et createAt -> createdAt */}
            <span>{book?.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}</span>
            {/* <span> {new Date(book.createdAt).toString() } </span> */}
            
           
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            {/* 5️⃣ Correction updateAt -> updatedAt */}
            <span>{book?.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}</span>
            {/* <span> {new Date(book.updatedAt).toString()} </span> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;