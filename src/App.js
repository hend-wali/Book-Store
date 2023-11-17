import "./App.css";

const books = [
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros ",
    img: "./images/Fourth-Wing.jpg",
    id: 1,
  },
  {
    title: "No Brainer",
    author: "Jeff Kinney ",
    img: "./images/No-Brainer.jpg",
    id: 2,
  },
];

function Booklist() {
  return (
    <section className="booklist">
      <Event />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
export default Booklist;

const Event = () => {
  const handleFormInput = () => {
    return;
  };
  const handleButtonClick = () => {
    return;
  };
  const handleFormSubmission = () => {
    return;
  };
  return (
    <section>
      <form >
        <h2> typical Form</h2>
        <input
          type="text"
          name="exemple"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit" onClick={handleFormSubmission}> submit </button>
        <div>
        <button onClick={handleButtonClick} type="button"> Click me</button>
        </div>
      </form>
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
