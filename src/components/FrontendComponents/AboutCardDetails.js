import "bootstrap/dist/css/bootstrap.min.css";

function AboutCardDetails(props) {
  return (
    <div>
      <div>
        <h1 className="text-light">{props.titleCard}</h1>
        <h2 className="h2">
          {props.question}
          <span className="text-warning fw-bolder"> {props.questionSpan}</span>
        </h2>

        <p className="card-text lead">{props.answer}</p>
        <p className="text-dark fw-bold">
          <span className="text-success">{props.title}</span>
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default AboutCardDetails;
