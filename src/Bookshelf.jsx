import { useState } from 'react';
import './App.css'


function Bookshelf() {

    const [newBook, setNewBook] = useState([])

    const [books, setBooks] = useState([
        { title: '', author: '' },
    ]);

    function handleInputChange(e) {
        setBooks({
            ...books,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setNewBook([...newBook, books])
        setBooks({
            title: '',
            author: '',
    
        })
        
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Title: </label>
                    <input type="text"
                        value={books.title}
                        name="title"
                        onChange={handleInputChange}

                    />
                    <label htmlFor="">Author: </label>
                    <input type="text"
                        value={books.author}
                        name="author"
                        onChange={handleInputChange}

                    />

                    <button type="submit">Add Book</button>


                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Book cards will display here */}
                {newBook.map((task, index) => (
                    <div key={index} className="bookCard">
                        <h4>{task.title}</h4>
                        <p>Done by {task.author}</p>                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf;