interface CardProps {
  title: string;
  children?: React.ReactNode;

}

// MovieCard componen
export default function Card(props: CardProps) {
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
     
          {props.children}
      
      </div>
    </div>
  );
}
