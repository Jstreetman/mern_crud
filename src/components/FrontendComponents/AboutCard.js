import "bootstrap/dist/css/bootstrap.min.css";
import AboutCardDetails from "./AboutCardDetails";

function AboutCard() {
  const mernCard = [
    {
      titleCard: "About This Project",
      question: "What is a",
      questionSpan: "MERN Stack?",
      answer: `The MERN stack is a popular and powerful technology stack used for
      building web applications. It's an acronym that stands for:`,
    },
  ];

  const mernStack = [
    {
      title: "MongoDB",
      description: `: A NoSQL
      database that stores data in a flexible, JSON-like format.
      MongoDB is known for its scalability and ability to handle
      large amounts of data.`,
    },

    {
      title: "Express.js",
      description: ` : A back-end web application framework for Node.js. Express simplifies the process of building robust and scalable web applications by providing a set of features and middleware for routing, handling requests and responses, and more.`,
    },
    {
      title: "React",
      description: ` : A front-end JavaScript library for building user interfaces. React allows developers to create interactive and dynamic user interfaces efficiently. It follows a component-based architecture, making it easy to manage and reuse UI components.`,
    },

    {
      title: "NodeJS",
      description: ` : A server-side JavaScript runtime environment that allows you to run JavaScript code on the server. Node.js is used in conjunction with Express.js to build the server-side logic of MERN applications.`,
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="card border-dark">
          <div className="card-header bg-dark text-center">
            <AboutCardDetails titleCard={mernCard[0].titleCard} />
          </div>
          <div className="card-body">
            <AboutCardDetails
              question={mernCard[0].question}
              questionSpan={mernCard[0].questionSpan}
              answer={mernCard[0].answer}
            />

            <ul className="list-group my-4">
              <li className="list-group-item border-0">
                <AboutCardDetails
                  title={mernStack[0].title}
                  description={mernStack[0].description}
                />
                <AboutCardDetails
                  title={mernStack[1].title}
                  description={mernStack[1].description}
                />
                <AboutCardDetails
                  title={mernStack[2].title}
                  description={mernStack[2].description}
                />
                <AboutCardDetails
                  title={mernStack[3].title}
                  description={mernStack[3].description}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
