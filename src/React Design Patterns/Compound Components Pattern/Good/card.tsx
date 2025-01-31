import { CardContext } from "./CardContext";
import { useCardContext } from "./CardContext";
export type Data = {
  title: string;
  content: string;
  action: string;
};

export default function Card({ children }: { children: React.ReactNode }) {
  const data: Data = {
    title: "Card Title",
    content: "Card content",
    action: "Action",
  };
  return (
    <div className="card">
      <CardContext.Provider value={{ data }}>
        <div className="">{children}</div>
      </CardContext.Provider>
    </div>
  );
}

Card.useTitle = function () {
  const context = useCardContext();
  return (
    <div className="card-header">
      <h3>{context.data.title}</h3>
    </div>
  );
};

Card.useContent = function () {
  const context = useCardContext();

  return (
    <div className="card-header">
      <h3>{context.data.content}</h3>
    </div>
  );
};
Card.useAction = function () {
  const context = useCardContext();
  return (
    <div className="card-header">
      <h3>{context.data.action}</h3>
    </div>
  );
};

/*
use in card component 


<Card>
<Card.useTitle/>
<Card.useContent/>
<Card.useAction/>
</Card>

*/
