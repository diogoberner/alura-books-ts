import Button from "../Button";

const topics: string[] = [
  "Android",
  "Marketing Digital",
  "Agile",
  "Startups",
  "HTML & CSS",
  "Python",
  "OO",
  "Java",
];

const VisitedTopics = () => {
  return (
    <section className="bg-dark-blue w-full p-4 pb-6">
      <h2 className="mb-5 text-light text-center text-white uppercase">
        TÓPICOS VISITADOS RECENTEMENTE
      </h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {topics &&
          topics.map((topic, index) => (
            <Button key={index} size="topic">
              {topic}
            </Button>
          ))}
      </div>
    </section>
  );
};

export default VisitedTopics;
