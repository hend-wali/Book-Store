import "./index.css";
import { books } from "./books";
import Book from "./Book";

function Booklist() {
  return (
    <>
    <h1> amazon best sellers </h1>
    <section className="booklist">
      {books.map((book , index) => {
        return <Book {...book} key={book.id}  number={index}/>;
      })}
    </section>
    </>
  );
}
export default Booklist;
